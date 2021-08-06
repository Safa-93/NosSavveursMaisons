import { Card, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import React, { Component } from 'react'
import uuid from 'react-uuid'

class AjoutIngredient extends Component {
  styleCard = {
    backgroundColor: '#dcdcdc',
    marginBottom: '20px',
    padding: '20px',
    marginTop: '50px',
  }
  constructor(props) {
    super(props)

    this.state = {}

    this.AjoutIngr = this.AjoutIngr.bind(this)
  }

  AjoutIngr = () => {
    console.log(
      'fetch json => Ingrédient ' +
        document.getElementById('ingredient').value +
        ' Quantité ' +
        document.getElementById('quantité').value +
        ' Unité ' +
        document.getElementById('unité').value
    )
    let newIngredient = {}
    newIngredient['uuid'] = uuid()
    newIngredient['ingredient'] = document.getElementById('ingredient').value
    newIngredient['quantité'] = document.getElementById('quantité').value
    newIngredient['unité'] = document.getElementById('unité').value
    console.log('fetch json=>' + JSON.stringify(newIngredient))
    let liste = JSON.stringify(newIngredient)
    fetch('/api/Ingredient/AjouterIngredient', {
      method: 'POST',
      headers: {
        Accept: 'application/json, application/xml,text/plain, text/html, *.*',
        'Content-Type': 'application/json',
      },
      body: liste,
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
      <div>
        <Card style={this.styleCard}>
          <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Ajouter un ingredient
          </h1>
          <Form>
            <FormGroup>
              <Label for="Titre">Ingrédient </Label>
              <Input
                ref="ingredient"
                type="text"
                name="ingredient"
                id="ingredient"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Quantité">Quantité </Label>
              <Input ref="quantité" type="text" name="quantité" id="quantité" />
            </FormGroup>
            <FormGroup>
              <Label for="Unité">Unité</Label>
              <Input ref="unité" type="text" name="unité" id="unité" />
            </FormGroup>
            <Button onClick={this.AjoutIngr}>Ajouter</Button>
          </Form>
        </Card>
      </div>
    )
  }
}

export default AjoutIngredient
