import { createStore } from 'redux'

import rootReducer from './reducer'

function configureStore() {  
  return createStore(rootReducer)
}

export default configureStore