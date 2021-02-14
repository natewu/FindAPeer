  
import React, { useState } from 'react';



AllOpenness = ["I love adventure",
            "I am creative",
            "I love to be challenged",
            "I am inventive and curious"];

AllConcient = ["I am highly self-disciplined",
            "I like to know the plan rather than be spontaneous",
            "I am very organized and always come prepared",
            "I am careful and diligent"];
        
AllExtro = ["I am outgoing and energetic",
            "I am the life of the party",
            "I am usually the one to start a conversation with someone",
            "I don’t mind being the center of attention."];

AllAgree = ["I am friendly and compassionate",
            "I tend to trust people and give them the benefit of the doubt",
            "I like to make other people feel at ease",
            "I am extremely empathetic"];

AllNuero = ["I tend to be moody", 
            "I stress out easily", 
            "I tend to be more nervous", 
            "I easily get anxious when things don't go my way"];

//This is where we are supposed to randomize them. Think of another way to validate them(no reptitions)
const min = 0;
const max = 4;

let numbers = [];
const rand = loopedrand; 
const a = true;
while(a == true) {
    let b = 0;
    for (i= 0 ; i < 4; i++) {
        loopedrand = min + Math.random() * (max - min);

        if(rand != numbers) {
            numbers.append(rand);
        } else {
            console.log("Number already equals to rand numbers!");
        }
    }
    b ++;
    if(b == 4) {
        a = false 
    };
}

selectiveOpenness = AllOpeness[numbers[0]];
selectiveConcient = AllConceint[numbers[1]];
selectiveExtro = AllExtro[numbers[2]];
selectiveAgree = AllAgree[numbers[3]];
selectiveNuero = Nuero[numbers[4]]; 

export default function Quiz() {
	const questions = [
		{
			questionText: 'Question 1',
			answerOptions: [
				{ answerText: selectiveOpenness, isCorrect: true },
				{ answerText: selectiveConcient, isCorrect: true },
				{ answerText: selectiveExtro, isCorrect: true },
				{ answerText: selectiveNuero, isCorrect: true },
			],
		},
		{
			questionText: 'Question 2',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: true },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: true },
				{ answerText: 'Tony Stark', isCorrect: true },
			],
		},
		{
			questionText: 'Question 3',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: true },
				{ answerText: 'Amazon', isCorrect: true },
				{ answerText: 'Microsoft', isCorrect: true },
			],
		},
		{
			questionText: 'Question 4',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '4', isCorrect: true },
				{ answerText: '6', isCorrect: true },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}


