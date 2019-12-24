import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Avatar from '@material-ui/core/Avatar'
import { red, amber, blue, green } from '@material-ui/core/colors'

import { Grade } from 'features/students/types'

const useStyles = makeStyles(theme => ({
  avatar: {
    marginRight: theme.spacing(3)
  },
  red: {
    color: theme.palette.getContrastText(red[600]),
    backgroundColor: red[600],
  },
  green: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600],
  },
  amber: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  }
}))

interface GradeAvatarProps {
  grade: Grade,
}

function GradeAvatar({ grade }: GradeAvatarProps) {
  const classes = useStyles()

  function getGradeAvatarSpicificClass(): string {
    switch(grade) {
      case Grade.Unsatisfactory:
        return classes.red
      case Grade.Satisfactory:
        return classes.amber
      case Grade.Good:
        return classes.blue
      case Grade.Excellent:
        return classes.green
    }
  }

  
  function getGradeAvatarSpicificText(): string {
    switch(grade) {
      case Grade.Unsatisfactory:
        return 'Un'
      case Grade.Satisfactory:
        return 'St'
      case Grade.Good:
        return 'Gd'
      case Grade.Excellent:
        return 'Ex'
    }
  }

  return(
    <Avatar className={clsx(classes.avatar, getGradeAvatarSpicificClass())}>
      {getGradeAvatarSpicificText()}
    </Avatar>
  )
}
export default GradeAvatar