import React, { useState } from 'react'
import { Container, Input, Button } from './chat-inputbar.styles'

const ChatInputBar = ({ socket }) => {
  const [message, setMessage] = useState({
    message: '',
    user: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    socket.emit('send-chat-message', message)
    setMessage({
      message: '',
      user: '',
    })
  }

  const handleChange = (event) => {
    const { value, name } = event.target
    setMessage({ ...message, [name]: value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Input
          placeholder="Enter a messasge"
          name="message"
          type="text"
          onChange={handleChange}
          value={message.message}
        />
        <Button type="submit">Send</Button>
      </Container>
    </form>
  )
}

export default ChatInputBar
