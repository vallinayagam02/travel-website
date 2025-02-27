import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchBusRoutes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/bus-routes`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching bus routes: ' + error.message);
    }
};

export const bookTicket = async (bookingData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/book-ticket`, bookingData);
        return response.data;
    } catch (error) {
        throw new Error('Error booking ticket: ' + error.message);
    }
};

export const processPayment = async (paymentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/process-payment`, paymentData);
        return response.data;
    } catch (error) {
        throw new Error('Error processing payment: ' + error.message);
    }
};