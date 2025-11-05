import React from 'react'

const App = () => {

  localStorage.clear();                        //to clear localstorage
  localStorage.setItem("user", "Lata");       //to item set localstorage
  localStorage.setItem("age", "21");         //to item set localstorage
  const user = localStorage.getItem("user"); // to item get localstorage
  console.log(user);                         //to print in console
  const age = localStorage.getItem("age");   // to item get localstorage
  console.log(age);                           //to print in console
  console.log(age, user);                    //to print in console
  localStorage.removeItem("user");           //to remove item from localstorage
  localStorage.removeItem("age");           //to remove item from localstorage
  sessionStorage.clear();                 //to clear a session storage

  //Object
  const user2 = {
    user: 'lata',
    age: 20,
    city: 'dhanbad'
  }
  localStorage.setItem('user2', JSON.stringify(user2)); //convert to string
  localStorage.getItem('user2');
  const users = JSON.parse(localStorage.getItem('user2')); //convert to retrive (object)
  console.log(users);
  console.log(typeof (user2)); //check datatype
  return (
    <div>
        
    </div>
  )
}

export default App
