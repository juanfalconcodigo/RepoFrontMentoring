import React, { Component } from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Checkbox,
    Button,
    Select

} from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { requestCreateClient } from '../../../store/actions'

const { Option } = Select;

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            enviar: false,


            data: {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                is_superuser: 0

            }




        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeChecked = this.handleChangeChecked.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        console.log(name, value)
        if (name !== 'password-1') {
            this.setState({
                data: {
                    ...this.state.data,
                    [name]: value
                }
            })

        }

        /* console.log(this.state.data) */

    }
    handleChangeChecked(e) {
        const { name, checked } = e.target;
        console.log(name, checked);
        this.setState({
            ...this.state,
            enviar: checked
        });


    }

    handleChangeSelect = (value) => {
        console.log('is_superuser', `${value}`);
        this.setState({
            data: {
                ...this.state.data,
                is_superuser: value
            }
        });
        /* console.log(this.state.data) */
    }
    createUser() {
        const { dispatch } = this.props;
        dispatch(requestCreateClient(this.state.data));
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                /* this.createUser(); */
                const config = {
                    headers: {
                        'content-Type': 'application/json'
                    }
                }
                const body = JSON.stringify(this.state.data)

               

                axios.post(`http://127.0.0.1:8000/serviciosall/registrar/`, body,config)
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                    })
                console.log('Validaciones de antd: ', values);
                console.log('Valores a enviar', this.state.data);

                this.setState({
                    confirmDirty: false,
                    enviar: false,
                    data: {
                        username: '',
                        first_name: '',
                        last_name: '',
                        email: '',
                        password: '',
                        is_superuser: 0
                    }
                });
                this.props.form.resetFields();

            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password-1')) {
            callback('No coinciden ambas contraseñas!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['password'], { force: true });
        }
        callback();
    };




    render() {
        const { getFieldDecorator } = this.props.form;
        /* console.log(this.state) */




        return (
            <Form onSubmit={this.handleSubmit}>

                <Form.Item style={{ marginBottom: '15px' }}>
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'No es un Email válido!',
                            },
                            {
                                required: true,
                                message: 'Ingrese su Email!',
                            },
                        ],
                    })(<Input name="email" onChange={this.handleChange} /* size="large" */

                        prefix={<Icon type="contacts" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ingrese su Email" />)}
                </Form.Item>
                <Form.Item style={{ marginBottom: '15px' }}>
                    {getFieldDecorator('first_name', {
                        rules: [

                            {
                                required: true,
                                message: 'Ingrese su nombre!',
                            },
                        ],
                    })(<Input name="first_name" onChange={this.handleChange}/* size="large" */

                        prefix={<Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ingrese su nombre" />)}
                </Form.Item>
                <Form.Item style={{ marginBottom: '15px' }}>
                    {getFieldDecorator('last_name', {
                        rules: [

                            {
                                required: true,
                                message: 'Ingrese su apellido!',
                            },
                        ],
                    })(<Input name="last_name" onChange={this.handleChange}/* size="large" */

                        prefix={<Icon type="usergroup-add" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ingrese su apellido" />)}
                </Form.Item>
                <Form.Item style={{ marginBottom: '15px' }} hasFeedback>
                    {getFieldDecorator('password-1', {
                        rules: [
                            {
                                required: true,
                                message: 'Ingrese su contraseña!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                        ],
                    })(<Input.Password name="password-1" onChange={this.handleChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ingrese su contraseña" />)}
                </Form.Item>
                <Form.Item style={{ marginBottom: '15px' }} hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Ingrese su contraseña!',
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                        ],
                    })(<Input.Password name="password" onChange={this.handleChange} onBlur={this.handleConfirmBlur} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirme su contraseña" />)}
                </Form.Item>
                <Form.Item style={{ marginBottom: '15px' }}>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Ingrese su usuario!', whitespace: true }],
                    })(<Input placeholder="Ingrese nombre de usuario"
                        name="username" onChange={this.handleChange}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={
                            <Tooltip title="Este sera su nombre en la plataforma">
                                <Icon type="question-circle-o" style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        } />)}
                </Form.Item>
                <Form.Item /* label="Crear cuenta como :" */ style={{ marginBottom: '0' }}>
                    {/*  /*{ {getFieldDecorator('terms', {
                        valuePropName: 'checked',
                    })( */}
                    <Select /* defaultValue="0" */ placeholder="Seleccione tipo de cuenta" /* style={{ width: 120 }} */ onChange={this.handleChangeSelect}>

                        <Option value="0">Alumno</Option>
                        <Option value="1">Profesor</Option>

                    </Select>
                    {/* /* )} */}



                </Form.Item>





                <Form.Item style={{ marginBottom: '15px' }}>
                    {getFieldDecorator('terms', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox name="terms" onChange={this.handleChangeChecked}>
                            Acepto los <a href="">Términos</a>
                        </Checkbox>,
                    )}
                </Form.Item>

                <Form.Item >
                    <Button block type="primary" htmlType="submit" size="large" disabled={!this.state.enviar}>
                        Registrar
            </Button>
                </Form.Item>
            </Form>
        );
    }
}



const WrappedRegistrationForm = Form.create({ name: 'registro' })(RegistrationForm);

export default connect()(WrappedRegistrationForm);
