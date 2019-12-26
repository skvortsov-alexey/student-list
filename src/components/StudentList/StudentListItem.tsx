import React, { useState } from 'react'
import { format } from 'date-fns'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { Student } from 'features/students/types'
import StudentForm from 'components/StudentForm'

import GradeAvatar from './GradeAvatar'

const useStyles = makeStyles(theme => ({
  heading: {
    fontWeight: theme.typography.fontWeightMedium,    
  },
  secondaryHeading: {
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20
  },
  details: {
    alignItems: 'center'
  },
  column: {
    flexBasis: '33.33%'
  },
  studentInfo: {
    flexBasis: '100%'
  }
}))

interface StudentListItemProps {
  student: Student,
  onDelete: (id: string) => void
  onUpdate: (student: Student) => void
}

const StudentListItem: React.FC<StudentListItemProps> = ({
  student,
  onDelete,
  onUpdate
}) => {
  const [fullName, setFullName] = useState(student.fullName)
  const [birthDate, setBirthDate] = useState<Date | null>(student.birthDate)
  const [grade, setGrade] = useState(student.grade.toString())

  const classes = useStyles()

  function handleCancelButtonClick() {
    setFullName(student.fullName)
    setBirthDate(student.birthDate)
    setGrade(student.grade.toString())
  }

  function handleDeleteButtonClick() {
    onDelete(student.id)
  }

  function handleUpdateButtonClick() {
    onUpdate({
      ...student,
      fullName,
      birthDate: birthDate as Date,
      grade: parseInt(grade),
    })
  }

  const isInvalidForm = !fullName || !birthDate || !grade

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <GradeAvatar grade={student.grade} />
        <div className={classes.studentInfo}>
          <Typography className={classes.heading}>{student.fullName}</Typography>
          <Typography variant="body2" className={classes.secondaryHeading}>
            {format(student.birthDate, 'MM/dd/yyyy')}
          </Typography>  
        </div>
        <div>
          <IconButton onClick={handleDeleteButtonClick}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      </ExpansionPanelSummary>
      
      <ExpansionPanelDetails className={classes.details}>
        <StudentForm
          fullName={fullName}
          birthDate={birthDate}
          grade={grade}
          setFullName={setFullName}
          setBirthDate={setBirthDate}
          setGrade={setGrade}
        />
      </ExpansionPanelDetails>      
      <Divider />
      <ExpansionPanelActions>
        <Button
          size="small"
          onClick={handleCancelButtonClick}
        >
          Cancel
        </Button>
        <Button 
          size="small"
          color="primary"
          onClick={handleUpdateButtonClick}
          disabled={isInvalidForm}
        >
          Update
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
}

export default StudentListItem