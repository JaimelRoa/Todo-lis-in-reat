import React from "react";

export default function AddTodo(props) {
    let value = React.createRef()
    return (
        <form className="form" onSubmit={(e)=>props.onSubmit(e,value.current.value)}>
            <div className="container col m12">
                <input className="input-field col m6" ref={value} type="search" placeholder="Add"/>
                <input className="btn col m2" type="submit" value="Add"/> 
            </div>
        </form>
    )
}