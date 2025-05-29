import React, { useState } from 'react'

export const UserProfile = (props) => {
    const [count,setCount]=useState(0)
    const handlesubmit=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <div>Name:{props.name}</div>
            <div>age:{props.age}</div>
            <div>email:{props.email}</div>
            <button onClick={handlesubmit}>hello</button>
            <button onClick={()=>setCount(count+1)}>hello</button>
            <div>{count}</div>
        </div>
    )
}
class Userprofiles extends React.Component {
    render() {
        return (
            <div>
                <div>Name:{this.props.name}</div>
                <div>age:{this.props.age}</div>
                <div>email:{this.props.email}</div>
            </div>
        )
    }
}
export { Userprofiles }