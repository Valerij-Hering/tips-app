
import { useEffect, useState } from 'react';
import './App.css';
import girl from './girl.png';


function App() {

  const [tips, setTips] = useState('');

  const fetchTips = async () => {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();
    setTips(data.activity);
  }

  useEffect(() => {
    fetchTips();
  },[])

  return (
    <div className="App">
    {/* <div className='fon'></div> */}
    <div className='container'>
      <img className='girl-img' src={girl} alt="girl"/>
      <div className='box-par'>
        <i className='fa-envelope	fas icon'></i>
        <p>{tips}</p>
        <div className='checkbox'>
          <div className='check'>
            <i className="fi fi-bs-check"></i>
          </div>
        </div>
      </div>
    </div>
    <h3>Tips For Boredom</h3>
    <button className='btn' onClick={fetchTips}>New Tip</button>
    </div>
  );
}

export default App;
