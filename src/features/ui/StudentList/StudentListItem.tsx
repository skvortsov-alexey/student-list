import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { Student } from 'features/students/types'

interface StudentListItemProps {
  student: Student,
  onDelete: (id: string) => void
}

function StudentListItem({ student }: StudentListItemProps) {
  const { fullName, birthDate } = student

  return(
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={fullName}
        secondary={
          <React.Fragment>
            {birthDate.toString()}
          </React.Fragment>
        }
      />
    </ListItem>
  )
}

export default StudentListItem