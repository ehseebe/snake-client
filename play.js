const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on("data", data => {
    //do smthing when i receive the data
    console.log(data);
  })

  return conn;
}

console.log('Connecting...');





connect();