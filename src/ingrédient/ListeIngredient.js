import React, { Component } from 'react'

class ListeIngredient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isLoading: false,
      isError: false,
    }
  }
  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('/api/Ingredient/ModifierIngredient')
    if (response.ok) {
      const data = await response.json()
      this.setState({ data, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }

  renderTableHeader = () => {
    return Object.keys(this.state.data[0]).map((attr) => (
      <th key={attr}>{attr.toUpperCase()}</th>
    ))
  }
  renderTableRows = () => {
    return this.state.data.map((attr) => {
      return (
        <tr key={attr.id}>
          <td>{attr.id}</td>
          <td>{attr.ingredient}</td>
          <td>{attr.quantité}</td>
          <td>{attr.unité}</td>
        </tr>
      )
    })
  }

  render() {
    const { data, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error</div>
    }
    return data.length > 0 ? (
      <table>
        <thead>
          <tr>{this.renderTableHeader()}</tr>
        </thead>
        <tbody>{this.renderTableRows()}</tbody>
      </table>
    ) : (
      <div>No data.</div>
    )
  }
}

export default ListeIngredient
