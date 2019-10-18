import React, { Component } from 'react';
import './register.container.scss';
import { Typography } from 'antd';
import imagen from '../../../../assets/images/register.jpg';
import { NavLink } from 'react-router-dom';
import  WrappedRegistrationForm  from './form/form';


const { Title } = Typography;


class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <>
                <section className='container-login'>
                    <div className='container-img'>
                        <img src={imagen} alt="Imagen de Login" />
                    </div>
                    <div className="container-form">
                        <div className="login">
                            <Title level={2} className="center">Registro :</Title>
                            <WrappedRegistrationForm />


                            <div className="center mt-2"><NavLink to="/login">Ya esta registrado ? Loguéese </NavLink></div>

                        </div>

                    </div>

                </section>

            </>
        )
    }

}

export {
    RegisterContainer
}