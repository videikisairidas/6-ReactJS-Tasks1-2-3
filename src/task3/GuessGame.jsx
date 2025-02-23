import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import GuessForm from './guessForm';
import Message from './Message';
import Trys from './Trys';


const GuessGame = () => {
    const [randomNumber, setRandomNumber ] = useState(0);
    const [ userGuess, setUserGuess] = useState('');
    const [ trys, setTrys ] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1)
    }, []);

    const handleGuess = (gussing) => {
        setUserGuess(gussing);
        setTrys(trys + 1);

        if (gussing < randomNumber) {
            setMessage("Try bigger")
        } else if (gussing > randomNumber) {
            setMessage("try smaller")
        } else {
            setMessage("YOU WON!!!")
        }
    };

    return (
        <div>
            <h1>task3 Guess Game</h1>
            <GuessForm onGuess={handleGuess} />
            <Message message={message} />
            <Trys counter={trys} />
        </div>
    );
};

export default GuessGame;