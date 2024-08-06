const userAtom = atom({
  token: localStorage.getItem('token') || '',
  username: '',
  avatar: '',
})
userAtom.debugLabel = 'userAtom'

export default userAtom
