import React from 'react';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
      <div id="main">
        <div id="wrapper" className="bg-[#C5BEB4] h-screen w-screen">
          <Navbar />
          <section>
            <div></div>
            <div></div>
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
