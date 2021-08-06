import React from 'react'
import saladeMixte from '../../image/salade/saladeMixte.jpg'
import saladeVerte1 from '../../image/salade/saladeVerte1.jpg'
import saladeCezar from '../../image/salade/saladesCezar.jpg'
import SaladePâtes from '../../image/salade/SaladePâtes.jpg'
import saladesDeRiz from '../../image/salade/saladesDeRiz.jpg'
import SaladeTunisienne from '../../image/salade/SaladeTunisienne.jpg'


export default function Salades() {
  const imgStayle = {
    width: '200px',
    height: '200px',
    display: 'block',
    margin: '40px auto',
  }
  const h1Stayle = {
    fontFamily: 'Helvetica',
    marginBottom: '50px',
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: '45px',
    marginTop: '100px',
  }
  const h4Style = {
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold',
  }
  const styleCard = {
    marginBottom: '20px',
  }
  const ButtonStyle = {
    marginRight: '2px',
    paddingLeft: '5px',
    paddingRight: '5px',
  }
  const ButtonStyle1 = {
    paddingTop: '47px',
  }
  const ButtonStyle2 = {
    paddingTop: '70px',
  }
  const ButtonStyle4 = {
    paddingTop: '41%',
  }
  const ButtonStyle5 = {
    paddingTop: '35%',
  }

  const btn1 = (
    <button type="button" className="btn btn-info" style={ButtonStyle}>
      {' '}
      <span class="bi bi-cart-fill"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-cart-fill"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      Ajouter au panier
    </button>
  )
  const btn2 = (
    <button type="button" class="btn btn-warning" style={ButtonStyle}>
      <i class="bi bi-pencil-fill"></i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-pencil-fill"
        viewBox="0 0 16 16"
      >
        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
      </svg>
      Modifier ingrédients
    </button>
  )

  return (
    <div>
      <h1 style={h1Stayle}>Nos faveurs Salades</h1>
      <div class="card-deck" style={styleCard}>
        <div class="card">
          <img
            src={saladeMixte}
            class="card-img-top"
            alt="Salade mixte"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Salade mixte
            </h5>
            <p className="card-text">
              La fraîcheur avant tout ! Un savoureux mélange de salades composée
              de laitue romaine, de tomates, d'une carotte, de thon, d'un demi
              oignon, de maïs et d'un oeuf dur, servi avec une sauce vinaigrette
              balsamique.
            </p>
            <div style={ButtonStyle1}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
        <div class="card">
          <img
            src={saladeVerte1}
            class="card-img-top"
            alt="salade verte"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Salade verte
            </h5>
            <p className="card-text">
              La fraîcheur avant tout ! Un savoureux mélange de salades composée
              de laitue, de tomates, d'une carotte, de concombre, fromage
              allégé, servi avec une sauce vinaigrette balsamique
            </p>
            <div style={ButtonStyle2}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>

        <div class="card">
          <img
            src={saladeCezar}
            class="card-img-top"
            alt="parisien burger"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Salade césar
            </h5>
            <p className="card-text">
              Nous vous proposons une salade césar allégée.composée d'un salade
              verte, d' escalopes de poulet,de biscottes, de oignon, d’emmental
              râpé Ici, la sauce est préparée avec des yaourts nature, de la
              moutarde, du vinaigre de cidre, de l’ail et de la ciboulette.
              Simple, rapide et légère, cette salade fera l’unanimité !
            </p>
            <div>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
      </div>

      <div class="card-deck" style={styleCard}>
        <div class="card">
          <img
            src={SaladePâtes}
            class="card-img-top"
            alt="salade de pates"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Salade de Pâtes
            </h5>
            <p className="card-text">
              La meilleure recette italienne, composée de pâtes, de tomate
              confite séchée, de tomate cerise rouge et oronge, de jambon cru,
              de mozzarella , de ail, de basilic servi avec une sauce
              vinaigrette balsamique
            </p>
            <div style={ButtonStyle4}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>

        <div class="card">
          <img
            src={saladesDeRiz}
            class="card-img-top"
            alt="cheeseburger"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Salade de riz
            </h5>
            <p className="card-text">
              sortez la carte "salade de riz" et tout le monde sera ravi ! Du
              riz blanc, du maïs, des petits pois, des carottes, des tomates,
              des oeufs, des saucisses de francfort... Rien que des bonnes
              petites choses fraîches et savoureuses pour une salade composée au
              top !
            </p>
            <div style={ButtonStyle5}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
        <div class="card">
          <img
            src={SaladeTunisienne}
            class="card-img-top"
            alt="double-cheeseburger"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Salade tunisienne
            </h5>
            <p className="card-text">
              La Slata méchwiya, qui se traduit en « Salade Grillée », est une
              salade typiquement tunisienne qui se fait essentiellement de
              piments ou de poivrons.contiendra de poivrons, de pimons, de
              tomates, de oignon, et d'un gousse d'ail, mélangée avec une sauce
              de huile d'olive, sel, carvi et coriandre moulu. Cette Salade
              accompagne parfaitement les grillades. Vous pouvez aussi faire des
              sandwiches avec, ou bien en entrée quand il ya un plat de
              résistance aprés.
            </p>
            <div>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
