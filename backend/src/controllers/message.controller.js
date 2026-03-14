import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js'
import User from '../models/user.model.js'

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user._id;
        const receiver = await User.findById(receiverId);

        if (!receiver) {
            return res.status(404).json({ message: "Receiver not found" });
        }


        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }


        // SOCKET IO FUNCTIONALITY WILL GO HERE TO MAKE IT WORK IN REAL TIME


        // await conversation.save();
        // await newMessage.save();

        // This will work in parallel
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage);
    } catch(err) {
        console.log("Error in sendMessage controller", err.message);
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const getMessages = async(req, res) => {
    try {
        const {id : userToChatId} = req.params;
        const senderId = req.user._id;

        const userToChat = await User.findById(userToChatId);

        if (!userToChat) {
            return res.status(404).json({ message: "Receiver not found" });
        }

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChat]}
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        return res.status(200).json(messages);
        
    } catch(err) {
        console.log("Error in getMessages controller", err.message);
        res.status(500).json({message: "Internal Server Error"})
    }
}