/* ***** Classe Utilisateur ****** */
var request = require("request");


var Utilisateur = function() {
  // constructor
  this.email = null;
  this.pseudo = null;
  this.password = null;
};

Utilisateur.prototype = new Object();

Utilisateur.prototype.request = request();

Utilisateur.prototype.ModifierProfile = function(req, res) {
  console.log("Fonction Modifier le profile ");
  let response = {}
  response.resultat= "Authentifier"
  res.end(JSON.stringify(response))
};

Utilisateur.prototype.Consulter = function(req, rep) {};

module.exports = { Utilisateur: Utilisateur };
