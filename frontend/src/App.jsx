import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Store from './pages/Store'
import Order from './pages/Order'
function App() {
  

  return (
   <Router>
       <Nav/>
    <Routes>
   <Route exact path="/" Component={() => <Store/>} />
   <Route exact path="/order" Component={() => <Order/>} />
   <Route exact path="/events" Component={() => <Events/>} />
   </Routes>
   </Router>
  )
}


export default App
