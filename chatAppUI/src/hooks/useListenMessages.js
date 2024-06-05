import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustang/useConversation.js";
// import useSound from 'use-sound';
import livechat from "../assets/sounds/livechat.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	
	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			// newMessage.shouldShake = true;
			const sound = new Audio(livechat);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;