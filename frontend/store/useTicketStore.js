import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const useTicketStore = create(
    
    persist(

        (set, get) => ({
            backendURL: import.meta.env.VITE_BACKEND_URI, // corrected key name

            loading: false,
            ticketNumber: null,
            error: null,
            tickets: [],
            setTickets: (ticketArray)=> set({tickets: ticketArray}),
            user: null,
            setUser: (value) => set({ user: value }),

            userID: null,
            setUserID: (value) => set({ userID: value }),

            isAuthenticated: false,
            setIsAuthenticated: (value) => set({ isAuthenticated: value }),

            submitTicket: async (ticketData) => {

                set({ loading: true, error: null });

                try{
                    const response = await axios.post(
                        `${get().backendURL}/api/tickets/createticket`,
                        { ...ticketData, user: get().userID }
                    );

                    set({ loading: false, ticketNumber: response.data.ticketNumber });
                    alert(`Ticket Submitted Successfully. Ticket Number: ${get().ticketNumber}`);

                } 
                
                catch(err){

                    console.log("Ticket Submission Failed", err);
                    set({
                        loading: false,
                        error: err.response?.data?.message || 'Submission failed',
                    });
                }
            },

            checkAuth: async () => {

                try{

                    const response = await fetch(`${get().backendURL}/api/auth/check-auth`, {
                        method: 'GET',
                        credentials: 'include', // for cookie-based auth
                    });

                    if(response.ok){

                        const data = await response.json();
                        console.log(data)
                        set({ isAuthenticated: true, user: data.user, userID: data.userID});
                    } 
                
                    else{

                        set({ isAuthenticated: false, user: null });
                    }
                } 
                
                catch(error){

                    console.error("Error checking authentication:", error);
                    set({ isAuthenticated: false, user: null });
                }
            },

            logoutUser: async () => {

                const { backendURL, userID } = get();
                try{
                    await fetch(`${get().backendURL}/api/auth/logout`, {
                        method: 'POST',
                        credentials: 'include',
                        body: JSON.stringify({ userID }),
                        headers: {
                            'Content-Type': 'application/json'
                        },

                    });

                    set({
                        user: null,
                        isAuthenticated: false,
                        ticketNumber: null,
                        error: null,
                        loading: false,
                    });

                } 
                
                catch(error){

                    console.error('Logout failed:', error);
                }
            },


            fetchTickets: async () => {

                try{

                    const response = await axios.post(`${get().backendURL}/api/tickets/getalltickets`,{ userId: get().userID }, {
                        withCredentials: true,
                    });
                    set({ tickets: response.data.tickets });
                } 
                
                catch(error){

                    console.error("Failed to fetch tickets:", error);
                    set({ tickets: [] });
                }
            },

            resetState: () => {
                set({ loading: false, ticketNumber: null, error: null });
            },
        }),
        {
            name: 'ticket-store', // localStorage key
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated,
                userID: state.userID,
            }),
        }
    )
);


export default useTicketStore;
