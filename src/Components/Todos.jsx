import React from 'react';

class Todos extends React.Component {
    render() {
        return(
            <React.Fragment>
                <ul className="container">
                    {this.props.todos.map((element)=>{
                        return (
                        <li className="card-panel" id={element.id}>
                            <b>
                               <label>
                                  <input checked={element.completed} onChange={(e)=>this.props.onChange(e)} type="checkbox"/>
                                  <span className={(element.completed)?"completed":"incompleted"}>{element.text}</span>
                               </label>
                            </b>
                            <button className="btn leal darken-1" onClick={(e)=>this.props.onClick(e)}>Delete</button>
                        </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}
export default Todos;