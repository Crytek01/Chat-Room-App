const express = require('express')
const http = require('http')
const cors = require('cors')

const port = process.env.PORT || 4001
const index = require('./index')

const app = express()
app.use(cors())
app.options('*', cors())
app.use(index)

const server = http.createServer(app)

const io = require('socket.io')(server, {
  cors: {
    origins: ['*'],
  },
})

io.on('connection', (socket) => {
  socket.on('send-chat-message', (message) => {
    console.log(message)
    // socket.broadcast.emit('chat-message', message)
    socket.emit('chat-message', message)
  })
})

server.listen(port, () => console.log(`Listening port ${port}`))
