/*  ***** class ingrédient *****  */
var Bases = require('./Bases').Bases
// importation de json
const fs = require('fs')
var file = require('../../../Ingrédient.json')

var Ingredient = function () {
  this.id = null
  this.description = null
}

Ingredient.prototype = new Bases()
Ingredient.prototype.constructor = Ingredient

Ingredient.prototype.AjouterIngrédient = function () {
  console.log('ajout')
}
Ingrédient.prototype.ModifierIngrédient = function () {
  fs.readFile(file, 'utf-8', (erreur, data) => {
    if (erreur) {
      console.log(erreur)
      return
    }
    data = JSON.parse(data)
    console.dir(data)
  })
}
Ingredient.prototype.SupprimerIngrédient = function () {}

module.exports = { Ingredient: Ingredient }
