import React, { Component } from 'react';
import './home.container.scss';
import { connect } from 'react-redux';
import { getOrdersAll } from '../../store/actions';
import { Button, List, Row, Col, Spin } from 'antd';

import { logout } from '../../../auth/store/actions';
/* import axios from 'axios'; */
import { CardComponent, DrawerComponent } from '../../../../components';
const dataa = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    }
];
class HomeContainerLogic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
        this.handlelLogoutSesion = this.handlelLogoutSesion.bind(this);

    }

    componentDidMount() {
        console.log(this.props);
        this.props.getOrdersAll();
        console.log(this.props.data);

    }
    componentWillReceiveProps(nextProps) {
        this.setState({

            data: nextProps.data
        })
        console.log('nextProps', nextProps.data);
    }
    handlelLogoutSesion() {
        this.props.logout(this.props.token);




        /* axios.get('http://127.0.0.1:8000/serviciosall/logout/', { headers: { "Authorization": `token ${this.props.token}` } })
            .then(res => {
                console.log('Cerrando Cesion  e eliminando token');
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error)
            }); */
        console.log('Cerrando Cesion  e eliminando token');
    }



    render() {
        return (
            <>
                Soy el home
                <Button type="danger" onClick={this.handlelLogoutSesion}>Salir</Button>


                <div className="container">
                    <section className='class-container'>

                        {this.state.data.length > 0 ?

                            this.state.data.map((elemento, indice) => {
                                return (
                                    <Col key={indice} style={{ margin: 'auto', marginBottom: 10 }}>

                                        <CardComponent data={elemento} />

                                    </Col>
                                )

                            })

                            :
                            <div style={{ marginTop: 80 }}>
                                <Spin size='large' />
                            </div>}
                       


                    </section>

                    {/* <CardComponent /> */}
                </div>
                {/* <DrawerComponent data={this.state.data} />
 */}
            </>
        )
    }
}

const mapStateToProps = state => ({
    data: state.Home.data,
    token: state.Auth.token
});

const mapDispatchToProps = {
    getOrdersAll,
    logout
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainerLogic)


export {
    HomeContainer
}