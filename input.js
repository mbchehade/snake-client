//when i get data i want to pass this function
let connection;




const handleUserInput = ((data) => {
  if (data === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit()
  }
  if(data === "w"){
    connection.write("Move: up")
  }
  if (data === "a") {
    connection.write("Move: left")
  }
  if (data === "s") {
    connection.write("Move: down")
  }
  if (data === "d") {
    connection.write("Move: right")
  }
  if(data === "h"){
    connection.write("ahhhhhhhhhhhhhhhhh!!!")
  }
  
  
});

const setupInput = function (conn) {
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  connection = conn;
  stdin.on('data', (data) => {
    handleUserInput(data)
  })
  return stdin;
}

module.exports = setupInput;