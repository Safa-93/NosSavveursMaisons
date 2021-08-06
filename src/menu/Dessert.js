import React from 'react'
import tarte from '../image/tarte.jpg'
import tiramissu from '../image/tiramissu.jpg'
import saladeFruit from '../image/saladeFruit2.jpg'

import ArrowUpward from '@material-ui/icons/ArrowUpward'
import AccessTime from '@material-ui/icons/AccessTime'

import Card from 'components/Card/Card.js'

import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'

import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'

const useStyles = makeStyles(styles)

export default function Dessert() {
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
    <div>
      <h1 style={h1Stayle}>Nos Dessert</h1>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <img src={tarte} alt="tarte" style={imgStayle} />
            <CardBody>
              <h4 style={h4Style} className={classes.cardTitle}>
                {' '}
                Trate
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
            <img src={tiramissu} alt="tiramisu" style={imgStayle} />
            <CardBody>
              <h4 style={h4Style} className={classes.cardTitle}>
                {' '}
                Tiramisu
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
            <img src={saladeFruit} alt="saladeFruit" style={imgStayle} />
            <CardBody>
              <h4 style={h4Style} className={classes.cardTitle}>
                {' '}
                Salade des fruits
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
      </GridContainer>
    </div>
  )
}
