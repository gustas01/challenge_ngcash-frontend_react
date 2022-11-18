import { Routes, Route } from 'react-router-dom'
import BasicTabs from './components/BasicTabs'
import Home from './templates/Home'

export default function MyRoutes(): JSX.Element{
  return(
    <Routes>
      <Route index path='/' element={<BasicTabs/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
  )
}