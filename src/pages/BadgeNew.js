import React, { Component } from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'


class BadgeNew extends Component {
    state = {
        form: {
            firstName:'',
            email: '',
            phone:'',
            rol: '',
            photo: ''
        },
    }

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() { 
        return ( 
            <div className='badgeNew'>
                <Navbar/>
                <BadgeForm 
                    onChange={this.handleChange}
                    formValues={this.state.form}/>
                <Badge
                    photo={this.state.form.photo}
                    firstName={this.state.form.firstName}
                    phone={this.state.form.phone}
                    email={this.state.form.email} 
                    rol={this.state.form.rol}
                />
            </div>
         );
    }
}
 
export default BadgeNew;