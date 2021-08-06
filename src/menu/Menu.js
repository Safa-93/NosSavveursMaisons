import React from 'react'
import Bases from './Bases'
import Supplements from './Supplements'
import Dessert from './Dessert'
import Composants from './Composants'
import MenuDeJours from './MenuDeJours'
import AjoutIngredient from '../ingrédient/AjoutIngredient'
import ListeIngredient from '../ingrédient/ListeIngredient'
export default function Menu() {
  return (
    <div>
      <MenuDeJours />
      <AjoutIngredient />
      <Composants />
      <ListeIngredient />
      <Bases />
      <Dessert />
      <Supplements />
    </div>
  )
}
