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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Front from './comps/Front';
import Portfolio from './comps/Portfolio'; // Replace with the actual file name of the target JS file

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Front} />
      <Route path="/" component={Portfolio} />
    </Switch>
  </Router>
);

export default App;
