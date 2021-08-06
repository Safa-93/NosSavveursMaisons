import React, { useState } from 'react'
import { Card, Button, Form, Input, Label } from 'reactstrap'

const LoginForms = ({ login, error }) => {
  const [details, setDetails] = useState({
    name: ' ',
    email: ' ',
    password: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()

    login(details)
  }

  const styleCard = {
    backgroundColor: '#dcdcdc',
    marginBottom: '20px',
    padding: '20px',
    marginTop: '50px',
  }
  return (
    <div>
      <Card style={styleCard}>
        <h2
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Login
        </h2>
        {error !== ' ' ? <div className="error">{error}</div> : ''}
        <Form onSubmit={handleSubmit}>
          <Label>Nom</Label>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
          <Label>Mot de passe </Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <Button
            className="btn btn-success"
            style={{ margin: '20px 20px 0 60px' }}
          >
            Login
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default LoginForms
