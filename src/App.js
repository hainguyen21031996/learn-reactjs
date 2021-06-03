import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = 'Hải';
  const age = 25;
  const isMale = true;
  const student = {
    name: 'Easy Frontend'
  };

  const Listcolor = ['red', 'blue', 'yellow'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hải Nguyễn (HaiKunBoiz)
        </p>
        <p>{name} - {age} - {isMale ? 'Male' : 'Female'} - Xin chào</p>

        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )}

        {isMale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </React.Fragment>
        )}

        {isMale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </>
        )}

        <p>
          {student.name}
        </p>

        <ul>
          {Listcolor.map(color => (
            <li style={{ color }}>
              {color}
            </li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
