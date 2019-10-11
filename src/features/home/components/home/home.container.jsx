import React, { Component } from 'react';
import './home.container.scss';
import { connect } from 'react-redux';
import { getOrdersAll } from '../../store/actions';

class HomeContainerLogic extends Component {

    componentDidMount() {
        console.log(this.props);
        this.props.getOrdersAll();
        console.log(this.props.data);

    }
    componentWillReceiveProps(nextProps) {
        console.log('nextProps',nextProps.data);
    }

    render() {
        return (
            <>
                Soy el home

            </>
        )
    }
}

const mapStateToProps = state => ({
    data: state.Home.data
});

const mapDispatchToProps = {
    getOrdersAll
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainerLogic)


export {
    HomeContainer
}