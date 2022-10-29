import {
    Routes, Route, Outlet,
  } from 'react-router-dom';
  import Home from './components/Home';
  import Works from './components/Works';
  import Services from './components/Services';
  import Contact from './components/Contact';
  import About from './components/About';
  import SideNavbar from './components/sidebar/SideNavbar';
  import './App.css';

  
  function App() {
    const SidebarLayout = () => (
      <>
        <SideNavbar />
        <Outlet />
      </>
    );
    return (
      <div className="App flex">
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    );
  }
  
  export default App;
