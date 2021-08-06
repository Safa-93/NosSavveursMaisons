/* ***** Classe Utilisateur ****** */
var fs = require('fs')

var Utilisateur = function () {
  // constructor
  this.email = null
  this.pseudo = null
  this.password = null
}

Utilisateur.prototype = new Object()

//Utilisateur.prototype.request = request();

Utilisateur.prototype.AjouterProfile = function (req, res) {
  console.log('Fonction Ajouter profile ')
  console.log('Body:' + req.body + 'IF JSON' + JSON.stringify(req.body))
  fs.writeFileSync('Client.json', JSON.stringify(req.body))
}

Utilisateur.prototype.Consulter = function (req, rep) {}

module.exports = { Utilisateur: Utilisateur }
