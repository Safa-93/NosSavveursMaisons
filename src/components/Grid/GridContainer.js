import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
  grid: {
    margin: '0 -15px !important',
    width: 'unset',
  },
}

const useStyles = makeStyles(styles)

export default function GridContainer(props) {
  const classes = useStyles()
  const { children, ...rest } = props
  return (
    <Grid container {...rest} className={classes.grid} spacing={4}>
      <Grid container item xs={8} md={10} spacing={3}>
        {children}
      </Grid>
    </Grid>
  )
}

GridContainer.propTypes = {
  children: PropTypes.node,
}
