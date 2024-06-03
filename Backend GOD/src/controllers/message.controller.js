
import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async(req,res)=>{
    try {
        const {message}= req.body;
        const {id:recieverId}=req.params;
        const senderId = req.user._id;
        console.log("completed=",recieverId,senderId,message,req.params)

        const conversation= await Conversation.findOne({
            participants: {$all:[senderId, recieverId]},
        });
        console.log("conversation check done");
        if (!conversation){
            conversation= await Conversation.create({
                participants: [senderId, recieverId]
            });
        }
        console.log("conversation 2 check done");

        const newMessage = new Message({message,senderId,recieverId});

        console.log("new message check done");

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        //--------------------------------------------------------SOCKET IO Funtionality------------------------------------------------



        //------------------------------------------------------------------------------------------------------------------------------
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(),newMessage.save()]);
        res.status(201).json(newMessage);
        
        // res.status(201).json({message: "Message sent successfully"});
    } catch (error) {
        res.status(500).json({error: "Internal Server Error in send  message controller"}); 
    }
}

export const getMessage = async(req,res)=>{
    try {
        const {id:userToChatid}=req.params;
        const senderId = req.user._id;
        const conversation= await Conversation.findOne({
            participants: {$all:[senderId, userToChatid]},
        }).populate("messages");
        if(!conversation) return res.status(200).json([]);
        const messages = conversation.messages;
        res.status(200).json(conversation.messages);

    } catch (error) {
        res.status(500).json({error: "Internal Server Error in message controller(getmessages)"}); 
    }
}