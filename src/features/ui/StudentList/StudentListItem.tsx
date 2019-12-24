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

import { Student } from 'features/students/types'

import StudentForm from './StudentForm'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
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
  fullNameColumn: {
    flexBasis: '70%'
  },
  birthDateColumn: {
    flexBasis: '30%'
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    },
  }
}));

interface StudentListItemProps {
  student: Student,
  onDelete: (id: string) => void
  onUpdate: (student: Student) => void
}

function StudentListItem({ student, onDelete, onUpdate }: StudentListItemProps) {
  const [fullName, setFullName] = useState(student.fullName)
  const [birthDate, setBirthDate] = useState(student.birthDate)
  const [academicPerformance, setAcademicPerformance] = useState(student.academicPerformance)

  const classes = useStyles()

  function handleCancelButtonClick() {
    setFullName(student.fullName)
    setBirthDate(student.birthDate)
    setAcademicPerformance(student.academicPerformance)
  }

  function handleUpdateButtonClick() {
    onUpdate({
      ...student,
      fullName,
      birthDate: birthDate as Date,
      academicPerformance,
    })
  }

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.fullNameColumn}>
          <Typography className={classes.heading}>{student.fullName}</Typography>    
          <Typography variant="body2" className={classes.secondaryHeading}>{format(student.birthDate, 'MM/dd/yyyy')}</Typography>  
        </div>
        <div className={classes.birthDateColumn}>
          
        </div>
      </ExpansionPanelSummary>
      
      <ExpansionPanelDetails className={classes.details}>
        <StudentForm
          fullName={fullName}
          birthDate={birthDate}
          academicPerformance={academicPerformance}
          setFullName={setFullName}
          setBirthDate={setBirthDate}
          setAcademicPerformance={setAcademicPerformance}
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
        >
          Update
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
}

export default StudentListItem