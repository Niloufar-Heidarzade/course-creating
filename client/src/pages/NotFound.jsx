import React from 'react'
import { Container , Image} from 'react-bootstrap'

function NotFound() {
  return (
    <Container>
      <Image src="/404-error.svg" alt="not found"/>
    </Container>
  )
}

export default NotFound