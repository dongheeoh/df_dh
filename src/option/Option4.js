import React, { Component } from 'react';
import Report from './Report';
class Option4 extends Component {

    render() {

        return (
            <div>
                <Report title={'업무보고현황'} buttonTitle={'결제'} status={'WAIT'} route={'report'}/>
            </div>
        );
    }
}
 export default Option4;