import React, { Component } from 'react';
import TextEdit from './TextEdit';
import Option2Input from './Input';
import Uploader from './Uploader';
import {
  Button
  } from 'antd';


class Option2 extends Component {
    render() {
        return (
            <div className="Option2">
                <h1>보고서등록</h1>
                <Option2Input/>
                <TextEdit/>
                <Uploader/>
                <div className='submit'>
                <Button>등록하기</Button>
                </div>
            </div>
        );
    }
}
 export default Option2;