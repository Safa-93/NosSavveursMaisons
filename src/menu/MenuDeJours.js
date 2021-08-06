import { Card, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import React from 'react'

import uuid from 'react-uuid'

export default class MenuDeJours extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuName: ' ',
    }

    this.styleCard = {
      backgroundColor: '#dcdcdc',
      marginBottom: '20px',
      padding: '20px',
      marginTop: '50px',
    }
    this.AjoutMenu = this.AjoutMenu.bind(this)
  }

  AjoutMenu() {
    console.log(
      'fetch json =>title: ' +
        document.getElementById('title').value +
        '  description: ' +
        document.getElementById('description').value +
        '  ingredients: ' +
        document.getElementById('ingredients').value
    )
    let newMenu = {}
    newMenu['uuid'] = uuid() //unique ID
    newMenu['title'] = document.getElementById('title').value //this.refs.title.value;
    newMenu['description'] = document.getElementById('description').value //this.refs.description.value;
    newMenu['ingredients'] = document.getElementById('ingredients').value //this.refs.ingredients.value;
    console.log('fetch json =>' + JSON.stringify(newMenu))
    let data = JSON.stringify(newMenu)
    fetch('/api/Menu/AjouterMenu', {
      method: 'POST',
      headers: {
        Accept: 'application/json, application/xml,text/plain, text/html, *.*',
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(' handleChange response ' + JSON.stringify(response))
      })
      .catch((err) => {
        console.log('fetch failed =>', err)
      })
  }

  render() {
    return (
      <Card style={this.styleCard}>
        <div>
          <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>
            Ajouter un menu{' '}
          </h1>
          <h2 style={{ fontFamily: 'serif' }}>Créer une nouvelle recette </h2>
          <Form>
            <FormGroup>
              <Label for="Titre">Titre </Label>
              <Input ref="title" type="text" name="text" id="title" />
            </FormGroup>
            <FormGroup>
              <Label for="Titre">Description </Label>
              <Input
                ref="description"
                type="textarea"
                name="text"
                id="description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Titre">Ingrédients</Label>
              <Input
                ref="ingredients"
                type="textarea"
                name="text"
                id="ingredients"
              />
            </FormGroup>
            <Button onClick={this.AjoutMenu}>Ajouter</Button>
          </Form>
        </div>
      </Card>
    )
  }
}
