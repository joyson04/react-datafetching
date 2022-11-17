import React from 'react';
import ReactDOM from 'react-dom';
import MainHook from './MainHook';
let NewRoot = document.querySelector('#main');
function PortalDemo() {
  return ReactDOM.createPortal(
    <>
      <h1 id="weather">Weather API</h1>
      <h2 id="location">Location India</h2>
    </>,
    NewRoot
  );
}

function Weather() {
  const [apidata, temp1, first] = MainHook();
  const lists = temp1.map((d) => {
    return <p>{d + ':  ' + first.current[d]}</p>;
  });
  return (
    <div id="Main">
      <PortalDemo />
      <h3 id="data">{apidata}</h3>
      {/* <h3 id="data">{temp1.map((d,i)=>{
        return <Fragment><p key={i}>{d+":  "+first.current[d]}</p></Fragment> 
      })}</h3> */}
      <h3>{lists}</h3>
    </div>
  );
}

export default Weather;
