import { createStore, applyMiddleware } from 'redux'
import Storedata from './reducer'
import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
// import todolistsaga from './saga'

// const sagaMiddleWare = createSagaMiddleware()
const store = createStore(Storedata, applyMiddleware(thunk))
// sagaMiddleWare.run(todolistsaga)
export default store