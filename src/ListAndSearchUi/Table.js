import { Table, Divider, Tag } from 'antd';
import React, { Component } from 'react';

import { Modal, Button } from 'antd';
class DatePickers extends Component {

  constructor(props) {
    super(props);
    this.state = {
        reports: this.props.reports,
        as:3,
        columns : [{
          title: '제목',
          dataIndex: 'title',
          key: 'title',
          render: text => <a href="javascript:;">{text}</a>,
        }, {
          title: '내용',
          dataIndex: 'content',
          key: 'content',
        }, {
          title: '작성일자',
          dataIndex: 'date',
          key: 'date',
        },{
          title: '상태',
          dataIndex: 'status',
          key: 'status',
        } ,{
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return <Tag color={color} key={tag}>
                {tag.toUpperCase()}
                </Tag>;
              })}
            </span>
          ),
        },{
          title: '보고서 보기',
          key: 'report',
          dataIndex: 'report',
          render: report => (
            <div>
            <Button type="primary" onClick={this.showModal}>
              Open Modal
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
            </Modal>
          </div>
          ),
        }, {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
              <a href="javascript:;">Invite {record.name}</a>
              <Divider type="vertical" />
              <a href="javascript:;">Delete</a>
            </span>
          ),
        }],
        
         data : [{
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        }]
    }
}

 
state = { visible: false }

showModal = () => {
  this.setState({
    visible: true,
  });
}

handleOk = (e) => {
  console.log(e);
  this.setState({
    visible: false,
  });
}

handleCancel = (e) => {
  console.log(e);
  this.setState({
    visible: false,
  });
}





  render() {

    return (
      <Table defaultPageSize={this.state.as} columns={this.state.columns} dataSource={this.state.reports} />
    );
  }
}
export default DatePickers;