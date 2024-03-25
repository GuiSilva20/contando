import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Form.module.css';

export function FormWeight() {
    const [numDays, setNumDays] = useState(0); // State to store the number of days
    const [inputDisabled, setInputDisabled] = useState(false); // State to track input disablement
    const [weights, setWeights] = useState(Array.from({ length: 31 }, () => "")); // State to store weights for each day
    const [totalWeight, setTotalWeight] = useState({ kg: 0, g: 0 }); // State to store the total weight in kg and g

    // Function to handle changes in the number of days input
    const handleNumDaysChange = (e) => {
        const num = parseInt(e.target.value); // Parse the input value to an integer
        if (num > 31) {
            toast.error("Um mês não pode ter mais de 31 dias");
            setInputDisabled(true); // Disable the input if the number is greater than 31
        } else {
            setInputDisabled(false); // Enable the input if the number is within range
        }
        setNumDays(num); // Update the number of days state
    };

    // Function to handle changes in the weight input for a specific day
    const handleWeightChange = (e, day) => {
        const weight = e.target.value; // Get the input value
        const updatedWeights = [...weights]; // Create a copy of the weights array
        updatedWeights[day - 1] = weight; // Update the weight for the specific day
        setWeights(updatedWeights); // Update the weights state

        // Calculate the total weight in kg and g
        let totalKg = 0;
        let totalG = 0;

        for (let i = 0; i < numDays; i++) {
            const parsedWeight = parseInt(updatedWeights[i] || 0); // Treat empty input as 0
            totalKg += Math.floor(parsedWeight / 1000);
            totalG += parsedWeight % 1000;
        }

        // Adjust total weight for grams overflow
        totalKg += Math.floor(totalG / 1000);
        totalG %= 1000;

        setTotalWeight({ kg: totalKg, g: totalG });
    };

    // Function to generate inputs based on the number of days
    const generateInputs = () => {
        const inputs = [];
        for (let i = 1; i <= numDays; i++) {
            inputs.push(
                <div key={i} className={styles.container}>
                    <h6>Dia {i}</h6>
                    <input 
                        type='number' 
                        placeholder={`Peso do dia ${i}`} 
                        name={`day-${i}`} 
                        disabled={inputDisabled} 
                        value={weights[i - 1]} 
                        onChange={(e) => handleWeightChange(e, i)} 
                    />
                </div>
            );
        }
        return inputs;
    };

    return (
        <>
            <div className={styles.innerWrapper}>
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <form>
                            <h1>Contagem de peso</h1>
                            <p>Quantidade de dias</p>
                            <h6>Insira um número de 0 a 31</h6>
                            <input type='number' placeholder='Digite aqui' onChange={handleNumDaysChange} />
                        </form>
                    </div>
                    <div className={styles.totalContainer}>
                        <div className={styles.showResults}>
                            <h2>Total de peso: {totalWeight.kg} kg {totalWeight.g} g</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {generateInputs()} {}
            </div>
            <ToastContainer />
        </>
    );
}
