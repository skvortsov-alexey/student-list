import { createStore, applyMiddleware, compose } from 'redux'
import { Action } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'

import api, { Api } from 'api'
import rootReducer from './reducer'

function configureStore() {  
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const middlewares = [thunkMiddleware.withExtraArgument( api )]
  const enhancers = [applyMiddleware(...middlewares)]

  const store = createStore(rootReducer, composeEnhancers(...enhancers))
  
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducer', () => {
      const newRootReducer = require('./reducer').default
      store.replaceReducer(newRootReducer)
    })
  }

  return store
}

const store = configureStore()

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppThunk = ThunkAction<void, RootState, Api, Action<string>>

export default store