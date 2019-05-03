import React, { Component } from 'react'
import logo from '../img/logo.png'
import '../styles/BadgeForm.css'
import firebase from 'firebase'

class BadgeForm extends Component {
    // state = {}

    handleChange = e => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value
        // })

        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleClick = e => {
        console.log('click al boton')
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('prevenciones bergas');
        console.log(this.state);
    }

    mostrarMetodo() {
        var element = document.getElementById("myDIV");
        element.classList.remove("mystyle");
      }

    render() {
        return (
            <div className="masterContainer">
                <div className="badgeForm">
                    <section className="contenedorLogoFrom">
                        <img src={logo} alt="" />
                    </section>
                    <section className="borderCard">
                        <h1>Registro</h1>
                        <h2>Es completamente gratis</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label >Name:</label><br />
                                <input
                                    placeholder="Your name"
                                    name="firstName"
                                    onChange={this.props.onChange}
                                    type="text"
                                    value={this.props.formValues.firstName} />
                            </div>
                            <div>
                                <label>Email:</label><br />
                                <input
                                    placeholder="Your Email"
                                    name="email"
                                    onChange={this.props.onChange}
                                    type="email"
                                    value={this.props.formValues.email} />
                            </div>
                            <div>
                                <label>Phone: <small>(55-1234-5678)</small> </label><br />
                                <input
                                    placeholder="Your phone number"
                                    name="phone"
                                    onChange={this.props.onChange}
                                    type="tel"
                                    value={this.props.formValues.phone}
                                    pattern="[5]{2}[0-9]{4}[0-9]{4}" />
                            </div>
                            <div>
                                <label>Rol:</label><br />
                                <select name="rol" onChange={this.props.onChange} id="rol" value={this.props.formValues.rol}>
                                    <option value="ninguno">Ninguno</option>
                                    <option onclick="mostrarMetodo()" value="comprador">Comprador</option>
                                    <option value="vendedor">Vendedor</option>
                                    <option value="cobrador">Cobrador</option>
                                </select>
                            </div>
                            <div className="metodoDePago"> 
                                <label>Método de pago:</label><br />
                                <select name="metodoDePago" onChange={this.props.onChange} id="metodoDepago" value={this.props.formValues.metodoDePago}>
                                    <option value="ninguno">Ninguno</option>
                                    <option value="tarjeta">Tarjeta</option>
                                    <option value="efectivo">Efectivo</option>
                                </select>
                            </div>
                            <div className="numeroDeMesa">
                                <label>Número de mesa:</label><br />
                                <select name="numeroDeMesa" onChange={this.props.onChange} id="numeroDeMesa" value={this.props.formValues.numeroDeMesa}>
                                    <option value="ninguno">Ninguno</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="reference">
                                <label>Referencia:</label><br />
                                <input
                                    placeholder="Your reference number"
                                    name="reference"
                                    onChange={this.props.onChange}
                                    type="text"
                                    value={this.props.formValues.reference} />
                            </div>
                            <div className="comite">
                                <label>Comité:</label><br />
                                <select name="comite" onChange={this.props.onChange} id="comite" value={this.props.formValues.comite}>
                                    <option value="ninguno">Ninguno</option>
                                    <option value="comiteXido">Comité Xido</option>
                                    <option value="comiteCool">Comité Cool</option>
                                </select>
                            </div>
                            <div className="numeroCaja">
                                <label>Número de caja:</label><br />
                                <select name="numeroCaja" onChange={this.props.onChange} id="numeroCaja" value={this.props.formValues.numeroCaja}>
                                    <option value="ninguno">Ninguno</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div>
                                <label>Password:</label><br/>
                                <input 
                                    type="password"
                                    placeholder="Create Password"
                                    name="password"
                                    // onChange={this.props.onChange}
                                />
                            </div>
                            <div>
                                <label>Profile Photo:</label>
                                <input
                                    placeholder="Upload a profile photo"
                                    name="photo"
                                    onChange={this.props.onChange}
                                    type="file"
                                    accept="image/*"
                                    value={this.props.formValues.photo} />
                            </div>
                            <button onClick={this.handleClick}>Crear Registro</button>
                        </form>
                        {/* <section className="tyc">
                            <input type="checkbox" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptas tenetur.</p>
                        </section> */}
                    </section>
                </div>
            </div>

        );
    }
}

export default BadgeForm;
