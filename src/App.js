import './App.css';
import React, { useState } from 'react';
import DisplayChange from './components/DisplayChange';

function App() {
    const [input, setInput] = useState({"totalCost":0, "amountProvided":0});

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    return (
        <div className='myForm'>
            <label>
                Total Cost (USD):
                <input
                    type="number"
                    name="totalCost"
                    onChange={handleInputChange}
                    placeholder="0"
                />
            </label>
            <br />
            <label>
                Amount Provided (USD):
                <input
                    type="number"
                    name="amountProvided"
                    onChange={handleInputChange}
                    placeholder="0"
                />
            </label>
            <DisplayChange cost={input.totalCost} provided={input.amountProvided} />
        </div>
    );
}

export default App;
