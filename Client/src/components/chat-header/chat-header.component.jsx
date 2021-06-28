import React from 'react'
import { Container, TitleContainer } from './chat-header.styles'

const ChatHeader = ({ username }) => (
  <Container>
    <TitleContainer>{`Welcome: ${username}`}</TitleContainer>
  </Container>
)

export default ChatHeader
