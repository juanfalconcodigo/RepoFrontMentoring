import React, { Component } from 'react';
import {  Button, Typography } from 'antd';
import './auth.container.scss';
import imagen from '../../../../assets/images/coworking.jpg';
import WrappedLoginForm from './form/form';
import {NavLink} from 'react-router-dom';

const ButtonGroup = Button.Group;
const { Title } = Typography;


class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            remember: false
        };
        /* this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
 */
    }
    /* handleChange(e) {
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
        console.log(this.state);
        console.log(this.props.history.push('home'));

    } */
    render() {
       
        return (

            <>

                <section className='container-login'>
                    <div className='container-img'>
                        <img src={imagen} alt="Imagen de Login" />
                    </div>
                    <div className="container-form">
                        <div className="login">
                            <Title level={2} className="center">Iniciar sesión :</Title>
                            
                            <WrappedLoginForm/>
                            {/* <div className="social">
                                <ButtonGroup >
                                    <Button type="primary" icon="facebook" size="large" />
                                    <Button type="primary" icon="twitter" size="large" />
                                    <Button type="primary" icon="google" size="large" />
                                </ButtonGroup>

                            </div> */}
                            <div className="center mt-2"><NavLink to="/register">No esta registrado ? Regístrese</NavLink></div>

                        </div>

                    </div>

                </section>
               


            </>
        )
    }
}

export {
    LoginContainer
}