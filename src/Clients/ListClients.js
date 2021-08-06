import React from 'react'
import Table from 'components/Table/Table.js'
import CardBody from 'components/Card/CardBody.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(styles)
export default function ListClients(props) {
  const classes = useStyles()
  return (
    <div>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Liste des clients</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="warning"
              tableHead={[
                'ID',
                'Nom',
                'Prénom',
                'Email',
                'Adresse',
                'City',
                'State',
                'Zip',
              ]}
              tableData={[]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </div>
  )
}
