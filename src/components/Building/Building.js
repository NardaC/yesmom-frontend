import React from 'react'
import "./building.css"
import imgFoto from "./../../assets/construccion/proximamente.png"
const Building = () => {
    return (
        <div className="box-building">
            <div className="section-building">
                <img src={imgFoto} className="img-foto" alt="mamá con su bebé"/>
                <div className="box-text-building">
                    <h5 className="text-building">En YesMom te queremos ofrecer un mejor servicio web</h5>
                    <button className="btn-building">PÁGINA DE INICIO</button>
                </div>
            </div>
        </div>
    )
}

export default Building
