import React from 'react'
import {Menu, Icon} from 'antd'
import menus from '../../utils/menus'
import {Link} from 'react-router-dom';
import styles from './index.less'

const SubMenu = Menu.SubMenu;
class Menus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed:this.props.collapsed,
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({collapsed:nextProps.collapsed});
    }
    render() {
        let treeNodes;
        if (menus != undefined && menus.length > 0) {
            //遍历树
            const loop = (data) => data.map((item) => {
                if (item.children) {
                    return (
                        <SubMenu
                            key={item.id}
                            title={<span>
                              <Icon type="desktop"/>
                              <span>{item.name}
                            </span></span>}
                        >
                            {loop(item.children)}
                        </SubMenu>
                    );
                }
                return (
                    <Menu.Item key={item.router}>
                        <Link to={item.router}>
                            <Icon type="user" />
                            <span>{item.name}</span>
                        </Link>
                    </Menu.Item>
                )
            });
            treeNodes = loop(menus)
        }
        return (
            <Menu
                mode="inline"
                theme="dark"
                inlineIndent={20}
                inlineCollapsed={this.state.collapsed}
                className={styles.menu}
            >
                {treeNodes}
            </Menu>
        )
    }
}

export default Menus;
// inlineCollapsed={this.state.collapsed}
// style={{width: this.state.collapsed?'140px':'240px'}}