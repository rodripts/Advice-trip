import React from 'react'
import './Advices.css'
import dadoImg from './img/icons8-dado-30.png'

const Advices = ({
    triste,
    enojado,
    enamorado,
    confundido,
    feliz,
    onTriste,
    onEnojado,
    onEnamorado,
    onConfundido,
    onFeliz,
}) => {
    
    return (
        <main className="card">
            <h1 id="parrafo-titulo"/> 
            <p id="parrafo"></p>
            <button
            onClick={() =>{
                if(!!triste) {
                    onTriste()
                } else if(!!enojado) {
                    onEnojado()
                } else if(!!enamorado){
                    onEnamorado()
                } else if(!!confundido){
                    onConfundido()
                } else if(!!feliz){
                    onFeliz()
                }
            }}
            >
                <img src={dadoImg}/>
            </button>
        </main>
    )
}

export {Advices}
