import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../store/actions';
/* import { setLogin } from '../../../store/actions'; */
import { Redirect } from 'react-router-dom';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            remember: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChangeInput(e) {
        const { name, value } = e.target;
        console.log(name, value);
        this.setState({
            [name]: value
        })
    }
    handleChecked(e) {
        const { name, checked } = e.target;
        console.log(name, checked);
        this.setState({
            [name]: checked
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log('Antes de ENVIAR DATOS validos en el  submit del login ', this.props)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Valores del state :', this.state);
                console.log('Valores recibidos del form: ', values);
                /* this.props.history.push('home'); */
                /* sessionStorage.setItem('token', 123456) */
                this.props.login(this.state.user, this.state.password)
                
            }
        });
    }
    componentDidMount() {
        /* sessionStorage.clear(); */
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        //esto aplicar cuando tengamos dos diferentes tipos de roles
        /* if (this.props.isAuthenticated && this.props.role == 2) {
            return <Redirect to="/dashboard/driver" />;
        } else if (this.props.isAuthenticated && this.props.role == 1) {
            return <Redirect to="/dashboard/user" />;
        } */
        if (this.props.isAuthenticated) {
            return <Redirect to="/home" />;
        }

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('user', {
                        rules: [{ required: true, message: 'Porfavor verifique el usuario!!' }],
                    })(
                        <Input size="large"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Ingrese su usuario" name="user" onChange={this.handleChangeInput}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Porfavor verifique su contraseña!!' }],
                    })(
                        <Input.Password size="large"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Ingrese su contraseña" onChange={this.handleChangeInput} name="password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: this.state.remember,
                    })(<Checkbox name="remember" onChange={this.handleChecked}>Recuérdame</Checkbox>)}
                    <a className="login-form-forgot" style={{ float: 'right' }} href="">
                        Se te olvidó tu contraseña
          </a>
                    <Button block type="primary" htmlType="submit" size="large">
                        Login
          </Button>

                </Form.Item>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated
});

/* const mapDispatchToProps = { setLogin } */
const mapDispatchToProps = { login }

const WrappedLoginForm = Form.create({ name: 'login_form' })(LoginForm);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedLoginForm));
