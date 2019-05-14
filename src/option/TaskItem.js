import React, { Component } from 'react';
import './TaskItem.css';

class TaskItem extends Component {
  

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }


  render() {
    const { text, checked, id, onToggle} = this.props;
    if(checked){
    console.log(text);
    }
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
}

export default TaskItem;