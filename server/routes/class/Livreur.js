/* ***** classe Livreur ***** */

var Client = require('./Client').Client

var Livreur = function () {
  // constructor
}

Livreur.prototype = new Client()
Livreur.prototype.constructor = Livreur

Livreur.prototype.Livrer = function (req, rep) {
  console.log(' livrer le commande ')
}

/**
 * @return {null}
 */

module.exports = { Livreur: Livreur }
