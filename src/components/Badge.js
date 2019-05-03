import React, { Component } from 'react'
import logoBadge from '../img/logoBadge.png'
import avatar from '../img/avatar.png'
import md5 from 'md5'
import qr from '../img/qr.png'
import '../styles/Badge.css'

class Badge extends Component {
    render() {
        const {
            firstName,
            rol,
            phone,
            photo,
            email
        } = this.props;
        return (
            <div className="masterBadge">
                <div className="Badge">
                    <header>
                        <img src={logoBadge} alt="imagen header" />
                    </header>
                    <section className="seccionAvatar">
                        <img src={`https://www.gravatar.com/avatar/${md5(this.props.email)}?s=240`} alt="avatar" />
                    </section>
                    <section className="datos">
                        <h1> {firstName}</h1>
                        <p> {email} </p>
                        <p> {phone} </p>
                        <p> {rol} </p>
                    </section>
                    <section className="containercode">
                        <img src={qr} alt="qr code image"/>
                        #BazarMonteverde
                    </section>
                </div>
            </div>
        )
    }
}

export default Badge;