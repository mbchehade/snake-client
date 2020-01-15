const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = require('./client');

console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data);
  });
  return stdin;
}
setupInput();

//when i get data i want to pass this function

const handleUserInput = ((data)=>{
//should check ctrl + c input and terminate game.
}) 