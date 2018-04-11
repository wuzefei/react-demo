import React from 'react'
import { Layout } from 'antd';
import Menus from './Menus'
import styles from './index.less'

const { Sider } = Layout;

class SilderPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collapsed:this.props.collapsed,
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({collapsed:nextProps.collapsed});
    }
    render(){
        const menuModal = {
            history:this.props.history,
            collapsed:this.state.collapsed
        }
        return(
            <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                className={this.state.collapsed?styles.menu_contracts:styles.menu}
            >
                <Menus {...menuModal}/>
            </Sider>
        )
    }
}

export default SilderPanel;
