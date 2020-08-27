import React, { Component } from 'react';
import PropTypes from "prop-types"

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 5 },
    { name: "jun", age: 20 },
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

// propsの型チェック
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

// propsのデフォルト値
// User.defaultProps = {
//   age: 1
// }

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


