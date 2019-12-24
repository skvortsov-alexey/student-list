import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import StudentList from "features/ui/StudentList"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    position: 'relative',
    zIndex: theme.zIndex.appBar + 1,
    paddingTop: theme.spacing(7)
  }
}));

function StudentListView() {
  const classes = useStyles()

  return(
    <Container className={classes.container} maxWidth="md">
      <StudentList />
    </Container>
  )
}

export default StudentListView