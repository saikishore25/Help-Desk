import express from "express"
import { createTicket, getAllTickets } from "../controllers/ticketController.js";
const router = express.Router()


router.post('/createticket', createTicket);
router.post('/getalltickets', getAllTickets);

export default router;