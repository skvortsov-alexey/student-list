import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import StudentForm from 'components/StudentForm'
import { StudentDraft } from 'features/students/types'

const useStyles = makeStyles(theme => ({
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

interface StudentListItemProps {
  onAdd: (StudentDraft: StudentDraft) => void
  onClose: () => void
}

function AddStudentPanel({ onAdd, onClose }: StudentListItemProps) {
  const [fullName, setFullName] = useState('')
  const [birthDate, setBirthDate] = useState<Date | null>(null)
  const [academicPerformance, setAcademicPerformance] = useState('')

  const classes = useStyles()

  const handleCloseButtonClick = () => onClose()

  function handleAddButtonClick() {
    const studentDraft = {
      fullName,
      birthDate: birthDate as Date,
      academicPerformance: parseInt(academicPerformance)
    }
    onAdd(studentDraft)
    onClose()
  }

  const isInvalidForm = !fullName || !birthDate || !academicPerformance

  return(
    <Paper elevation={1}>
      <div className={classes.formContainer}>
        <Typography variant="h6">Add student</Typography>
        <StudentForm
          className={classes.form}
          fullName={fullName}
          birthDate={birthDate}
          academicPerformance={academicPerformance}
          setFullName={setFullName}
          setBirthDate={setBirthDate}
          setAcademicPerformance={setAcademicPerformance}      
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