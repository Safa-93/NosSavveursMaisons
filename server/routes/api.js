const express = require('express')
const router = express.Router()

//const axios = require('axios');
//const API = 'http://127.0.0.1:8080';

//const  Objet = require('./class/Utilisateur');

const Utilisateur = new (require('./class/Utilisateur').Utilisateur)()
const Menu = new (require('./class/Menu').Menu)()
const Ingredient = new (require('./class/Ingredient').Ingredient)()
const ResponsableResto = new (require('./class/ResponsableResto').ResponsableResto)()

/* GET api listing. */
router.all('*', (req, res) => {
  console.log('***** req.query :' + req.query + 'req.url ' + req.url)
  //res.send('api works');
  var RequestObject = req.url.split('/')
  console.log(
    ' **** request object 0: ' +
      RequestObject[0] +
      ' 1: ' +
      RequestObject[1] +
      ' 2: ' +
      RequestObject[2] +
      ' 3: ' +
      RequestObject[3]
  )
  var objet = eval(RequestObject[1])
  var func = RequestObject[2]
  var attribut = RequestObject[3]

  if (typeof objet !== 'undefined') {
    console.log('objet defined ' + typeof objet)
    objet[func](req, res)
  }
})

module.exports = router
