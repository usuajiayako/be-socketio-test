const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  
   //user connection/disconnection
  //  socket.on('user', ({ username, icon, active }) => {
  //   io.emit('user', { username, icon, active });
  // });
  //chat
  socket.on('message', ({ message, user }) => {
    console.log({message, user})
    io.emit('message', { message, user })
  })
})


http.listen(3000, () => {
  console.log("listening on port 3000")
})