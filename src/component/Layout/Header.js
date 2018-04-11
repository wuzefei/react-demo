import React from 'react'
import {Layout, Button, Icon} from 'antd'
import styles from './index.less'

const {Header} = Layout;

class header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: this.props.collapsed,
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({collapsed:nextProps.collapsed});
    }
    handleClick = () =>{
        let collapsed = this.state.collapsed;
        let changeCollapsed = !collapsed;
        this.props.changeCollapsedState(changeCollapsed);
    }
    render() {
        return (
            <Header className={styles.header}>
                <Button type="primary" onClick={this.handleClick} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                Welcome to my home!
            </Header>
        )
    }
}

export default header;
