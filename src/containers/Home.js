import React from 'react'
import {Layout} from 'antd'
import {Layouts} from '../component'

const {styles, Header, Silder, Content, Footer} = Layouts;
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
        this.changeCollapsedState = this.changeCollapsedState.bind(this);
    };
    changeCollapsedState = (item) =>{
        this.setState({collapsed:item});
    }

    render() {
        //左侧menu
        const silderModal = {
            history: this.props.history,
            collapsed: this.state.collapsed
        }
        //内容栏
        const contentModal = {
            router:this.props.children
        }

        return (
            <Layout>
                <Header
                    collapsed={this.state.collapsed}
                    changeCollapsedState={this.changeCollapsedState.bind(this)}
                />
                <div className={styles.main}>
                    <div className={this.state.collapsed?styles.menu_contracts:styles.menu}>
                        <Silder {...silderModal} r/>
                    </div>
                    <div className={styles.content}>
                        <Content {...contentModal}/>
                    </div>
                </div>
                <Footer/>
            </Layout>
        )
    }
}

export default Home