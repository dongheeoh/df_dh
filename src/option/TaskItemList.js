import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskItemList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.tasks !== nextProps.tasks;
  }

  render() {
    const { tasks, onToggle} = this.props;
    

    const taskList = tasks.map(
      ({id, text, checked}) => (
        <TaskItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          key={id}
        />
      )
    );
    
    return (
      <div>
        {taskList}    
      </div>
    );
  }
}

export default TaskItemList;