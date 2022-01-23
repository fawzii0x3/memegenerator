import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './component/NavBar';
import Content from './component/Content';
const App=()=>{return(
<>
  <NavBar />
  <Content />
</>
)};


ReactDOM.render(<App />,document.getElementById('root'));