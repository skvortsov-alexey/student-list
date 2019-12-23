import React, { FormEvent, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker  } from '@material-ui/pickers'

import { AcademicPerformance } from 'features/students/types'

const academicPerformances = [
  {
    value: AcademicPerformance[AcademicPerformance.Unsatisfactory],
    label: 'Unsatisfactory',
  },
  {
    value: AcademicPerformance[AcademicPerformance.Satisfactory],
    label: 'Satisfactory',
  },
  {
    value: AcademicPerformance[AcademicPerformance.Good],
    label: 'Good',
  },
  {
    value: AcademicPerformance[AcademicPerformance.Excellent],
    label: 'Excellent',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  field: {
    width: 250,
  },
}));

interface StudentFormProps {  
  fullName: string,
  birthDate: Date | null,
  academicPerformance: string,
  setFullName: (fullName: string) => void,
  setBirthDate: (birthDate: Date | null) => void,
  setAcademicPerformance: (academicPerformance: string) => void
}

function StudentForm({ fullName, birthDate, academicPerformance, setFullName, setBirthDate, setAcademicPerformance }: StudentFormProps) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.field}
        value={fullName}
        onChange={event => setFullName(event.target.value)}
        label="Full name"
        variant="outlined"
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
          onChange={setBirthDate}
          inputVariant="outlined"
        />
      </MuiPickersUtilsProvider>
      <TextField
        select
        className={classes.field}
        value={academicPerformance}
        onChange={event => setAcademicPerformance(event.target.value)}
        label="Academic Performance"
        variant="outlined"
      >
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