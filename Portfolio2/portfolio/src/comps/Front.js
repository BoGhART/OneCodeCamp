// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../assets/index.css';

// const Front = () => (
//   <body className="front">
//     <a href="Front.html" className="image-container">
//       <img className="default-image" src="https://www.meme-arsenal.com/memes/8d4944eb07e28ab1378f4696a90544b1.jpg" alt="Default Image" />
//     </a>
//   </body>
// );

// export default Front;

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const Front = () => (
  <div className="front">
    <Link to="/portfolio" className="image-container">
      <img className="default-image" src="https://www.meme-arsenal.com/memes/8d4944eb07e28ab1378f4696a90544b1.jpg" alt="Default Image" />
    </Link>
  </div>
);

export default Front;
