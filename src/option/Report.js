import React, { Component } from 'react';
import Option4table from './Option4table';
import {
    Input
 } from 'antd';
 import { getAllReport, getAllTask } from '../util/APIUtils';
import Option4DatePick from './Option4DatePicker';
import Option4Search from './Option4Search';
import Option4Input from './Option4Input';
import Option4modal from './Option4modal';
import LoadingIndicator from '../common/LoadingIndicator';
import ServerError from '../common/ServerError';
import NotFound from '../common/NotFound';
 const InputGroup = Input.Group;

class Report extends Component {
    constructor(props) {
        super(props);
        var d = new Date();
        this.state = {
        buttonTitle: this.props.buttonTitle,
        value:{status:this.props.status},
        title:this.props.title,
        route:this.props.route,
        datas:null
        }
        this.state.value.search='';
        this.state.value.from=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        this.state.value.to=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        this.load = this.load.bind(this);
    }
    search= (data) => {
        
        this.state.value.search=data;
        this.load();
    }
    dateSearch= (dateSearch) => {

         
        this.state.value.from=dateSearch[0];
        this.state.value.to=dateSearch[1];
        this.load();
    }
    load() {
        this.setState({
            isLoading: true,
        });
        if(this.state.route == 'report'){
        getAllReport(this.state.value)
        .then(response => {
            this.setState({
                datas: response,
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
    }else if(this.state.route == 'task'){

        //여기부터
        //getAllTask구현
        //column과 data 수정
        getAllTask(this.state.value)
        .then(response => {
            this.setState({
                datas: response,
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
      }
      

      componentWillMount() {
       this.load();
      }


    render() {
        if(this.state.isLoading) {
            return <LoadingIndicator />;
          }
          
          if(this.state.notFound) {
            return <NotFound />;
          }
          
          if(this.state.serverError) {
            return <ServerError />;
          }

        return (
            <div className="Option4">
                <h1>{this.props.title}</h1>
                <Option4DatePick
                to={this.state.value.to} from={this.state.value.from}
                dateSearch={this.dateSearch}/>
                
                <div style={{display:"flex", flexDirection: "row",marginTop:"10px",marginBottom:"10px"}}>
                <Option4Input/>
                <Option4Search 
                searchValue={this.state.value.search}
                search={this.search}/>
                </div>

                <Option4table 
                buttonTitle={this.state.buttonTitle} data={this.state.datas}/>
                </div>
        );
    }
}
 export default Report;