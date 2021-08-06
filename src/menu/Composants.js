import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap'
import saladeVerte from '../image/Icons/saladeVerte.png'
import saladepate from '../image/Icons/saladepate.png'
import saladeriz from '../image/Icons/saladeriz.png'
import cheeseburger from '../image/hamburger/cheeseburger.jpg'
import fishBurger from '../image/hamburger/fishBurger.jpg'
import BurgerParisien from '../image/hamburger/BurgerParisien.jpg'

class Composants extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listMenu: [
        {
          id: 1,
          titre: 'Salades',
          type: [
            'Salade mixte',
            'Salade verte',
            'Salde césar',
            'Salade de riz',
            'Salade de pâte',
          ],
        },
        {
          id: 2,
          titre: 'Pâtes',
          type: ['Cannellonis', 'Macaronis', 'Lasagnes', 'Couscous'],
        },
        {
          id: 3,
          titre: 'Burgers',
          type: [
            'CheeseBurger',
            'Double CheeseBurger',
            'Burger parisien',
            'Fish Burger',
            'Double Fish Burger',
          ],
        },
        {
          id: 4,
          titre: 'Sandwichs',
        },
        {
          id: 5,
          titre: 'Tacos',
        },
        {
          id: 6,
          titre: 'Libanais',
        },
        {
          id: 7,
          titre: 'Pizza',
        },
        {
          id: 8,
          titre: 'lasagne',
        },
        {
          id: 9,
          titre: 'Soupe',
        },
      ],
    }
  }
  styleCard = {
    width: '300px',
    height: '250px',
    marginBottom: '20px',
    padding: '20px',
  }

  ModifierIngredient = () => {
    fetch('api/Ingrédient/ModifierIngredient', {
      method: 'POST',
      headers: {
        Accept: 'application/json, application/xml,text/plain, text/html, *.*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(' handleChange response ' + JSON.stringify(response))
        this.setState({})
      })
      .catch((err) => {
        console.log('fetch failed => ', err)
      })
  }

  StyleCard = {
    backgroundColor: '#dcdcdc',
    padding: '30px 30px',
    marginTop: '50px',
  }
  StyleImage = {
    width: '25px',
    height: '25px',
  }
  render() {
    return (
      <Card style={this.StyleCard}>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
          {' '}
          Modifier le menu{' '}
        </h1>
        <Form>
          <FormGroup>
            <Label for="exampleSelect">Catégories</Label>
            <Input type="select" name="Catégories" id="Catégories">
              {this.state.listMenu.map((item) => (
                <option key={item.id}>{item.titre}</option>
              ))}
            </Input>
          </FormGroup>
          <div class="card-deck">
            <Card style={this.styleCard}>
              <FormGroup tag="fieldset">
                <legend>
                  Choix de salade :{' '}
                  <em style={{ color: '#daa520', fontWeight: 'bold' }}>
                    2.30£
                  </em>{' '}
                </legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />
                    <img
                      src={saladeVerte}
                      alt="saladeVerte"
                      style={this.StyleImage}
                    />
                    Salade verte
                  </Label>
                </FormGroup>

                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" />
                    <img
                      src={saladepate}
                      alt="saladeVerte"
                      style={this.StyleImage}
                    />
                    Salade de pâtes
                  </Label>
                </FormGroup>

                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio3" />
                    <img
                      src={saladeriz}
                      alt="saladeVerte"
                      style={this.StyleImage}
                    />
                    Salade de riz
                  </Label>
                </FormGroup>
              </FormGroup>
            </Card>

            <Card style={this.styleCard}>
              <FormGroup tag="fieldset">
                <legend>
                  Choix de Burgers{' '}
                  <em style={{ color: '#daa520', fontWeight: 'bold' }}>
                    4.00£
                  </em>
                </legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />
                    <img
                      src={cheeseburger}
                      alt="saladeVerte"
                      style={this.StyleImage}
                    />
                    CheeseBurger
                  </Label>
                </FormGroup>

                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" />
                    <img
                      src={BurgerParisien}
                      alt="burger parisien"
                      style={this.StyleImage}
                    />
                    Burger Parisien
                  </Label>
                </FormGroup>

                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio3" />
                    <img
                      src={fishBurger}
                      alt="Fish burger"
                      style={this.StyleImage}
                    />
                    Fish Burger
                  </Label>
                </FormGroup>
              </FormGroup>
            </Card>
          </div>

          <Button onClick={this.ModifierIngredient}>
            Modifier Ingrédients
          </Button>

          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Check me out
            </Label>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Card>
    )
  }
}

export default Composants
