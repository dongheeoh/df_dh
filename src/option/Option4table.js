import React, { Component } from 'react';
import {
    Table, Input, Button, Icon,
  } from 'antd';
  import Highlighter from 'react-highlight-words';
import Option4modal from './Option4modal';

  const data = [{
    key: '1',
    title: 'John Brown',
    content: 32,
  }, {
    key: '2',
    title: 'Joe Black',
    content: 42,
  }, {
    key: '3',
    title: 'Jim Green',
    content: 32,
  }, {
    key: '4',
    title: 'Jim Red',
    content: 32,
  }];
  
  class Option4table extends Component {
    constructor(props) {
      super(props);
      this.state = {
      searchText: '',
      buttonTitle: this.props.buttonTitle,
      data: this.props.data,
      columns: this.props.columns
      }
    
  }
 
    
  
    getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({
        setSelectedKeys, selectedKeys, confirm, clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => { this.searchInput = node; }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      ),
      filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
      },
      render: (text) => (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ),
    })
  
    handleSearch = (selectedKeys, confirm) => {
      confirm();
      this.setState({ searchText: selectedKeys[0] });
    }
  
    handleReset = (clearFilters) => {
      clearFilters();
      this.setState({ searchText: '' });
    }
  
    render() {
      const columns = [{
        title: 'title',
        dataIndex: 'title',
        key: 'title',
        width: '30%',
        ...this.getColumnSearchProps('title'),
      }, {
        title: 'content',
        dataIndex: 'content',
        key: 'content',
        width: '20%',
        ...this.getColumnSearchProps('content'),
      },  {
        title: 'taskTitle',
        dataIndex: 'taskTitle',
        key: 'taskTitle',
        width: '20%',
        ...this.getColumnSearchProps('taskTitle'),
      },  {
        title: 'userName',
        dataIndex: 'userName',
        key: 'userName',
        width: '20%',
        ...this.getColumnSearchProps('userName'),
      },{
        title: 'createdAt',
        dataIndex: 'createdAt',
        key: 'createdAt',
        width: '20%',
        ...this.getColumnSearchProps('createdAt'),
      }, {
        title: 'Address',
        key: 'address',
        render: (text, record) => (
          <span>
            <Option4modal title={this.state.buttonTitle} />
          </span>
        ),
      }];
  
      return <Table columns={columns} dataSource={this.state.data} />;
    }
  }


 
    
  

 export default Option4table;