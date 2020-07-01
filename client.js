const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({port: PORT , host: IP});
  
  conn.setEncoding('utf8');

  conn.on("connect", connect => {
    console.log('Successfully connected to the game server!');
    //conn.write('Name: ABT');
  });

  conn.on("data", data => {
    console.log(data);
  })

  return conn;
}

module.exports = { connect }

// const net = require('net');
// const { IP, PORT } = require('./constants');

// const name = {};
// let nameID = 0

// const connect = function() {
//   const conn = net.createConnection({
//     host: '135.23.222.148',
//     port: 50541
//   });

//   conn.setEncoding('utf8');

//   conn.on("connect", connect => {
//     console.log('Successfully connected to the game server!');
//     conn.write('Name: ABT');
//   });

// //PLAY WITH MOVEMENT LOOP
//   // conn.on('connect', connect => { 
    
//   //   const move = (snakeMoves) => {
//   //     snakeMoves = ['Move: up', 'Move: up', 'Move: up', 'Move: right', 'Move: right', 'Move: right', 'Move: left', 'Move: left', 'Move: left', 'Move: down', 'Move: down', 'Move: down']
//   //     let delay = 0;
//   //     for(let movements of snakeMoves) {
//   //       setTimeout(() => conn.write(movements), delay);
//   //       delay += 50;
//   //     }
//   //   }
//   //   return move();

//   // })



//   conn.on("data", data => {
//     console.log(data);
//   })



//   return conn;
// }

// module.exports = { connect }