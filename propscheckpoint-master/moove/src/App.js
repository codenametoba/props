// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Profile from './profile/profile';

function App() {
  return (
    <div className="App">
      <div className='mine' style={{backgroundColor: 'greenyellow',width:'1366px',height: '620px'}}> 
      <Profile fullName="Angel Dorcas"
       bio="Beautiful inside out"
        profession="Software Engineer"
         handleName={name => alert(`Hello ${name}`)} >
    <img src={process.env.PUBLIC_URL + '/Angel.jpg'} alt="Angel" width={'300px'} />

      </Profile>
      </div>
    </div>
  );
}

export default App;
