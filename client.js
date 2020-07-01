const net = require('net');

const name = {};
let nameID = 0

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on("connect", connect => {
    console.log('Successfully connected to the game server!');
    conn.write('Name: ABT');
  });

  conn.on("data", data => {
    console.log(data);
  })



  return conn;
}

module.exports = { connect }