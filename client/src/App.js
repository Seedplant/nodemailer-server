import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  const handleChange = (e) => {
    e.preventDefault();

    if(e.target.id === "name") {
      setName(e.target.value)
    } else {
      setEmail(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name,
      email,
     // type //이메일 형태 : 웰컴 또는 감사 비밀번호 변경 구독 등
    }

    axios.post("/api/sendMail", dataToSubmit)

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form onSubmit="">
          <input id="name" placeholder="Name"  value={name} onChange={handleChange}/> <br/>
          <input id="email" placeholder="Email" value={email} onChange={handleChange}/> <br/>
          <button onClick={handleSubmit}>Send Email</button>
        </form>
        

      </header>
    </div>
  );
}

export default App;
