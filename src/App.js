import React, { Component } from 'react';

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 5 },
    { name: "jun" },
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return (
    <React.Fragment>
      <p>Hi, I am {props.name} and {props.age} years old</p>
    </React.Fragment>
  )
}

User.defaultProps = {
  age: 1
}

export default App;

// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello World"
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       Hello World
//     </div>
//   );
// }


