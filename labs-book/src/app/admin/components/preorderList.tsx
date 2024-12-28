import React, { useEffect, useState } from 'react';

const PreorderList = () => {
    const [greeting, setGreeting] = useState('');

    const displayPreorders = async () => {
        const response = await fetch(`/admin/api`);
        const text = await response.text();
        setGreeting(text);
    };

    useEffect(() => {
        displayPreorders();
    }, []);

    return (
        <div>
            <h1>DAY Book 2024 Admin Page</h1>
            <h2>Preorders</h2>
            <p>{greeting}</p>
        </div>
    );
};

export default PreorderList;
