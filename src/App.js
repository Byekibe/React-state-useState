
import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
const [state, setState] = useState(0)

function addition() {
	setState(() => state+1)
	}

function subtraction() {
	setState(() => state-1)
}

  return(
  <div>
	  <button onClick={subtraction}>-</button>{state}<button onClick={addition}>+</button>
  </div>
     );
}

export default App;
