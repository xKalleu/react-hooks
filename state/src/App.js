import React, { useState } from 'react'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around'}}>
    <CounterClass />
    <CounterFunction />
  </div>
)

class CounterClass extends React.PureComponent {
  state = {
    counter: 0,
    toggled: false
  }

  render () {
    return (
      <>
        <Counter
          counter={this.state.counter}
          increment={(prevState) => {
            this.setState((prevState) => ({
              counter: prevState.counter + 1
            }))
          }}
          decrement={(prevState) => {
            this.setState((prevState) => ({
              counter: prevState.counter - 1
            }))
          }}
        />

        {this.state.toggled && <h1>Visible</h1>}
        <button onClick={() => {
          this.setState((prevState) => ({
            toggled: !prevState.toggled
          }))
        }}>Click</button>
      </>
    )
  }
}

function CounterFunction() {
  const [counter, setCounter] = useState(0)
  const [toggled, setToggled] = useState(false)

  return (
    <>
      <Counter
        counter={counter}
        increment={() => {
          setCounter((c) => c + 1)
        }}
        decrement={() => {
          setCounter((c) => c - 1)
        }}
      />
      {toggled && <h1>Visible</h1>}
      <button onClick={() => {
        setToggled(toggled => !toggled)
      }}>Click</button>
    </>
  ) 
}

const Counter = ({ counter, increment, decrement}) => (
  <div style={{ textAlign: 'center' }}>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)


export default App