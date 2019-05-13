import { Tabs } from 'antd';
import React, { Component } from 'react';
import TableForm from './Table';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class TabForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: this.props.reports,
            length:this.props.reports.length,
            holdArray:[],
            waitArray:[],
            progressArray:[],

        }
    }

    pushProperty(i){
        
        return {
            "key": i, "title": this.state.reports[i].title,
            "content": this.state.reports[i].content,"date": this.state.reports[i].createdAt,
             "status": this.state.reports[i].status,
             "description" : this.state.reports[i].description,
            tags: ['cool', 'teacher']
            };
    }

    init(){
      
        let holdArray= [];
        let waitArray= [];
        let progressArray = [];
     
        for(let i = 0 ;  i < this.state.length; i++){
            if (this.state.reports[i].status == 'PROGRESS') {
                progressArray.push(this.pushProperty(i));
            }else if(this.state.reports[i].status == 'WAIT'){
                waitArray.push(this.pushProperty(i));
            }else{
                holdArray.push(this.pushProperty(i));
            }
            
        }
        this.state={
            holdArray:holdArray,
            waitArray:waitArray,
            progressArray:progressArray,
        }
       
    }

    render() {
        this.init();
        return (

          
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="대기" key="1"><TableForm reports={this.state.waitArray}/></TabPane>
                <TabPane tab="진행" key="2"><TableForm reports={this.state.progressArray}/></TabPane>
                <TabPane tab="보류" key="3"><TableForm reports={this.state.holdArray} /></TabPane> 
            </Tabs>
        );
    }
}
export default TabForm;