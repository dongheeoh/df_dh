import React, { Component } from 'react';
import { Modal, Button ,Input} from 'antd';
import LoadingIndicator from '../common/LoadingIndicator';
import ServerError from '../common/ServerError';
import NotFound from '../common/NotFound';
import { ReportConverter, getAllTask } from '../util/APIUtils';
const { TextArea } = Input;

class Option4modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id:this.props.id,
      textArea:''

    }
  }

  showModal = (e) => {
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
      visible: false,
    });

  }

 onChange = (e) =>{
  this.setState({
  textArea:e.target.value
  }) 
}


  render() {
   

    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          {this.props.title}
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <br/>
          반려사유작성란
          <TextArea rows={4} onChange={this.onChange}/>
          <Button type="primary" onClick={id=>this.props.progress(this.state.id,'PROGRESS',this.state.textArea)}>
         승인
        </Button>
        <Button type="primary" onClick={id=>this.props.progress(this.state.id,'HOLD',this.state.textArea)}>
          반려
        </Button>
         
        </Modal>
      </div>
    );
  }
}


 export default Option4modal;