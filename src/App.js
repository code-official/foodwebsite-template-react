import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import MultiPro from './Components/MultiPro';
import About from './Components/About';
import COntact from './Components/COntact';
import Footer from './Components/Footer';
import HeadNav from './Components/HeadNav';




function App() {

  
  return (
    <div className="App">

       {/* <App /> */}
       <Navbar />
       <Header />
       <HeadNav />
       <MultiPro />
       <About />
       <COntact />
       <Footer />
       


    </div>
  );
}

export default App;
