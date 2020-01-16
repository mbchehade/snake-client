const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = require('./client');
const setupInput = require('./input');


console.log('Connecting ...');

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

setupInput(connect());

//when i get data i want to pass this function

