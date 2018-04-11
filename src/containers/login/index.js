import React from 'react'
import {Button, Input, Form,Icon,message} from 'antd'
import styles from './index.css'
import logo from '../../images/logo.png'
import {loginIn,loginOut} from '../../actions/login'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router-dom'

const FormItem = Form.Item

//让组件关联state和action
@connect(
    state => state,
    dispatch => bindActionCreators({loginIn}, dispatch)
)
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginIn:""
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.login.loginIn.length>0 && nextProps.login.loginIn[0].success=="true"){
            this.setState({loginIn:true});
        }
    }
    //登录
    handleClick = (e) =>{
        this.props.form.validateFields((err,values)=>{
            if(err){
                console.log(values);
                return;
            }else{
                let params = {
                    url:"/login",
                    data:values,
                }
                this.props.loginIn(params);
            }
        })

    }
    render() {
        const {getFieldDecorator,getFieldsValue,setFieldsValue,validateFields} = this.props.form;
        if(this.state.loginIn){
            this.props.history.push("/home");
        }
        return (
            <div className={styles.login}>
                <div>
                    <img src={logo}/>
                </div>
                <div>
                    <Form>
                        <FormItem>
                            {getFieldDecorator('loginName',{
                                rules:[{
                                    required:true,
                                    message:'请输入用户名'
                                }],
                            })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名"/>)}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password',{
                                rules:[{
                                    required:true,
                                    message:'请输入密码'
                                }],
                            })(<Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="请输入密码"/>)}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleClick}>login</Button>
                        </FormItem>
                    </Form>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Form.create()(Login)