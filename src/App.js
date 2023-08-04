import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Home, Layout } from './Components';



function App() {
  return (
    <div className="App">
        <Routes>
            <Route element={<Layout />}>
              <Route  index element={<Home />}/>
              <Route  path="/about" element={<About />}/>
            </Route>
            
        </Routes>  
    </div>
  );
}

export default App;
