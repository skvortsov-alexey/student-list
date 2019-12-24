import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

import AddStudentPanel from 'components/AddStudentPanel'
import StudentList from "components/StudentList"

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    zIndex: theme.zIndex.appBar + 1,
    paddingTop: theme.spacing(7)
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    zIndex: theme.zIndex.appBar + 2,
  }
}))

function StudentListView() {
  const [isShowAddStudentPanel, setIsShowAddStudentPanel] = useState(false)  
  const classes = useStyles()

  function handleFabClick() {
    setIsShowAddStudentPanel(true)
  }

  function handleAddStudentPanelClose() {
    setIsShowAddStudentPanel(false)
  }

  return(
    <React.Fragment>
      <Container className={classes.container} maxWidth="md">
        {
          isShowAddStudentPanel && <AddStudentPanel onClose={handleAddStudentPanelClose} />
        }        
        <StudentList />
      </Container>
      <Fab
        className={classes.fab}
        onClick={handleFabClick}
        color="secondary"
      >
        <AddIcon />
      </Fab>
    </React.Fragment>
  )
}

export default StudentListView