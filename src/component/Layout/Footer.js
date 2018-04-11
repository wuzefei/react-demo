import React from 'react'
import {Layout} from 'antd'
import styles from './index.less'

const { Footer } = Layout;

class FooterPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collapsed:false,
        }
    }
    render(){
        return(
            <Footer className={styles.footer}>
                this is footer
            </Footer>
        )
    }
}

export default FooterPanel;
