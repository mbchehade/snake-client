const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: MBC");
    
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50)
    
    // setTimeout(()=>{
    //   conn.write("Move: left");  
    // }, 50)
    
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50)

    // setInterval(() => {
    //   conn.write("Move: left");
    // },50)

  });
  
 
  conn.on('data', (data) => {
    console.log('server says: ', data)
  })

  return conn;
}
module.exports = connect;