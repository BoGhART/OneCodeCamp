// class Welcome extends React.component{
//     render(){
//         return <h1>Hello, trainee</h1>;
//     }
// }

// function Welcome() {
//     return <h1>Hello, trainee</h1>;
// }

// import React, { useState, useEffect } from 'react';

// const Welcome = () => {
//     // State to hold the current time
//     const [time, setTime] = useState(new Date());
  
//     useEffect(() => {
//       // Update the time every second
//       const intervalId = setInterval(() => {
//         setTime(new Date());
//       }, 1000);
  
//       // Cleanup the interval on component unmount
//       return () => clearInterval(intervalId);
//     }, []); 
  
//     // Time Format
//     const formattedTime = time.toLocaleTimeString();
  
//     return (
//       <div>
//         <h1>Hello, World</h1>
//         {/* Display the current time */}
//         <h1>It is {formattedTime}</h1>
//       </div>
//     );
//   };

// export default Welcome;


// import React from 'react'

// const Welcome = () => {
//     const users = ["Harold", "Marko", "LJ","Amanda"];
//   return (
//     <div>
//       <h1>Hallo</h1>
//       <ul>
//         {users.map((user) =>(
//             <li key = {user}>{user}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

import Frog from '../assets/imgs/frog.jpg';
import WFrog from '../assets/imgs/waterfrog.jpg';
import Bonk from '../assets/imgs/bonk.jpg';
import React from 'react';

const Welcome = () => {
  const posts = [
    {
      id: 1,
      userName: 'Frog Jones',
      userImage: Frog,
      comment: 'Im a Frog',
      timestamp: new Date().toISOString(),
    },
    {
      id: 2,
      userName: 'Water Frog',
      userImage: WFrog,
      comment: 'Im also a frog. BUT ON WATER!',
      timestamp: new Date().toISOString(),
    },
    {
      id: 3,
      userName: 'Banjo Frog',
      userImage: Bonk,
      comment: 'Bonk! Bonk!',
      timestamp: new Date().toISOString(),
    },
  ];

  return (
    <div>
      <h1 style={{border: 'groove', backgroundColor: 'royalblue', padding: '1%'}}>FrogBook</h1>
      {posts.map(post => (
        <div key={post.id} style={{display: 'flex', alignItems: 'center', margin: '1% 65% 1% 1%', border: '5px inset'}}>
          <img src={post.userImage} alt={`${post.userName}`} style={{ width: '100px', margin: '1% 1% 1% 1%', border: '5px double'}} />
          <div>
            <h3 style={{ margin: '0' }}>{post.userName}</h3>
            <p style={{ margin: '0' }}>{post.comment}</p>
            <p style={{ margin: '0', color: 'gray' }}>{new Date(post.timestamp).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Welcome;
