import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Store from './pages/Store'
import Admin from './pages/Admin'
import Tnx from './pages/Tnx'

function App() {
  return (
   <Router>
       <Nav/>
    <Routes>
   <Route exact path="/" Component={() => <Store/>} />
   <Route exact path="/admin" Component={() => <Admin/>} />
   <Route exact path="/thanks" Component={() => <Tnx/>} />
   </Routes>
   </Router>
  )
  
}


export default App
