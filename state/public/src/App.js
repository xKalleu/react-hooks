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
  const [state, setState] = useState({
    counter: 0,
    toggled: false
  })

  return (
    <>
      <Counter
        counter={state.counter}
        increment={() => {
          setState(prevState => {
            return {
              ...prevState,
              counter: prevState.counter + 1 
            }
          })
        }}
        decrement={() => {
          setState(prevState => {
            return { 
              ...prevState,
              counter: prevState.counter - 1 
            }
          })
        }}
      />
      {state.toggled && <h1>Visible</h1>}
      <button onClick={() => {
        setState(prevState => {
          return {
            ...prevState,
            toggled: !prevState.toggled
          }          
        })
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