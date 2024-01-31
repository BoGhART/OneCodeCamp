import React, {useState} from 'react';
// import Welcome from './component/Welcome';
import './App.css';
import Activity from './Activities/act1';
// import Frog from './assets/imgs/frog.jpg'
// import Images from './component/Images';
// import Child from './component/Child';

// function App() {
//   return (
//     <div className="App">
//       {/* <Images/> */}

//       <Child name="Dion"/>

//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Activity />
//     </div>
//   );
// }


const App = () => {
//   // //1
//   const [clickCount, Clckcount] = useState(0);

//   const btnClck = () => {
//     Clckcount((prevCount) => prevCount + 1);
//   };

//   return (
//     <div>
//       <h1>Click Counter</h1>
//       <h2>Total Clicks: {clickCount}</h2>
//       <button onClick={btnClck} style={{backgroundColor: 'royalblue', fontSize: '18px', borderRadius: '5px'}}>Click me</button>
//     </div>
//   );

  //2
  // State to store the list of contacts
  const [contacts, setContacts] = useState([]);

  // Handler to add a new contact to the list
  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <Activity onAddContact={handleAddContact} />
      <ul style={{ listStyleType: 'none', margin: '1%',padding: 0, backgroundColor: 'white'}}>
        <h3 style={{color: 'gray'}}>Contacts</h3>
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong>{contact.name}</strong><br/>
            <strong>{contact.email}</strong> 
          </li>
        ))}
      </ul>
    </div>
  );


};


export default App;

//JSX - js extension