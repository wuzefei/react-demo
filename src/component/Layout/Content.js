import React from 'react'
import {Layout} from 'antd'

const { Content } = Layout;

class ContentPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collapsed:false,
        }
    }
    render(){
        return(
            <Content>
                {this.props.router}
            </Content>
        )
    }
}

export default ContentPanel;
