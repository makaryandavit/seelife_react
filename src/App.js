import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Causes, Home, Layout } from './Components';
import { HiArrowSmUp } from "react-icons/hi";
import { Pages } from './Components/Pages';
import { EventDetails, Events } from './MiniComponents/Pages';
import ScrollToTop from './Settings/ScrollToTop';



function App() {
  return (
    <div className="App">
        <Routes>
            <Route element={<Layout />}>
              <Route  index element={<Home />}/>
              <Route  path="/about" element={<About />}/>
              <Route  path="/causes" element={<Causes />}/>
              <Route path="/Events" element={<Events />}/>
              <Route path="/Events Details" element={<EventDetails />}/>
            </Route>
        </Routes>  
        <div className='toTop'>
          <HiArrowSmUp className='arrow'  onClick={() =>{
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}/>
        </div>
        <ScrollToTop />
    </div>
  );
}

export default App;
