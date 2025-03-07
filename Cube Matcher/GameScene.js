// Global variables
const cubeSize = 38;
let board;
let score = 0;
let highScore = 0;

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    // Load images for board and cubes
    this.load.spritesheet(
      "blocks",
      "https://content.codecademy.com/courses/learn-phaser/cube-matcher/blocks.png",
      {
        frameWidth: cubeSize,
        frameHeight: cubeSize,
      }
    );
    this.load.image(
      "grid",
      "https://content.codecademy.com/courses/learn-phaser/cube-matcher/grid.png"
    );
  }

  create() {
    // Add background
    this.add.image(0, 0, "grid").setOrigin(0).setScale(0.5);
    // Set boundaries of the game
    this.physics.world.setBounds(0, 0, 480, 600);
    // Create a 12 x 12 board
    board = this.makeBoard(12);
    // Call makeBoard to initialize the board

    // Create and display score
    score = 0;
    let scoreText = this.add.text(15, 610, `Score: ${score}`, {
      fontSize: "25px",
      fill: "#fff",
    });
    // Start and display a timer
    this.initialTime = 60; // in seconds
    let timerText = this.add.text(
      250,
      610,
      `Time Left: ${formatTime(this.initialTime)}`,
      { fontSize: "25px", fill: "#fff" }
    );
    // Phaser timer event
    this.time.addEvent({
      delay: 1000, // in milliseconds = 1 second
      callback: onTimedEvent,
      callbackScope: this,
      loop: true,
    });
    // Helper function to format time in minutes and seconds
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      seconds %= 60;
      const secondsString = seconds.toString().padStart(2, "0");

      return `${minutes}:${secondsString}`; // 08:00 for example
    }
    // Callback function for timer counts down or ends game
    function onTimedEvent() {
      if (this.initialTime === 0) {
        this.endGame();
      } else {
        this.initialTime--;
        timerText.setText(`Time Left: ${formatTime(this.initialTime)}`);
      }
    }
    // Listener for clicks on cubes
    this.input.on("gameobjectdown", function (pointer, cube, event) {
      // Declare a constant, neighborCubes, below
      const neighborCubes = getNeighbors(cube);
      // Remove matching cubes from game if there's at least 2 of them
      if (neighborCubes.length > 1) {
        // Update score
        score += neighborCubes.length;
        scoreText.setText(`Score: ${score}`);
        // Update each cube in neighborCubes here
        neighborCubes.forEach((neighbor) => {
          // Remove neighboring cube from display
          neighbor.destroy();
          // Shift remaining cubes down
          renderCubes(neighbor);
        });

        removeCols();
         // Call removeCols without parameters
      }
    });

    // Helper function moves cube sprites down
    function renderCubes(cube) {
      for (let row = cube.row - 1; row >= 0; row--) {
        // Move cube sprite down by cubeSize
        board[cube.col][row].y += cubeSize;
        // Update the row of the cube
        board[cube.col][row].row += 1;
      }
      // Remove the cube from the board array
      let removed = board[cube.col].splice(cube.row, 1);
      // Add the removed cube to the top of the column
      board[cube.col] = removed.concat(board[cube.col]);
    }
  }

  update() {
    // If no more remaining valid moves, end game below
    if (remainingMoves() === false) {
      this.endGame();
    }
  }

  makeBoard(size) {
    // A nested array, inner arrays represent empty columns
    const board = Array(size)
      .fill()
      .map(() => Array(size).fill("x"));

    // [ [ 1,2 ,3 ], [] ]
    // Add code to fill board array with cube sprites and
    return board.map((col, colIndex) => {
      return col.map((cube, rowIndex) => {
        return this.makeCube(colIndex, rowIndex);
      });
    });
  }

  makeCube(colIndex, rowIndex) {
    const sideMargin = 31;
    const topMargin = 30;
    // Create a Phaser sprite
    const cube = this.physics.add.sprite(
      colIndex * cubeSize + sideMargin,
      rowIndex * cubeSize + topMargin,
      "blocks"
    );
    // Choose color randomly
    const max = 3;
    const min = 0;
    const color = Math.floor(Math.random() * (max - min + 1)) + min;
    // Don't let cube move beyond edges of board
    cube.setCollideWorldBounds(true);
    cube.body.collideWorldBounds = true;
    // Set the cube to a specific color
    cube.setFrame(color);
    // Make the cube clickable
    cube.setInteractive();
    // Add some information to make it easier to find a cube
    cube.col = colIndex;
    cube.row = rowIndex;
    cube.removed = false;

    return cube;
  }

  endGame() {
    //update the high score if the current score is higher
    if (score > highScore) {
  highScore = score;
}

    // Stop sprites moving
    this.physics.pause();
    // Transition to end scene w/fade
    this.cameras.main.fade(800, 0, 0, 0, false, function (camera, progress) {
      if (progress > 0.5) {
        this.scene.stop("GameScene");
        this.scene.start("EndScene");
      }
    });
  }
}

