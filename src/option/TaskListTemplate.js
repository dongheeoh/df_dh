import React from 'react';
import './TaskListTemplate.css';

const TaskListTemplate = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        업무종류
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <div className="todos-wrapper">
        { children }
      </div>
    </main>
  );
};

export default TaskListTemplate;