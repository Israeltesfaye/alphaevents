import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Store from './pages/Store'
import Order from './pages/Order'
import fs from 'fs'
import Events from './pages/Events'
import Admin from './pages/Admin'
function App() {
  console.log(fs)
  return (
   <Router>
       <Nav/>
    <Routes>
   <Route exact path="/" Component={() => <Store/>} />
   <Route exact path="/admin" Component={() => <Admin/>} />
   <Route exact path="/order/:id" Component={() => <Order/>} />
   </Routes>
   </Router>
  )
  
}


export default App
