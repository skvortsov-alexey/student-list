import React from 'react'
import List from '@material-ui/core/List'

import { Student } from 'features/students/types'
import StudentListItem from './StudentListItem'

interface StudentListProps {
  students: Student[],
  onDelete: (id: string) => void
  onUpdate: (student: Student) => void
}

const StudentList = ({ students, onDelete, onUpdate }: StudentListProps) => (
  <List>    
  {
    students.map(student => 
      <StudentListItem 
        key={student.id}
        onDelete={onDelete}
        onUpdate={onUpdate}
        student={student}        
      />
    )
  }
  </List>
)

export default StudentList