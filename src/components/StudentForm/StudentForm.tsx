import React, { ChangeEvent } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker  } from '@material-ui/pickers'

import { Grade } from 'features/students/types'

const grades = [
  {
    value: Grade.Unsatisfactory,
    label: 'Unsatisfactory',
  },
  {
    value: Grade.Satisfactory,
    label: 'Satisfactory',
  },
  {
    value: Grade.Good,
    label: 'Good',
  },
  {
    value: Grade.Excellent,
    label: 'Excellent',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  field: {
    width: 250
  },
}));

interface StudentFormProps {
  className?: string,
  fullName: string,
  birthDate: Date | null,
  grade: string,
  setFullName: (fullName: string) => void,
  setBirthDate: (birthDate: Date | null) => void,
  setGrade: (grade: string) => void
}

function StudentForm(props: StudentFormProps) {
  const {
    className,
    fullName,
    birthDate,
    grade,
    setFullName,
    setBirthDate,
    setGrade
  } = props
  const classes = useStyles()

  function handleFullNameChange(e: ChangeEvent<HTMLInputElement>) {
    setFullName(e.target.value)
  }

  function handleBirthDateChange(date: Date | null) {
    setBirthDate(date)
  }

  function handleGradeChange(e: ChangeEvent<HTMLInputElement>) {
    setGrade(e.target.value)
  }

  return (
    <form className={clsx(classes.root, className)} noValidate autoComplete="off">
      <TextField
        className={classes.field}
        value={fullName}
        onChange={handleFullNameChange}
        label="Full name"
        variant="outlined"
        size="small"
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker 
          autoOk
          disableToolbar
          className={classes.field}
          variant="inline"
          format="MM/dd/yyyy"
          label="Birth date"
          value={birthDate}
          onChange={handleBirthDateChange}
          inputVariant="outlined"
          size="small"
        />
      </MuiPickersUtilsProvider>
      <TextField
        select
        className={classes.field}
        value={grade}
        onChange={handleGradeChange}
        label="Grade"
        variant="outlined"
        size="small"
      >
        <MenuItem key="-1" value={''}>
          <em>None</em>
        </MenuItem>
        {grades.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  )
}

export default StudentForm