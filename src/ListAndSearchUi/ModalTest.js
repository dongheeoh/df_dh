
import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { Row, Col, Slider,Input,Card  } from 'antd';
const { TextArea } = Input;
class TabForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.data.description,
            title:this.props.data.title,
            visible: false,
            content:this.props.data.content,
            description:this.props.data.description
        }
    }


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
            <div>

                <Button onClick={this.showModal}>
                   보고서 보기
                </Button>
                <Modal
                    title={'보고서 보기'}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={1100}
                >
                     <Card
                        title={this.state.title}
                    >
                     <Row type="flex" justify="center">
                     <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
                    </Row>
                    </Card>
                    <p></p>
                    <Card
                        title="반려사유"
                    >
                        {this.state.description}
                    </Card>
                </Modal>
            </div>);
    }
}
export default TabForm;