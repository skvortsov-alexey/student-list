import React, { ChangeEvent } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker  } from '@material-ui/pickers'

import { AcademicPerformance } from 'features/students/types'

const academicPerformances = [
  {
    value: AcademicPerformance.Unsatisfactory,
    label: 'Unsatisfactory',
  },
  {
    value: AcademicPerformance.Satisfactory,
    label: 'Satisfactory',
  },
  {
    value: AcademicPerformance.Good,
    label: 'Good',
  },
  {
    value: AcademicPerformance.Excellent,
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
  academicPerformance: string,
  setFullName: (fullName: string) => void,
  setBirthDate: (birthDate: Date | null) => void,
  setAcademicPerformance: (academicPerformance: string) => void
}

function StudentForm(props: StudentFormProps) {
  const {
    className,
    fullName,
    birthDate,
    academicPerformance,
    setFullName,
    setBirthDate,
    setAcademicPerformance
  } = props
  const classes = useStyles()

  function handleFullNameChange(e: ChangeEvent<HTMLInputElement>) {
    setFullName(e.target.value)
  }

  function handleBirthDateChange(date: Date | null) {
    setBirthDate(date)
  }

  function handleAcademicPerformanceChange(e: ChangeEvent<HTMLInputElement>) {
    setAcademicPerformance(e.target.value)
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
        value={academicPerformance}
        onChange={handleAcademicPerformanceChange}
        label="Academic Performance"
        variant="outlined"
        size="small"
      >
        <MenuItem key="-1" value={''}>
          <em>None</em>
        </MenuItem>
        {academicPerformances.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  )
}

export default StudentForm