import { useEffect, useState } from 'react'
import { Container } from './chat-page.styles'
import Header from '../../components/chat-header/chat-header.component'
import Window from '../../components/chat-window/chat-window.component'
import Input from '../../components/chat-inputbar/chat-inputbar.component'
import socketIoClient from 'socket.io-client'
const ENDPOINT = 'http://127.0.0.1:4001'

const ChatPage = () => {
  const [messages, setMessages] = useState([])

  const socket = socketIoClient(ENDPOINT)

  useEffect(() => {
    socket.on('chat-message', (data) => {
      const newMessages = [...messages]
      newMessages.push(data)
      setMessages(newMessages)
    })
  }, [socket, messages])

  return (
    <Container>
      <Header username="Carlos" />
      <Window messages={messages} />
      <Input socket={socket} />
    </Container>
  )
}

export default ChatPage
