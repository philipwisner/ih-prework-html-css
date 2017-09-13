//Rover object to be moved
var orientations = ['N','E','S','W'];
var myRover = {
  name: 'Rover1',
  position: [0, 0],
  direction: 'N'
};

//Create a 10 x 10 grid for the rover
var planetGrid = [10, 10];


//Prompt for input of directions - Make it accept a string
var promptIntro = "Move the rover by typing the following commands:\n f = Forward\n b = Backwards\n l = Left\n r = Right ";

//Function to move the rover forward - GIVEN
function goForward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
	console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

//Function to move rover backward - inverse of forward
function goBackward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }
		console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

//Function to turn the rover right
function turnRight(rover) {
  var orientation = orientations.indexOf(rover.direction);
  orientation = (orientation + 1) % orientations.length;
  rover.direction = orientations[orientation];
}
//orientation.length is used so that you can change the length of the array and the function will work.


//Function to turn the rover left
function turnLeft(rover) {
  var orientation = orientations.indexOf(rover.direction);
  orientation = (orientation + orientations.length - 1) % orientations.length;
  rover.direction = orientations[orientation];
}
//orientation.length - 1 is used so that it will turn the rover the opposite direction by doing the number of turns based on the length of the array



//Seperate Prompt movement into a fumction


// Prompt to input directions and then run
function promptMovement(rover) {
var inputMoves = window.prompt(promptIntro);
	for (var i = 0; i < inputMoves.length; i++) {
		switch (inputMoves[i].toLowerCase()) {
			case 'f':
  			goForward(rover);
  			console.log('You moved forward');
			     break;
			case 'b':
  			goBackward(rover);
  			console.log('You moved backward');
			     break;
			case 'l':
  			leftTurn(rover);
  			console.log('You turned left');
			  break;
			case 'r':
			rightTurn(rover);
  			console.log('You turned right');
  			break;
  			default:
				console.log('Invalid input');
		}

    //Seperate this into a seperate function to check grid
		if (rover.position[0] === 10) {
			rover.position[0] = 0;
		} else if (rover.position[0] === -1) {
			rover.position[0] = 10;
		} else if (rover.position[1] === 10) {
			rover.position[1] = 0;
		} else if (rover.position[1] === -1) {
			rover.position[1] = 10;
		}
	}

function checkBoundaries(rover) {
  for (var i = 0; i < planetGrid.length; i++) {
    if (rover.position[i] < 0) {
      rover.position[i] += planetGrid[i];
    } else if (rover.position[i] >= planetGrid[i]) {
      rover.position[i] %= planetGrid[i];
    }
  }
}

//Make sure you are calling the checkboundaries, you can do it with each direction for/back or part of the final function

//can change the for to forEach

//Output the rover's final position
console.log("The rover is currently at: [" + myRover.position[0] + ", " + myRover.position[1] +"]" + " and facing " + myRover.direction);
}

//Run the function with object myRover
promptMovement(myRover);


//Ways to improve code and this code is to seperate out functions. checkboundaries, each movement, etc should all be seperate.


// function leftTurn(rover) {
//   switch (rover.direction) {
//     case 'N':
//       rover.direction = 'W';
//       break;
//     case 'E':
//       rover.direction = 'N';
//       break;
//     case 'S'://Rover object to be moved
//
//       rover.direction = 'E';
//       break;
//     case 'W':
//       rover.direction = 'S';
//       break;
//   }
// 		console.log("New Rover Direction: " + rover.direction)
// }
//

// //Function to turn the rover right - inverse of left
// function rightTurn(rover) {
//   switch (rover.direction) {
//     case 'N':
//       rover.direction = 'E';
//       break;
//     case 'E':
//       rover.direction = 'S';
//       break;
//     case 'S':
//       rover.direction = 'W';
//       break;
//     case 'W':
//       rover.direction = 'N';
//       break;
//   }
// 		console.log("New Rover Direction: " + rover.direction)
// }

/* Function for just rover moves - NO PROMPT
function roverMove(inputMoves) {
	for (var i = 0; i < inputMoves.length; i++) {
		switch (inputMoves[i]){
			case 'f':
			goForward(myRover);
			console.log('You moved forward');
			break;
			case 'b':
			goBackward(myRover);
			console.log('You moved backward');
			break;
			case 'l':
			leftTurn(myRover);
			console.log('You moved left');
			break;
			case 'r':
			rightTurn(myRover);
			console.log('You moved right');
			break;
			default:
				console.log('Invalid input');
		}
	}
	console.log("The rover is currently at: [" + myRover.position[0] + ", " + myRover.position[1] +"]" + " and facing " + myRover.direction);
}
*/

//roverMove('fffrfflfffbb');
