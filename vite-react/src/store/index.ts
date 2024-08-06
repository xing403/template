import userAtom from './modules/user'
import { createStore } from 'jotai'

const store = createStore()

store.sub(userAtom, () => console.log('userAtom changed'))

export {
  userAtom,
}



export default store
