/*  ******* Classe responsable de restaurant ****** */

var Client = require("./Client").Client;

var Responsable = function() {};

Responsable.prototype = new Client();

Responsable.prototype.constructor = Responsable;

Responsable.prototype.Gerer = function(req, rep) {
  console.log(" gérer les clients ");
};
Responsable.prototype.Reparer = function(req, rep) {
  console.log("Reparer les commandes ");
};

Responsable.prototype.Autoriser = function(req, rep) {
  console.log("Autoriser les commande ");
};

Responsable.prototype.Envoyer = function(req, rep) {
  console.log("Envoyer les commande ");
};

module.exports = { Responsable: Responsable };
