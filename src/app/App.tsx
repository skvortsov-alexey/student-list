import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import MoreIcon from '@material-ui/icons/MoreVert'
import Container from '@material-ui/core/Container'

import StudentList from 'features/ui/StudentList/StudentList'

import { AcademicPerformance } from 'features/students/types'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  container: {
    position: 'relative',
    zIndex: theme.zIndex.appBar + 1,
    paddingTop: theme.spacing(7)
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    lineHeight: 2
  },
}));

function App() {
  const classes = useStyles()
  const students = [
    {
      id: '1',
      fullName: 'James Smith',
      birthDate: new Date(2002, 1, 2),
      academicPerformance: AcademicPerformance.Satisfactory
    },
    {
      id: '2',
      fullName: 'Maria Garcia',
      birthDate: new Date(2001, 4, 3),
      academicPerformance: AcademicPerformance.Good
    },
    {
      id: '3',
      fullName: 'Osmond Hawarde',
      birthDate: new Date(2002, 6, 2),
      academicPerformance: AcademicPerformance.Excellent
    },
    {
      id: '4',
      fullName: 'Robert Johnson',
      birthDate: new Date(2000, 9, 11),
      academicPerformance: AcademicPerformance.Unsatisfactory
    }
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            Student List
          </Typography>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className={classes.container} maxWidth="md">
        <StudentList students={students} onDelete={()=> { console.log('111') }} />
      </Container>
    </div>
  )
}

export default App
