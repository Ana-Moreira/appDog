import React, { useState } from 'react';
import './styles.css';
import { HiEye, HiEyeOff } from "react-icons/hi"


function Cadastro() {
    const [email, setEmail] = useState("")
    const [Pass, setPass] = useState("")
    const [dono, setDono] = useState("")
   

    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }
    return (
        <div className="Cadastro">

            <div className="cadastro-right">
                <img
                    src="https://png.pngtree.com/template/20191017/ourlarge/pngtree-logo-illustration-dog-outline-pet-design-on-white-background-image_319750.jpg"
                    alt="Login" />
                <h1>Cadastre-se</h1>

                <div className="cadastro-InputEmail">

                    <input
                        type="text"
                        placeholder="Digite seu E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}


                    />
                </div>
                <div className="cadastro-InputDono">

                    <input
                        placeholder="Digite seu nome"
                        type="text"
                        value={dono}
                        onChange={e => setDono(e.target.value)}

                    />
                </div>
                
                
                <div className="cadastro-InputPass">

                    <input
                        type="text"
                        placeholder="Digite sua senha"
                        type={show ? "text" : "Pass"}
                        value={Pass}
                        onChange={e => setPass(e.target.value)}

                    />
                    <div className="login-eye">
                        {show ? (
                            <HiEye
                                size={20}
                                onClick={handleClick}
                            />
                        ) : (
                            <HiEyeOff
                                size={20}
                                onClick={handleClick}
                            />

                        )}

                    </div>
                </div>

                <button type="submit">
                   Enviar 
                </button>

            </div>
        </div>

    )
}

export default Cadastro;