import React from 'react';
import Promise from 'react';
import './style.css';

export default function App() {
  setTimeout(() => {
    const task = new Promise((resolve, reject) => {
      let condition = true;
      if (condition) {
        resolve(productos);
      } else {
        reject('error');
      }
    });

    task
      .then((respuesta) => {
        return respuesta;
      })
      .catch((err) => console.log(err))
      .then((res) => console.log(res));
  }, 3000);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
