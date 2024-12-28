import React, { useState } from 'react';

const FinalizeOrder: React.FC = () => {
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const [venmoUsername, setVenmoUsername] = useState<string>('');
    const [zellePhoneNumber, setZellePhoneNumber] = useState<string>('');

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPaymentMethod(event.target.value);
        setVenmoUsername('');
        setZellePhoneNumber('');
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (paymentMethod === 'venmo') {
            console.log(`Payment Method: Venmo, Username: ${venmoUsername}`);
        } else if (paymentMethod === 'zelle') {
            console.log(`Payment Method: Zelle, Phone Number: ${zellePhoneNumber}`);
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Payment Method:
                <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                    <option value="">Select</option>
                    <option value="venmo">Venmo</option>
                    <option value="zelle">Zelle</option>
                </select>
            </label>
            {paymentMethod === 'venmo' && (
                <label>
                    Venmo Username:
                    <input
                        type="text"
                        value={venmoUsername}
                        onChange={(e) => setVenmoUsername(e.target.value)}
                    />
                </label>
            )}
            {paymentMethod === 'zelle' && (
                <label>
                    Zelle Phone Number:
                    <input
                        type="text"
                        value={zellePhoneNumber}
                        onChange={(e) => setZellePhoneNumber(e.target.value)}
                    />
                </label>
            )}
            <button type="submit">Submit</button>
        </form>
    );
};

export default FinalizeOrder;