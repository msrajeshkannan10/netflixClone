
import "./css/welcome.css"
import Welcome from './components/welcome';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
    </Routes>
    </BrowserRouter>

  )
  
}

export default App;
