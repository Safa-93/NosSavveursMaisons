import React from 'react'
import Salade from '../image/Salade.png'
import Pâte from '../image/Pâte.png'
import humburger from '../image/humburger.jpg'
import sandwich from '../image/sandwich.jpg'
import tacos1 from '../image/tacos1.jpg'
import libanais from '../image/savoureux-shawarma-.jpg'
import lazagne1 from '../image/lazagne1.jpg'
import Pizza from '../image/Pizza.jpg'
import Soupe1 from '../image/Soupe1.jpg'
import poisson1 from '../image/poisson1.jpg'
import poulet1 from '../image/poulet1.jpg'
import fruitsDeMer from '../image/fuitsDeMer.jpg'
import Salades from './SousMenu.js/Salades'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import ArrowUpward from '@material-ui/icons/ArrowUpward'
import AccessTime from '@material-ui/icons/AccessTime'

import Card from 'components/Card/Card.js'

import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'

import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'
import Burger from './SousMenu.js/Burger'
import Pates from './SousMenu.js/Pates'

const useStyles = makeStyles(styles)
export default function Bases() {
  const imgStayle = {
    width: '200px',
    height: '200px',
    display: 'block',
    margin: '40px auto',
  }
  const h1Stayle = {
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
  const classes = useStyles()

  return (
    <Router>
      <div>
        <h1 style={h1Stayle}>Nos Menus</h1>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img src={Salade} alt="salade" style={imgStayle} />
              <CardBody>
                <h4 style={h4Style} className={classes.cardTitle}>
                  {' '}
                  <Link to="/src/menu/SousMenu.js/Salades.js"> Salades</Link>
                </h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} />
                  </span>{' '}
                  Découvrer nos salades
                </p>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img src={Pâte} alt="nos pates" style={imgStayle} />
              <CardBody>
                <h4 style={h4Style} className={classes.cardTitle}>
                  <Link to="/src/menu/SousMenu.js/Pates.js"> Pâtes</Link>
                </h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img src={humburger} alt="humberger" style={imgStayle} />
              <CardBody>
                <h4 style={h4Style} className={classes.cardTitle}>
                  <Link to="/src/menu/SousMenu.js/Burger.js"> Burgers</Link>
                </h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

        <Switch>
          <Route path="/src/menu/SousMenu.js/Salades.js" component={Salades}>
            <Salades />
          </Route>
          <Route path="/src/menu/SousMenu.js/Pates.js" component={Pates}>
            <Pates />
          </Route>
          <Route path="/src/menu/SousMenu.js/Burger.js" component={Burger}>
            <Burger />
          </Route>
        </Switch>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img src={sandwich} alt="sandwich" style={imgStayle} />
              <CardBody>
                <h4 style={h4Style} className={classes.cardTitle}>
                  {' '}
                  Sandwich
                </h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} />
                  </span>{' '}
                  increase in today sales.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img src={tacos1} alt="tacos" style={imgStayle} />
              <CardBody>
                <h4 style={h4Style} className={classes.cardTitle}>
                  Tacos
                </h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img src={libanais} alt="libanais" style={imgStayle} />
              <CardBody>
                <h4 style={h4Style} className={classes.cardTitle}>
                  Libanais
                </h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img src={Pizza} alt="Pizza" style={imgStayle} />
              <CardBody>
                <h4 style={h4Style} className={classes.cardTitle}>
                  {' '}
                  Pizza
                </h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} />
                  </span>{' '}
                  increase in today sales.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img src={lazagne1} alt="nos lazagne" style={imgStayle} />
              <CardBody>
                <h4 style={h4Style} className={classes.cardTitle}>
                  lazagne
                </h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img src={Soupe1} alt="Soupe" style={imgStayle} />
              <CardBody>
                <h4 style={h4Style} className={classes.cardTitle}>
                  Soupes
                </h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img src={fruitsDeMer} alt="Fruit de mer" style={imgStayle} />
              <CardBody>
                <h4 style={h4Style} className={classes.cardTitle}>
                  {' '}
                  Fruits de Mer
                </h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} />
                  </span>{' '}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img src={poisson1} alt="Poisson" style={imgStayle} />
              <CardBody>
                <h4 style={h4Style} className={classes.cardTitle}>
                  Poisson
                </h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img src={poulet1} alt="poulet" style={imgStayle} />
              <CardBody>
                <h4 style={h4Style} className={classes.cardTitle}>
                  Poulet
                </h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </Router>
  )
}
