import React from 'react'
import cheeseburger from '../../image/hamburger/cheeseburger.jpg'
import doubleCheeseburger from '../../image/hamburger/doubleCheeseburger.jpg'
import BurgerParisien from '../../image/hamburger/BurgerParisien.jpg'
import simpleFishBurger from '../../image/hamburger/simpleFishBurger.jpg'
import DoubleFishBurger from '../../image/hamburger/DoubleFishBurger.jpg'
import végétarienBurger from '../../image/hamburger/végétarienBurger.jpg'
import veggieBurger from '../../image/hamburger/veggieBurger.jpg'
import vggieBurger from '../../image/hamburger/vggieBurger2.jpg'

export default function Burger() {
  const imgStayle = {
    width: '300px',
    height: '200px',
    display: 'block',
    margin: '40px auto',
  }
  const h1Stayle = {
    fontFamily: 'Helvetica',
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: '45px',
    marginTop: '100px',
    marginBottom: '50px',
  }
  const h4Style = {
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold',
  }
  const styleCard = {
    marginBottom: '20px',
  }
  const ButtonStyle1 = {
    paddingTop: '47px',
  }

  const ButtonStyle = {
    marginRight: '2px',
    paddingLeft: '5px',
    paddingRight: '5px',
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
      <h1 style={h1Stayle}>Nos Burgers</h1>
      <div class="card-deck" style={styleCard}>
        <div class="card">
          <img
            src={cheeseburger}
            class="card-img-top"
            alt="cheeseburger"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              CheeseBurger
            </h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <div style={ButtonStyle1}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
        <div class="card">
          <img
            src={doubleCheeseburger}
            class="card-img-top"
            alt="double-cheeseburger"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Double cheeseBurger
            </h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <div style={ButtonStyle1}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
        <div class="card">
          <img
            src={BurgerParisien}
            class="card-img-top"
            alt="parisien burger"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Burger Parisien
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <div style={ButtonStyle1}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
      </div>

      <div class="card-deck" style={styleCard}>
        <div class="card">
          <img
            src={simpleFishBurger}
            class="card-img-top"
            alt="cheeseburger"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Fish Burger
            </h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <div style={ButtonStyle1}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
        <div class="card">
          <img
            src={DoubleFishBurger}
            class="card-img-top"
            alt="double-cheeseburger"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Double Fish Burger
            </h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <div style={ButtonStyle1}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
        <div class="card">
          <img
            src={BurgerParisien}
            class="card-img-top"
            alt="parisien burger"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Burger Parisien
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <div style={ButtonStyle1}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
      </div>

      <div class="card-deck" style={styleCard}>
        <div class="card">
          <img
            src={végétarienBurger}
            class="card-img-top"
            alt="cheeseburger"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Végétarien Burger
            </h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <div style={ButtonStyle1}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
        <div class="card">
          <img
            src={veggieBurger}
            class="card-img-top"
            alt="double-cheeseburger"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Veggie Burger
            </h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <div style={ButtonStyle1}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
        <div class="card">
          <img
            src={vggieBurger}
            class="card-img-top"
            alt="parisien burger"
            style={imgStayle}
          />
          <div class="card-body">
            <h5 class="card-title" style={h4Style}>
              Veggie Burger
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <div style={ButtonStyle1}>
              {btn1}
              {btn2}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
