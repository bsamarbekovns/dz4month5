import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, subtract, multiply, divide, reset } from './calculatorSlice';

const Calculator = () => {
    const value = useSelector((state) => state.calculator.value);
    const dispatch = useDispatch();
    const [input, setInput] = useState(0);

    return (
        <div>
            <h1>Калькулятор: {value}</h1>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <button onClick={() => dispatch(add(input))}>Добавить</button>
            <button onClick={() => dispatch(subtract(input))}>Вычесть</button>
            <button onClick={() => dispatch(multiply(input))}>Умножить</button>
            <button onClick={() => dispatch(divide(input))}>Разделить</button>
            <button onClick={() => dispatch(reset())}>Сброс</button>
        </div>
    );
};

export default Calculator;
