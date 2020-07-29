import React, { Component } from "react";
import { Form, Input, Button ,message, Header} from 'antd';
import 'antd/dist/antd.css';
import * as userActions from "../redux/actions/user-actions"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const layout = { labelCol: {span: 24},wrapperCol: { span: 24}};
const bottombuttons={width:"100%", background:"#000", color:"#fff", height:"45px"};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
    viewloginForm:true
    }
    this.submit= this.submit.bind(this)
    this.gosignupForm= this.gosignupForm.bind(this)
  }

 async submit(values){
    await this.props.authenticate_USER(values).then(resp=>{
      console.log(resp);
      if (resp.message = 'Login Successfully'){
        this.props.history.push('/userlist');
        message.success('Loginned Successfully')
    }else {
        message.error('Please enter valid username or password')
    }
    }
    )
  }
  onFinishFailed = (errorInfo) => {};
  gosignupForm = () => {this.setState({viewloginForm:false})}
  goLoginForm = () => {this.setState({viewloginForm:true})}
  render() {
    return (
        <div  style={{marginLeft:"20%", marginRight:"20%"}}>
          <h1>Login </h1>
  <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={this.submit}
      onFinishFailed={this.onFinishFailed}
 
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input style={{ height:"40px"}} placeholder="Please enter Email ID"/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password style={{ height:"40px"}} placeholder="Please enter password"/>

      </Form.Item>
      <Form.Item><Button style={bottombuttons} htmlType="submit">Login</Button></Form.Item>
     </Form>
    </div>
      
    );
  }
}
Login.propTypes = {
// saveusermessage:Proptypes.string,
// loginstatus:Proptypes.bool
};
function mapStateToProps(state) {
    return {
      ...state.user
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...userActions }, dispatch);
  }
  export default withRouter(connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (Login));

  