// // 1
import React, { useState } from 'react';

// const Act11 = () => {
  // const [clickCount, Clckcount] = useState(0);

  // const btnClck = () => {
  //   Clckcount((prevCount) => prevCount + 1);
  // };

  // return (
  //   <div>
  //     <h1>Click Counter</h1>
  //     <h2>Total Clicks: {clickCount}</h2>
  //     <button onClick={btnClck} style={{backgroundColor: 'royalblue', fontSize: '18px'}}>Click me</button>
  //   </div>
  // );
// };


// // 2
const Act11 = ({ onAddContact }) => {
  
  // State to manage the input values in the form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // update name input value
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // update email input value
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // submit form and add a new contact
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both inputs are not empty before
    if (name.trim() !== '' && email.trim() !== '') {
      const newContact = {
        name: name,
        email: email,
      };
      onAddContact(newContact);
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name<br/>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <br />
      <label>
        Email<br/>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <br/>
      <br/>
      <button type="submit" style={{borderRadius: '5%', backgroundColor: 'lightgray', borderStyle: 'none', fontSize: '18px'}}>Add Contact</button>
    </form>
  );
};


export default Act11;
