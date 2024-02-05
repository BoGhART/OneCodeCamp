// import React from 'react';
// // import Portfolio from './comps/Portfolio';
// import Front from './comps/Front';
// import './assets/index.css';

// function App() {
//   return (
//     <div className="App">
//       <Front />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Front from './comps/Front';
import Portfolio from './comps/Portfolio'; 
import TravelJournal from './comps/Travels';
import Projects from './comps/Projects';
import Pokemon from './comps/Pokemon'
import './assets/style.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Front />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/travels" element={<TravelJournal />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/comps/pokemon" element={<Pokemon />} />
    </Routes>
  </Router>
);

export default App;


