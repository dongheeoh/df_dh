import React, { Component } from 'react';
import TextEdit from './TextEdit';
import Option2Input from './Input';
import {Card} from 'antd';
import './edit.css'
class Option2 extends Component {
    render() {
        return (
                <Card title='보고서등록'>
                <Option2Input/>
                <div className='edit'>
                <TextEdit router={'report'}/>
                </div>
                </Card>
        );
    }
}
 export default Option2;