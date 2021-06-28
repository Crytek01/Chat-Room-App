import { Container, MessageContainer } from './chat-window.styles'
import { useRef, useEffect } from 'react'

const ChatWindow = ({ messages }) => {
  const messageDivRef = useRef(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messageDivRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Container>
      {messages.map((message) => (
        <MessageContainer ref={messageDivRef}>
          {message.message}
        </MessageContainer>
      ))}
    </Container>
  )
}

export default ChatWindow
