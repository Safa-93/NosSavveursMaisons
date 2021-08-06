import { Photo } from '@material-ui/icons'
import React, { Component } from 'react'

export default class Restaurant extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '1',
      Nom: 'The Delight',
      Adresse: 'xxxxxx',
      Description: ' fgdjfdslkf sdjsqldkjsdfkl djskldjqsl',
      Photo: ' hddhd',
    }
  }

  render() {
    return <div> Hello</div>
  }
}
