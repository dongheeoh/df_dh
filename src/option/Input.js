import React, { Component } from 'react';
import {
    Input, Button, Modal,
 } from 'antd';
 import TaskListTemplate from './TaskListTemplate';
 import Form from './Form';
 import TaskItemList from './TaskItemList';

const InputGroup = Input.Group;

class Option2Input extends Component {
  id = 5 // 이미 0,1,2,4,5 가 존재하므로 5으로 설정
    state = {
      tasks: [
        { id: 0, text: ' 박스소개', checked: false },
        { id: 1, text: ' 색깔소개', checked: false },
        { id: 2, text: ' 동물소개', checked: false },
        { id: 3, text: ' 새소개', checked: false },
        { id: 4, text: ' 개소개', checked: false }
      ],
       value: '',
       visible: false,
       keyword:'',
       count:0,
    }

    handleToggle = (id) => {
      const {tasks,count} = this.state;
  
      // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
      const index = tasks.findIndex(todo => todo.id === id);
      const selected = tasks[index]; // 선택한 객체

      const nextTasks = [...tasks]; // 배열을 복사
  
      // 기존의 값들을 복사하고, checked 값을 덮어쓰기
      nextTasks[index] = { 
        ...selected, 
        checked: !selected.checked
      };
  

      this.setState({
        tasks: nextTasks,
        count:count+1,
        visible: false,
      });
    }

    handleChange=(e)=>{
      this.setState({
        keyword:e.target.value
      });
    }


    showModal = () => {
      this.setState({
        visible: true,
      });
    }

    handleOk = (e) => {
      this.setState({  
        visible: false,
      });
    }

    handleCancel = (e) => {
      this.setState({
        value: '',
        visible: false,
      });
    }
     
    
    render() {
      const { tasks,keyword,} = this.state;
    const { handleChange, handleToggle} = this;
    const filteredList = tasks.filter(
      info=>info.text.indexOf(keyword)!==-1);


   
        return (
     <div className="information" >
        <div style={{marginBottom:'5px'}}>
        <InputGroup compact>
          <Input  className="up" value="업무선택" style={{ width: '20%',cursor:'default'}} readOnly/>
          <taskInput value={keyword} onChange={handleChange}/>
          <Input style={{ width: '70%' }} autoComplete="off" placeholder="업무" value={this.state.value} />
          <Button icon="search" style={{ width: '10%' }} onClick={this.showModal} ></Button>
          <Modal
          title="업무선택하기"
          visible={this.state.visible}
          onCancel={this.handleCancel}
        >
        <TaskListTemplate form={(
        <Form 
          value={keyword}
          onChange={handleChange}
        />
      )}>
        <TaskItemList tasks={filteredList}  onToggle={handleToggle}/>
      </TaskListTemplate>
        </Modal>
        </InputGroup>
        </div>
    </div>
        );
    }
}
 export default Option2Input;