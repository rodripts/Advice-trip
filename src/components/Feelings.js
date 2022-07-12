import React from 'react'
import './Feelings.css'

import tristeImg from './img/triste.png'
import enojadoImg from './img/enojado.png'
import enamoradoImg from './img/enamorado.png'
import confundidoImg from './img/confundido.png'
import felizImg from './img/feliz.png'

const Feelings = ({
    triste,
    enojado,
    enamorado,
    confundido,
    feliz,
    setTriste,
    setEnojado,
    setEnamorado,
    setConfundido,
    setFeliz,
}) => {
    return (
        <section className="hero">
            <h1>¿Como te sientes?</h1>
            <div className="hero__emojis">
                <div>
                   <button 
                   onClick={ () => {
                       setTriste(true)
                       setEnojado(false)
                       setEnamorado(false)
                       setConfundido(false)
                       setFeliz(false)
                    }
                }
                   className={`hero__emojis-buttons ${triste && "hero__emojis-buttons--active"}`}>
                        <img src={tristeImg} />
                    </button>
                    <p>Triste</p>
                </div>
                <div>
                   <button
                    onClick={ () => {
                        setTriste(false)
                        setEnojado(true)
                        setEnamorado(false)
                        setConfundido(false)
                        setFeliz(false)
                     }
                 }
                   className={`hero__emojis-buttons ${enojado && "hero__emojis-buttons--active"}`}>
                        <img src={enojadoImg} />
                    </button>
                    <p>Enojado</p>
                </div>
                <div>
                   <button 
                   onClick={ () => {
                    setTriste(false)
                    setEnojado(false)
                    setEnamorado(false)
                    setConfundido(true)
                    setFeliz(false)
                 }
             }
                   className={`hero__emojis-buttons ${confundido && "hero__emojis-buttons--active"}`}>
                        <img src={confundidoImg}/>
                    </button>
                    <p>Confundido</p>
                </div>
                <div>
                   <button 
                   onClick={ () => {
                    setTriste(false)
                    setEnojado(false)
                    setEnamorado(false)
                    setConfundido(false)
                    setFeliz(true)
                 }
                }
                   className={`hero__emojis-buttons ${feliz && "hero__emojis-buttons--active"}`}>
                        <img src={felizImg}/>
                    </button>
                    <p>Feliz</p>
                </div>
                <div>
                   <button
                   onClick={ () => {
                    setTriste(false)
                    setEnojado(false)
                    setEnamorado(true)
                    setConfundido(false)
                    setFeliz(false)
                    }  
                    }      
                    className={`hero__emojis-buttons ${enamorado && "hero__emojis-buttons--active"}`}>
                        <img src={enamoradoImg}/>
                    </button>
                    <p>Enamorado</p>
                </div>
            </div>
        </section>
    )
}

export {Feelings}
