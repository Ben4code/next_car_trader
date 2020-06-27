import React from 'react'
import {AppBar, Toolbar, Grid, IconButton, makeStyles} from '@material-ui/core'
import {Menu} from '@material-ui/icons'


const useStyles = makeStyles({
  navbarStyles: {
    fontFamily: 'Arial, san-serif',
    color: '#fff',
  },
  navLink: {
    color: '#fff',
  }
})


const Navbar = () => {
const classes = useStyles();



  return (
    <AppBar >
      <Toolbar>
        <Grid container >
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={10} >
            <Grid item container alignItems='center' justify="space-between">
              <h4>Car Trader</h4>
              <IconButton >
                <Menu />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}


export default Navbar;