import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    senderName:{
        type: String,
        minLength: [2, "Name must contain at least two characters!"]
    },
    subject:{
        type: String,
        minLength: [2, "Subject must contain at least two characters!"]
    },
    message:{
        type: String,
        minLength: [2, "Message must contain at least two characters!"]
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

export const Message = mongoose.model("Message",messageSchema)