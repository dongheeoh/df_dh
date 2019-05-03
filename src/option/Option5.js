import React, { Component } from 'react';
import Report from './Report';
class Option5 extends Component {

    render() {

        return (
            <div>
               <Report title={'결제관리'} buttonTitle={'수정'} status={'PROGRESS'} route={'report'}/>
            </div>
        );
    }
}
 export default Option5;