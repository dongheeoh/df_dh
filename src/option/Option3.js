import React, { Component } from 'react';
import Tap from './Tap';
import { getReport } from '../util/APIUtils';
import  DatePickers from '../ListAndSearchUi/DatePickers';
import  SerachForm from '../ListAndSearchUi/SearchForm';
import  TabForm from '../ListAndSearchUi/TabForm';
import { Row, Col } from 'antd';
import LoadingIndicator from '../common/LoadingIndicator';
import ServerError from '../common/ServerError';
import NotFound from '../common/NotFound';
import moment from 'moment';
import {Card} from 'antd';
class Option3 extends Component {

    constructor(props) {
        super(props);
        var d = new Date();
        this.state = {
            reports: null,
            isLoading: false,
            from:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(),
            to:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
             
        }
        this.loadReport = this.loadReport.bind(this);
       
    }
    
    loadReport(search,search2) {
      this.setState({
          isLoading: true
      });
    
      getReport(search,search2)
      .then(response => {
        console.log('ss')
          this.setState({
            reports: response,
              isLoading: false
          
            });

      }).catch(error => {
          if(error.status === 404) {
              this.setState({
                  notFound: true,
                  isLoading: false
              });
          } else {
              this.setState({
                  serverError: true,
                  isLoading: false
              });        
          }
      });        
    }
    
    componentWillMount() {
     this.loadReport('');
    }
    
   
    
    
    // _renderUserTask = () => {
    
    // const userTask =  this.state.userTask.map((userTask, index) => {
    //   console.log(userTask)
    //   return <TabPane 
    //   tab={userTask.task.title}
    //   key={index}>
    //   <Option1Table/></TabPane>
    //  }); 
    
    //  return userTask;
    // }
    
    search= (data) => {

        this.loadReport(data);
        console.log(data)
    }
    dateSearch= (dateSearch) => {

        this.loadReport(dateSearch[0],dateSearch[1]);
         console.log(dateSearch[0],dateSearch[1])
         this.setState({
            from:dateSearch[0],
            to:dateSearch[1],
        });
      
        // this.setState({
        //     startDate:date[0]._i,
        //     end:date[1]._i
        // });
    }
    render () {
        console.log(this.state.isLoading)
        if(this.state.isLoading) {
            return <LoadingIndicator />;
          }
          
          if(this.state.notFound) {
            return <NotFound />;
          }
          
          if(this.state.serverError) {
            return <ServerError />;
          }
          console.log(this.state.reports);
          console.log('-------------------'+this.state.from)   
          
     
        
        
        
         return (
            
            <div>
               
                <div>
                <Card title='보고서관리'>
                     <Row>
                         <Col span={12}><DatePickers dateSearch={this.dateSearch} to={this.state.to} from={this.state.from} /></Col>
                         <Col span={12}><SerachForm search={this.search}/></Col>
                     </Row>
                     <Row>
                         <Col span={24}><TabForm reports={this.state.reports}/></Col>
                     </Row>
                </Card>
                 </div>
                {/* <Tap isAuthenticated={this.props.isAuthenticated} currentUser={this.props.currentUser}
                    userTasks={userTask} />  */}
            </div>
        );
    }
}
 export default Option3;
