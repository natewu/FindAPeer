  
import React, { useState } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";



var AllOpenness = ["I love adventure",
            "I am creative",
            "I love to be challenged",
            "I am inventive and curious",
            "I am the first to try new activities"];

var AllConcient = ["I am highly self-disciplined",
            "I like to know the plan rather than be spontaneous",
            "I am very organized and always come prepared",
            "I am careful and diligent",
            "I am very efficient at managing my time"];
        
var AllExtro = ["I am outgoing and energetic",
            "I am the life of the party",
            "I am usually the one to start a conversation with someone",
            "I don’t mind being the center of attention",
            "I am a very sociable person"];

var AllAgree = ["I am friendly and compassionate",
            "I tend to trust people and give them the benefit of the doubt",
            "I like to make other people feel at ease",
            "I am extremely empathetic",
            "I tend to be very cooperative"];

var AllNuero = ["I tend to be moody", 
            "I stress out easily", 
            "I tend to be more nervous", 
            "I easily get anxious when things don't go my way",
            "I tend to be depressed if I am alone"];

//This is where we are supposed to randomize them. Think of another way to validate them(no reptitions)

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
  
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
  
	return array;
  }

  AllOpenness = shuffle(AllOpenness);
  AllConcient = shuffle(AllConcient);
  AllExtro = shuffle(AllExtro);
  AllAgree = shuffle(AllAgree);
  AllNuero = shuffle(AllNuero);



const questions = {
	   elements: [
		   {
		questionText: 'Question 1',
		answerOptions: [
			{ answerText: AllOpenness[0], isCorrect: true },
			{ answerText: AllOpenness[1], isCorrect: true },
			{ answerText: AllOpenness[2], isCorrect: true },
			{ answerText: AllOpenness[3], isCorrect: true },
		]},
		{questionText: 'Question 2',
		answerOptions: [
			{ answerText: AllConcient[0], isCorrect: true },
			{ answerText: AllConcient[1], isCorrect: true },
			{ answerText: AllConcient[2], isCorrect: true },
			{ answerText: AllConcient[3], isCorrect: true },
		]},
		{questionText: 'Question 3',
		answerOptions: [
			{ answerText: AllExtro[0], isCorrect: true },
			{ answerText: AllExtro[1], isCorrect: true },
			{ answerText: AllExtro[2], isCorrect: true },
			{ answerText: AllExtro[3], isCorrect: true },
		]},
		{questionText: 'Question 4',
		answerOptions: [
			{ answerText: '1', isCorrect: true },
			{ answerText: '4', isCorrect: true },
			{ answerText: '6', isCorrect: true },
			{ answerText: '7', isCorrect: true },
		]}
	]
}
const quiz = () =>{
var json = {
	elements: [
	 { type: "text", name: "customerName", title: "What is your name?", isRequired: true}
	]
   };
  
   //Define a callback methods on survey complete
function onComplete(survey, options) {
	//Write survey results into database
	console.log("Survey results: " + JSON.stringify(survey.data));
   }
	//Create the model and pass it into react Survey component
	//You may create survey model outside the render function and use it in your App or component
	//The most model properties are reactive, on their change the component will change UI when needed.
	var model = new Survey.Model(json);
	return (<Survey.Survey model={model} onComplete={onComplete}/>);
}
export default quiz;
	/*
	//The alternative way. react Survey component will create survey model internally
	return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
	*/
	//You may pass model properties directly into component or set it into model
	// <Survey.Survey model={model} mode="display"/>
	//or 
	// model.mode="display"
	// <Survey.Survey model={model}/>
	// You may change model properties outside render function. 
	//If needed react Survey Component will change its behavior and change UI.

// export default function Quiz() {
// 	const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [showScore, setShowScore] = useState(false);
// 	const [score, setScore] = useState(0);

// 	const handleAnswerOptionClick = (isCorrect) => {
// 		if (isCorrect) {
// 			setScore(score + 1);
// 		}

// 		const nextQuestion = currentQuestion + 1;
// 		if (nextQuestion < questions.length) {
// 			setCurrentQuestion(nextQuestion);
// 		} else {
// 			setShowScore(true);
// 		}
// 	};
// 	return (
// 		<div className='app'>
// 			{showScore ? (
// 				<div className='score-section'>
// 					You scored {score} out of {questions.length}
// 				</div>
// 			) : (
// 				<>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							<span>Question {currentQuestion + 1}</span>/{questions.length}
// 						</div>
// 						<div className='question-text'>{questions[currentQuestion].questionText}</div>
// 					</div>
// 					<div className='answer-section'>
// 						{questions[currentQuestion].answerOptions.map((answerOption) => (
// 							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 						))}
// 					</div>
// 				</>
// 			)}
// 		</div>
// 	);
// }


