
const inquirer = require("inquirer");


const fs = require("fs");


const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers) {

  let svgString = "";


  // Width & Height of SVG file
  svgString =
    '<svg width="500" height="400" xmlns="http://www.w3.org/2000/svg">';

  // puts user font input layers on top/front of shape
  svgString += "<g>";
  // User shape selection
  svgString += `${answers.shape}`;


  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  // formatting
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="50" fill="${answers.textColor}">${answers.text}</text>`;

  svgString += "</g>";

  svgString += "</svg>";

  // write a file based on user input and generate a file: logo.svg
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}


function promptUser() {
  inquirer
    .prompt([

      {
        type: "input",
        message:
          "Choose up to 3 letters for your text",
        name: "text",
      },

      {
        type: "input",
        message:
          "Choose your text color: (ex: red || #ff0000)",
        name: "textColor",
      },

      {
        type: "list",
        message: "Which shape of logo would you like rendered?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },

      {
        type: "input",
        message:
          "What color should be the background color of your shape? (ex: red || #ff0000)",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {

      if (answers.text.length > 3) {
        console.log("Must enter less than 3 letters");
        promptUser();
      } else {

        writeToFile("logo.svg", answers);
      }
    });
}

 //starting the program
promptUser();