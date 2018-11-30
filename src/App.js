import React, { Component } from "react"
import { Container, Header, Content, Footer, Text, Button, Form, Item, Input } from "native-base"
import firebase from 'react-native-firebase';

function AppHeader() {
  return <Header />
}

function AppFooter() {
  return <Footer />
}

const TodoForm = () => (
  <Form>
    <Item>
      <Input placeholder="Todo"/>
    </Item>
  </Form>
)

const AppContent = () => (
  <Content>
    <Text> Hello, World!</Text>
    <Text> Hello, World!</Text>
    <Text> Hello, World!</Text>
    <Text> Hello, World!</Text>
    <Text> Hello, World!</Text>
    <Text> Hello, World!</Text>
    <Button>
      <Text>Hello!</Text>
    </Button>
    <TodoForm />
  </Content>
)

export default class App extends Component {
  constructor() {
    super()
    
    firebase.auth().signInAnonymously()
      .then((user) => {
        console.log(user.isAnonymous);
      });
  
    this.ref = firebase.firestore().collection("todos")
    this.state = {
      textInput: ''
    }
  }

  updateTextInput(value) {
    this.setState({ textInput: value });
  }

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
