//Rover object to be moved
var myRover = {
  position: [0, 0],
  direction: 'N'
};

//Create a 10 x 10 grid for the rover
var planetGrid = [[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]];

var maxGridX = planetGrid[0][10];
var minGridY = planetGrid[1][10];

//Prompt for input of directions - Make it accept a string
var promptIntro = "Move the rover by typing the following commands:\n f = Forward\n b = Backwards\n l = Left\n r = Right ";

//Function to move the rover forward - GIVEN
function goForward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };
	console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
};

//Function to move rover backward - inverse of forward
function goBackward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };
		console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
};


//Function to turn the rover left
function leftTurn(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'W':
      rover.direction = 'S'
      break;
  };
		console.log("New Rover Direction: " + rover.direction)
};

//Function to turn the rover right - inverse of left
function rightTurn(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  };
		console.log("New Rover Direction: " + rover.direction)
};


// Checking to see if prompt registers proper entry
var inputMoves = window.prompt(promptIntro);
	for (var i = 0; i < inputMoves.length; i++) {
		switch (inputMoves[i]) {
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
		console.log("The rover is currently at: [" + myRover.position[0] + ", " + myRover.position[1] +"]" + " and facing " + myRover.direction);
	}



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



