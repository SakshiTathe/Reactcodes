import React, { useEffect, useState } from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    increase = () => {
        this.setState(prev => ({ count: prev.count + 1 }))
    }
    componentDidMount() {
        console.log("Component is mounted")
    }
    componentDidUpdate(prevprops, prevstate) {
        if (prevstate.count !== this.state.count) {
            console.log("counter updated")
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.increase}>click</button>
                <div>dysplay:{this.state.count}</div>
            </div>
        )
    }
}

export const Counterfun = () => {
    const [count,setCount]=useState(0)
    const handleincrease=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.log("counter Mounted")
    },[])
    useEffect(()=>{
        console.log("counter updated")
    },[count])

    return (
        <div>
            <button onClick={handleincrease}>click</button>
            <div>dysplayssssss:{count}</div>
        </div>
    )
}


export const Timmer=()=>{
    const [timer,setTimer]=useState(0)
    useEffect(()=>{
        const timers=setInterval(()=>{
            setTimer(prev=>prev+1)
        },1000)
        return () => clearInterval(timers);
    },[])
    return(
        <div>
            <div>{timer}</div>
        </div>
    )
}
export default Counter
import React, { Component } from 'react';

class TimerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('Timer unmounted and interval cleared');
  }

  render() {
    return (
      <div>
        <h2>Timer (Class)</h2>
        <p>Seconds: {this.state.count}</p>
      </div>
    );
  }
}
export default TimerClass;
