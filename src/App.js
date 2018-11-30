import React, { Component } from "react"
import { Container, Header, Content, Footer, Text, Button } from "native-base"

function AppHeader() {
  return <Header />
}

function AppFooter() {
  return <Footer />
}

const AppContent = () => (
  <Content>
    <Text> Hello, World!</Text>
    <Text> Hello, World!</Text>
    <Text> Hello, World!</Text>
    <Text> Hello, World!</Text>
    <Text> Hello, World!</Text>
    <Text> Hello, World!</Text>
    <Button><Text>Hello!</Text></Button>
  </Content>
)

export default class App extends Component {
  render() {
    return (
      <Container>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </Container>
    )
  }
}
