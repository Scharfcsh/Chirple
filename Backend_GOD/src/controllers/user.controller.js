import User from '../models/user.model.js';


export const getUserForSideBar = async (req, res) => {
    try {
        //=====================this need to be figure out==//================================
        // // const loggedInUerId = req._id;
        // const user = JSON.parse(window.localStorage.getItem("chat-user"));
        // const loggedInUserId = user._id;
        // console.log("loggedInUerId", loggedInUserId);
        //================================================================

        const filteredUsers = await User.find({}).select("-password");
        // console.log("filteredUsers check");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.error("Error in getUserForSideBar", error);
        res.status(500).json({ error: "Internal Server Error in getUserForSideBar" });
    }
}