import React, { useState } from 'react';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [amount, setAmount] = useState(0);
    const [transactionStatus, setTransactionStatus] = useState('');

    const handlePayment = () => {
        // Simulate payment processing
        if (paymentMethod && amount > 0) {
            setTransactionStatus('Payment successful!');
        } else {
            setTransactionStatus('Please select a payment method and enter a valid amount.');
        }
    };

    return (
        <div>
            <h1>Payment Page</h1>
            <div>
                <label>
                    Amount:
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                    />
                </label>
            </div>
            <div>
                <label>
                    Payment Method:
                    <select 
                        value={paymentMethod} 
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="">Select a method</option>
                        <option value="creditCard">Credit Card</option>
                        <option value="debitCard">Debit Card</option>
                        <option value="netBanking">Net Banking</option>
                        <option value="upi">UPI</option>
                    </select>
                </label>
            </div>
            <button onClick={handlePayment}>Pay Now</button>
            {transactionStatus && <p>{transactionStatus}</p>}
        </div>
    );
};

export default Payment;