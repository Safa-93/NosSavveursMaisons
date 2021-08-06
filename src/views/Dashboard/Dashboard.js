import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DateRange from '@material-ui/icons/DateRange'
import LocalOffer from '@material-ui/icons/LocalOffer'
import Update from '@material-ui/icons/Update'
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'

import CardFooter from 'components/Card/CardFooter.js'

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'
import Caroussel from '../../menu/Caroussel'
import Menu from '../../menu/Menu'
//import Navbar from './Navbar'
import Utilisateur from '../../class/Utilisateur'
import Authentification from '../../authentification/Authentification'
import ListClients from '../../Clients/ListClients'
import Ingrédient from '../../menu/SousMenu.js/Ingrédients'

const useStyles = makeStyles(styles)

export default function Dashboard() {
  const classes = useStyles()
  return (
    <div>
      {/*  <Navbar />*/}
      <GridContainer>
        <Caroussel />
      </GridContainer>
      <GridContainer>
        <Utilisateur />
      </GridContainer>

      <GridContainer>
        <Authentification />
      </GridContainer>

      <Menu />
      <Ingrédient />
      <ListClients />

      <GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <p className={classes.cardCategory}>Revenue</p>
                <h3 className={classes.cardTitle}>$34,245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <p className={classes.cardCategory}>Revenue</p>
                <h3 className={classes.cardTitle}>$34,245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <p className={classes.cardCategory}>Fixed Issues</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Tracked from Github
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <p className={classes.cardCategory}>Followers</p>
                <h3 className={classes.cardTitle}>+245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </GridContainer>
    </div>
  )
}
