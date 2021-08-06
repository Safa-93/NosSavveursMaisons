import React, { Component } from 'react'
import { Card, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import uuid from 'react-uuid'

export default class Utilisateur extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nom: ' ',
      prenom: ' ',
      email: ' ',
      password: '',
      adresse: ' ',
      city: ' ',
      stat: ' ',
      zip: ' ',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({ ...this.state, [e.target.id]: e.target.value })
  }

  btn =
    this.nom !== ' ' ||
    this.prenom !== ' ' ||
    this.email !== ' ' ||
    this.password !== ' ' ||
    this.adresse !== ' ' ||
    this.city !== ' ' ||
    this.stat !== ' ' ||
    this.zip !== ' ' ? (
      <button className="btn btn-dark">Envoyer</button>
    ) : (
      <button disabled className="btn btn-dark">
        Envoyer
      </button>
    )

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    let NewUtilisateur = {}
    NewUtilisateur['uuid'] = uuid()
    NewUtilisateur['nom'] = this.state.nom
    NewUtilisateur['prenom'] = this.state.prenom
    NewUtilisateur['email'] = this.state.email
    NewUtilisateur['password'] = this.state.passwrod
    NewUtilisateur['adresse'] = this.state.adresse
    NewUtilisateur['city'] = this.state.city
    NewUtilisateur['stat'] = this.state.stat
    NewUtilisateur['zip'] = this.state.zip
    console.log('fetch json=>' + JSON.stringify(NewUtilisateur))
    let client = JSON.stringify(NewUtilisateur)
    fetch('/api/Utilisateur/AjouterProfile', {
      method: 'POST',
      headers: {
        Accept: 'application/json, application/xml,text/plain, text/html, *.*',
        'Content-Type': 'application/json',
      },
      body: client,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(' handleChange response ' + JSON.stringify(response))
      })

      .catch((err) => {
        console.log('fetch failed => ', err)
      })
  }

  styleCard = {
    backgroundColor: '#dcdcdc',
    marginBottom: '20px',
    padding: '20px',
    marginTop: '50px',
  }

  render() {
    const {
      nom,
      prenom,
      email,
      password,
      adresse,
      city,
      stat,
      zip,
    } = this.state
    return (
      <Card style={this.styleCard}>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Inscrivez vous{' '}
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleNom">Nom</Label>
                <Input
                  ref="nom"
                  type="text"
                  name="nom"
                  id="nom"
                  placeholder="with a placeholder"
                  value={nom}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePrénom">Prénom</Label>
                <Input
                  ref="prenom"
                  type="text"
                  name="prenom"
                  id="prenom"
                  placeholder="votre prénom"
                  value={prenom}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  ref="email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="with a placeholder"
                  value={email}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  ref="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password placeholder"
                  value={password}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">Addresse</Label>
            <Input
              ref="adresse"
              type="text"
              name="addresse"
              id="adresse"
              placeholder="Adresse"
              value={adresse}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input
                  ref="city"
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input
                  ref="stat"
                  type="text"
                  name="state"
                  id="stat"
                  value={stat}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input
                  ref="zip"
                  type="text"
                  name="zip"
                  id="zip"
                  value={zip}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              Check me out
            </Label>
          </FormGroup>
          {this.btn}
        </Form>
      </Card>
    )
  }
}
