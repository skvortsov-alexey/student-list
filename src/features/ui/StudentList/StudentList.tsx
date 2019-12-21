import React from 'react'
import List from '@material-ui/core/List'

import { Student } from 'features/students/types'
import StudentListItem from './StudentListItem'

interface StudentListProps {
  students: Student[],
  onRemove: (id: string) => void
}

const StudentList = ({ students, onRemove }: StudentListProps) => (
  <List>    
  {
    students.map(student => 
      <StudentListItem 
        key={student.id}
        onRemove={onRemove}
        student={student}        
      />
    )
  }
  </List>
)

export default StudentList