import { useState } from "react"

const GuessForm = ( {onGuess }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onGuess(Number(inputValue));
        setInputValue('');
    };

    return (
        <div>
            guess form
            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                    />
                <button>Guess</button>
            </form>
        </div>
    )
}

export default GuessForm;