// Helper function that only checks the immediate neighbors of a cube
const checkClosest = (cube) => {
  const results = [];
  // Coordinates of up, down, left, right cubes to check
  const directions = [
    { row: 0, col: -1 },
    { row: 0, col: 1 },
    { row: -1, col: 0 },
    { row: 1, col: 0 },
  ];
  const currCol = cube.col;
  const currRow = cube.row;
  const color = cube.frame.name;
  // Look for matching cube in 4 directions
  directions.forEach((direction) => {
    // Coordinates of neighbor cube to check
    const newCol = currCol + direction.col;
    const newRow = currRow + direction.row;
    // Exit if the new col or row doesn't exist or will be removed
    if (
      !board[newCol] ||
      !board[newCol][newRow] ||
      board[newCol][newRow].removed
    ) {
      return;
    }
    // Check color of neighboring cube
    if (color === board[newCol][newRow].frame.name) {
      results.push(board[newCol][newRow]);
    }
  });

  // Return an array of neighboring cubes with the same color
  return results;
};

// Helper function to get neighborCubes of a block
const getNeighbors = (cube) => {
  // Variables
  const matches = checkClosest(cube);
  //returns an array of cubes of the same color connected to the cube passed into it.

  let start = cube;
  let cubesToCheck = [start];
  let validNeighborCubes = [];
  // Check cubes in cubesToCheck for valid neighborCubes
  while (cubesToCheck.length > 0) {
    let curr = cubesToCheck.shift();
    // Only collect cubes we haven't already removed as a valid neighbor
    if (curr.removed === false) {
      validNeighborCubes.push(curr);
      curr.removed = true;
    }
    // Add code to get matching cubes, below
  }

  matches.forEach((match) => {
      match.removed = true;
      validNeighborCubes.push(match);
      cubesToCheck.push(match);
      //This code marks each matching cube as no longer playable and collects it in an array with any other matching cubes.
    });

  // If not enough matching cubes, clear and reset the clicked cube
  if (validNeighborCubes.length === 1) {
    validNeighborCubes[0].removed = false;
    validNeighborCubes = [];
  }

  return validNeighborCubes;
};

// Helper function shifts removes empty columns
const removeCols = () => {
  // Declare a emptyCols here:
    const emptyCols = board.map((col, i) => {
    const isEmpty = col.every(cube => cube.removed 
);
        if (isEmpty) {
          return i;
        } else {
          return false;
  //return isEmpty ? i : false;
      }
    })
    .filter(i => i !== false);
 //Use chaining to filter
 // ensures that only numbers (column indices) are kept in the emptyCols array, effectively removing any false values.

          // Logic to determine if the column is empty will go here
  
  // For each empty column, shift all remaining columns to the left
  emptyCols.forEach((emptyCol) => {
    const columnsToMove = board.slice(emptyCol + 1);
    // Update the properties of cubes of moved column
    columnsToMove.forEach((col) => {
      col.forEach((cube) => {
        cube.x -= cubeSize;
        cube.col--;
      });
    });
  });
  // Remove all empty columns from the board array
  if (emptyCols.length > 0) {
   board.splice(emptyCols[0], emptyCols.length);
   //splice used to change the contents of an array by removing, replacing, or adding elements. It directly modifies the original array and returns an array containing the removed elements.
  }
};

// Helper function to check remaining moves
const remainingMoves = () => {
  // Add code to return true or false at least 1 remaining move in board
  return board.some(column => doesColumnContainValidMoves(column))
};

const doesColumnContainValidMoves = (column) => {
  return (
    column.find((cube) => !cube.removed && checkClosest(cube).length > 0) !==
    undefined
  );
};
