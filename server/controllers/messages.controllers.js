import Conversation from "../models/conversation.models.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.user._id;
    const { id: receiverId } = req.params;
  
    let conversation = await Conversation.findOne({
      participant: {
        $all: [senderId, receiverId],
      },
    });
    if (!conversation) {
      conversation = new Conversation({
        participant: [senderId, receiverId],
      });
    }
  
    const newMessage = new Message({
      message: message,
      senderId: senderId,
      receiverId: receiverId,
    });
  
    if(newMessage){
      conversation.messages.push(newMessage._id);
    }
  
    await Promise.all([conversation.save(), newMessage.save()]);
  
    res.status(200).json({ newMessage });
  } catch (error) {
    console.log("Error in send Message Controller -", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

export const getMessage = async(req,res) => {
    try{
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participant: {
                $all: [senderId, userToChatId]
            }
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([]);
        }

        const message = conversation.messages;

        res.status(200).json(message);

    }catch (error) {
        console.log("Error in get Message Controller -", error.message);
        res.status(500).json({ error: "internal server error" });
      }
};
