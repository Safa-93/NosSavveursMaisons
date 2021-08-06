/*  ******* Classe responsable de restaurant ****** */
var fs = require('fs')
//var Client = require("./Client").Client;

var ResponsableResto = function () {}

//ResponsableResto.prototype = new Client();

ResponsableResto.prototype.constructor = ResponsableResto

ResponsableResto.prototype.getClient = function (req, rep) {
  console.log('Gérer les clients')
  console.log('Body:' + req.body + 'IF JSyON' + JSON.stringify(req.body))
  fs.readFileSync('Client.json', JSON.stringify(req.body))
}
ResponsableResto.prototype.Reparer = function (req, rep) {
  console.log('Reparer les commandes ')
}

ResponsableResto.prototype.Autoriser = function (req, rep) {
  console.log('Autoriser les commande ')
}

ResponsableResto.prototype.Envoyer = function (req, rep) {
  console.log('Envoyer les commande ')
}

module.exports = { ResponsableResto: ResponsableResto }
