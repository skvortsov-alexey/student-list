import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import StudentForm from 'components/StudentForm'
import { StudentDraft } from 'features/students/types'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0)
  },
  formContainer: {
    padding: theme.spacing(3)
  },
  form: {
    paddingTop: theme.spacing(2)
  },
  buttonGroup: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}))

interface AddStudentPanelProps {
  onAdd: (StudentDraft: StudentDraft) => void
  onClose: () => void
}

const AddStudentPanel: React.FC<AddStudentPanelProps> = ({
  onAdd,
  onClose
}) => {
  const [fullName, setFullName] = useState('')
  const [birthDate, setBirthDate] = useState<Date | null>(null)
  const [grade, setGrade] = useState('')

  const classes = useStyles()

  const handleCloseButtonClick = () => onClose()

  function handleAddButtonClick() {
    const studentDraft = {
      fullName,
      birthDate: birthDate as Date,
      grade: parseInt(grade)
    }
    onAdd(studentDraft)
    onClose()
  }

  const isInvalidForm = !fullName || !birthDate || !grade

  return(
    <Paper className={classes.root} elevation={1}>
      <div className={classes.formContainer}>
        <Typography variant="h6">Add student</Typography>
        <StudentForm
          className={classes.form}
          fullName={fullName}
          birthDate={birthDate}
          grade={grade}
          setFullName={setFullName}
          setBirthDate={setBirthDate}
          setGrade={setGrade}      
        />
      </div>
      <Divider />
      <div className={classes.buttonGroup}>
        <Button
          size="small"
          onClick={handleCloseButtonClick}
        >
          Close
        </Button>
        <Button 
          size="small"
          color="primary"
          onClick={handleAddButtonClick}
          disabled={isInvalidForm}
        >
          Add
        </Button>
      </div>
    </Paper>
  )
}

export default AddStudentPanel