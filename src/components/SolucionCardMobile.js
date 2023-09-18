import React, { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const SolucionCardMobile = ({ key, titulo, subtitulo, descripcion, span, servicios, imagen, link }) => {
    const [activeIndex, setActiveIndex] = useState(-1)
    const isActive = key === activeIndex
    const toggleAccordion = (key) => { setActiveIndex(activeIndex === key ? -1 : key) }

    return (
        <div className="solucion__card--mobile">
            <div className="card__header"
                onClick={() => toggleAccordion(key)}
            >
                <div className='card__header--top'>
                    <h2>{titulo}</h2>
                    {isActive ? <KeyboardArrowUpRoundedIcon className="accordeon__icon" /> : <KeyboardArrowDownRoundedIcon className="accordeon__icon" />}
                </div>
                <span>{subtitulo}</span>
            </div>
            <div className={`card__content ${isActive ? "desplegable" : ""}`}>
                <p>{descripcion}</p>
                <img src={imagen} className="solucion__img" alt="" />
                <span className="title-tag">{span}</span>
                <ul className="soluciones__lista--detallada">
                    {servicios.map((element, index) => {
                        const {textoNegrita, textoCompleto, serviciosImagen} = element
                        return (
                            <li key={index}>
                                <img src={serviciosImagen} className="solution__img" alt=""/>
                                <p>
                                    <span className="bold__solucion">{textoNegrita}</span>
                                    {textoCompleto}
                                </p>
                            </li>)
                    })}
                </ul>
                <span className="leer-mas">
                    <a href={link}>Leer más</a>
                    <ArrowForwardIosIcon className="arrow" />
                </span>
            </div>
        </div>
    );
};

export default SolucionCardMobile