import { Routes, Route } from 'react-router-dom'
import LoginSignUp from './templates/LoginSignUp'
import Home from './templates/Home'

export default function MyRoutes(): JSX.Element{
  return(
    <Routes>
      <Route index path='/' element={<LoginSignUp/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
  )
}