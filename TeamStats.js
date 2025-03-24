/*
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

const team = {
  _players: [
    { firstName: 'John', lastName: 'Don', age: 28 },
    {firstName: 'Merry', lastName: 'li', age: 35},
    {firstName: 'Hana', lastName: 'Yu', age: 45}
    ],
  _games: [
    { opponent: 'Mermaid', teamPoints: 32, opponentPoints: 12},
    { opponent: 'Fish', teamPoints: 23, opponentPoints: 9},
    { opponent: 'Unicorn', teamPoints: 46, opponentPoints: 31}
    ],
  get players() {
    return this._players
    //or return team.players
  },
  get games() {
    return this._games
  },
  addPlayer(newFirstName, newLastName, newAge) {
  const player = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
  };
  this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
  const game = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
  };
  this._games.push(game);
}
};
/*We want to add a new player to our team. Add a .addPlayer() method to the team object. This method should take in three parameters: newFirstName, newLastName, and newAge.

Inside the method, create a player object by setting the three parameters to be the values for the object’s three properties: firstName, lastName, age. Finally, add the player object to the team‘s _players array.
*/


team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Titans', 100, 98);
console.log(team.games);




