import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import StudentListView from 'components/StudentListView'
import AppBar from './AppBar'

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <AppBar />
    <StudentListView />
  </React.Fragment>
)

export default App