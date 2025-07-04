import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({

    ticketNumber: { type: String, required: true, unique: true },
    ticketName: { type: String, required: true },
    date: { type: Date, required: true },
    department: { type: String, required: true },
    subject: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    priority: { type: String, required: true },
    description: { type: String, required: true },
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Solved', 'Closed'], // Define allowed values
        default: 'Open' // Default value if not provided
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }

}, { timestamps: true });

const ticketModel = mongoose.model('Ticket', ticketSchema);
export default ticketModel
