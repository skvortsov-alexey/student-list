import React from 'react'
import List from '@material-ui/core/List'

import { Student } from 'features/students/types'
import StudentListItem from './StudentListItem'

interface StudentListProps {
  students: Student[],
  onDelete: (id: string) => void
}

const StudentList = ({ students, onDelete }: StudentListProps) => (
  <List>    
  {
    students.map(student => 
      <StudentListItem 
        key={student.id}
        onDelete={onDelete}
        student={student}        
      />
    )
  }
  </List>
)

export default StudentList