import React, { useState } from 'react';

const Booking = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        route: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking submission logic here
        console.log('Booking details submitted:', userDetails);
    };

    return (
        <div className="booking-container">
            <h2>Book Your Bus Ticket</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={userDetails.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={userDetails.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="tel" name="phone" value={userDetails.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Route:</label>
                    <input type="text" name="route" value={userDetails.route} onChange={handleChange} required />
                </div>
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default Booking;