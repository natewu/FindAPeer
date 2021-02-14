import "./Quiz.css"
import React, { useState } from 'react';
import * as Survey from "survey-react";
// import "survey-react/survey.css";
import "survey-react/modern.css";
import "./Quiz.css";
import {Link} from "react-router-dom"


const quiz = () =>{

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

	// shuffle
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

 // shuffle them up
 AllOpenness = shuffle(AllOpenness);
 AllConcient = shuffle(AllConcient);
 AllExtro = shuffle(AllExtro);
 AllAgree = shuffle(AllAgree);
 AllNuero = shuffle(AllNuero);

 console.log(AllOpenness)


	Survey.StylesManager.applyTheme("modern");


var json = {
	"title": "Tell us a little bit about yourself!",
    "description": "Please take look at the survey title and logo. ",
    // "logo": "https://surveyjs.io/favicon.ico",
    "logoWidth": 60,
    "logoHeight": 60,
	pages: [ 
	{
		questions: [
		{ 
			type: "text", 
			name: "name", 
			title: "What is your preferred name?", 
			isRequired: true
		},
		{
			type: "radiogroup",
			name: "openness",
			title: "How outgoing would you say you are?",
			isRequired: true,
			choices: [
				AllOpenness[0],
				AllOpenness[1],
				AllOpenness[2],
				AllOpenness[3],
				AllOpenness[4]
			]
		}]
	},
	{ name:"page2",
		questions: [
		{
			type: "radiogroup",
			name: "Concient",
			title: "Which of the following best describes you?",
			isRequired: true,
			choices: [
				AllConcient[0],
				AllConcient[1],
				AllConcient[2],
				AllConcient[3],
				AllConcient[4]
			]
		}]
	},
	{
	questions: [
	{
		type: "radiogroup",
		name: "Concient",
		title: "Out of all these statements, choose the one you most agree with.",
		isRequired: true,
		choices: [
			AllAgree[0],
			AllAgree[1],
			AllAgree[2],
			AllAgree[3],
			AllAgree[4]
		]
	}]
	},
	{
	questions: [
	{
		type: "radiogroup",
		name: "Concient",
		title: "Which of the following best describes you?",
		isRequired: true,
		choices: [
			AllNuero[0],
			AllNuero[1],
			AllNuero[2],
			AllNuero[3],
			AllNuero[4]
		]
	}]
	},
	{
		questions: [
		{
			type: "radiogroup",
			name: "Concient",
			title: "How outgoing would you say you are?",
			isRequired: true,
			choices: [
				AllExtro[0],
				AllExtro[1],
				AllExtro[2],
				AllExtro[3],
				AllExtro[4]
			]
		}]
		},
	{ 
		questions: [
			{
				type: "text", 
				name: "Hobbies", 
				title: "What are some of your preferred hobbies?", 
				isRequired: true
			},
		]
	}
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
	var survey = new Survey.Model(json);

    // add the css
	// survey.onUpdateQuestionCssClasses.add(function(survey, options) {
	// 	var classes = options.cssClasses

    //     classes.mainRoot += "Survey"
    //     classes.root = "sq-root";
    //     // classes.title += " sq-title"
    //     // classes.item += " sq-item";
    //     // classes.label += " sq-label";

    //     // if (options.question.isRequired) {
    //     //     classes.title += " sq-title-required";
    //     //     classes.root += " sq-root-required";
    //     // }

    //     // if (options.question.getType() === "checkbox") {
    //     //     classes.root += " sq-root-cb";
	// });


	return (
		<div>
			<Link to="/">Home</Link>
			<Survey.Survey model={survey} onComplete={onComplete}/>
		</div>
	);
}
export default quiz;

