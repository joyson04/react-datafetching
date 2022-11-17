import React, { useState, useEffect } from 'react';

function Customhook() {
  const [first, setfirst] = useState(' ');
  useEffect(() => {
    let datas = false;
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=118cb07cfa894529bb7171057220611&q=india&aqi=yes`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!datas) {
          setfirst(data);
        }
      })
      .catch((error) => {
        setfirst(error.message);
      });

    return () => {
      datas = true;
    };
  }, []);

  let objs = new Object(first.location);
  let objs1 = new Object(first.current);
  let temp = [...Object.keys(objs)];
  let temp1 = [...Object.keys(objs1)];
  const user_data = temp.map((value, index) => {
    return <p key={index}>{value + '   :   ' + first.location[value]}</p>;
  });
  return [user_data, temp1, first];
}

export default Customhook;
