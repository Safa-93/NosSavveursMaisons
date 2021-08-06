/*  ***** class ingrédient *****  */
//var Bases = require('./Bases').Bases
// importation de json
const fs = require('fs')

var Ingredient = function () {
  this.id = null
  this.description = null
}

//Ingredient.prototype = new Bases()
Ingredient.prototype = new Object()
//Ingredient.prototype.constructor = Ingredient

Ingredient.prototype.AjouterIngredient = function (req, rep) {
  console.log('ajouter ingrédient')
  console.log('Body:' + req.body + 'IF JSON' + JSON.stringify(req.body))
  fs.writeFileSync('liste.json', JSON.stringify(req.body))
}

Ingredient.prototype.ModifierIngredient = function () {
  fs.readFile('../../../liste.json', 'utf-8', (erreur, data) => {
    if (erreur) {
      console.log(erreur)
      return
    }
    data = JSON.parse(data)
    console.log(data)
  })
}
Ingredient.prototype.SupprimerIngrédient = function () {}

module.exports = { Ingredient: Ingredient }
