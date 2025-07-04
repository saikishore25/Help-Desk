import ticketModel from "../models/ticketModel.js";
import generateTicketNumber from "../utils/generateTicketNumber.js";
import userModel from "../models/userModel.js";

const createTicket = async (req, res) => {
  try {
    const count = await ticketModel.countDocuments();
    const ticketNumber = generateTicketNumber(count);

    const { user, ...rest } = req.body;

    const newTicket = new ticketModel({
      ticketNumber,
      ...rest,
      user, // assign user ID from body
    });

    await newTicket.save();

    // Link ticket to user
    const foundUser = await userModel.findById(user);
    if (foundUser) {
      foundUser.tickets.push(newTicket._id);
      await foundUser.save();
    }

    res.status(201).json({ message: "Ticket submitted successfully", ticketNumber });
  } catch (error) {
    console.error("Failed To Submit Ticket", error);
    res.status(500).json({ message: "Failed to submit ticket" });
  }
};


const getAllTickets = async (req, res) => {

    try{

        const { userId } = req.body;
        console.log("UserID", userId)

        const user = await userModel.findById(userId).populate("tickets");

        if(!user){

            return res.status(404).json({ message: "User not found" });
        }

        console.log("Tickets Found:", user.tickets)
        return res.status(200).json({ tickets: user.tickets });
    } 
    
    catch(error){

        console.error("Error fetching tickets:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }

};

export {createTicket, getAllTickets}