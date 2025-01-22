import React, { useState } from 'react';
import styles from './app.module.css';
const NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState(null);
	const handleNumberClick = (num) => {
		if (result !== null) {
			setOperand1(num);
			setOperator('');
			setOperand2('');
			setResult(null);
		} else if (!operator) {
			setOperand1((prev) => prev + num);
		} else {
			setOperand2((prev) => prev + num);
		}
	};
	const handleOperatorClick = (op) => {
		if (op === 'C') {
			setOperand1('');
			setOperator('');
			setOperand2('');
			setResult(null);
		} else if (op === '=') {
			if (operand1 && operator && operand2) {
				const num1 = parseInt(operand1, 10);
				const num2 = parseInt(operand2, 10);
				let calcResult = null;
				if (operator === '+') calcResult = num1 + num2;
				if (operator === '-') calcResult = num1 - num2;
				setResult(calcResult);
			}
		} else {
			if (result !== null) {
				setOperand1(String(result));
				setOperator(op);
				setOperand2('');
				setResult(null);
			} else {
				setOperator(op);
			}
		}
	};
	return (
		<div className={styles.calculator}>
			<div
				className={
					result !== null ? styles.displayResult : styles.display
				}
			>
				{result !== null ? result : operand1 + operator + operand2}
			</div>
			<div className={styles.buttons}>
				{NUMS.map((num) => (
					<button
						key={num}
						className={styles.button}
						onClick={() => handleNumberClick(num)}
					>
						{num}
					</button>
				))}
				<button
					className={styles.button}
					onClick={() => handleOperatorClick('+')}
				>
					+
				</button>
				<button
					className={styles.button}
					onClick={() => handleOperatorClick('-')}
				>
					-
				</button>
				<button
					className={styles.button}
					onClick={() => handleOperatorClick('C')}
				>
					C
				</button>
				<button
					className={styles.button}
					onClick={() => handleOperatorClick('=')}
				>
					=
				</button>
			</div>
		</div>
	);
};
