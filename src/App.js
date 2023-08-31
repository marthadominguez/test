import React, { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle'
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import SolucionCardMobile from "./components/SolucionCardMobile"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import data from './content/data';

const App = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
      <>
          <div className="soluciones__container soluciones--desktop">
              <div className="soluciones__tabs">
                  <ul className="lista--izq">
                      {data.map((element, index) => {
                          return (<li className={data.indexOf(element) === activeTab ? "active-tab" : ""} onMouseEnter={() => { setActiveTab(index) }} key={index}>{element.titulo}</li>)
                      })}
                  </ul>
                  <ul className="puntos__lista">
                      <li>
                          <div className="linea"></div><CircleIcon className={activeTab === 0 ? "active circle-icon" : "circle-icon"}></CircleIcon>
                      </li>
                      <li>
                          <CircleIcon className={activeTab === 1 ? "active circle-icon" : "circle-icon"}></CircleIcon>
                      </li>
                      <li>
                          <CircleIcon className={activeTab === 2 ? "active circle-icon" : "circle-icon"}></CircleIcon>
                      </li>
                      <li>
                          <CircleIcon className={activeTab === 3 ? "active circle-icon" : "circle-icon"}></CircleIcon>
                      </li>
                      <li>
                          <CircleIcon className={activeTab === 4 ? "active circle-icon" : "circle-icon"}></CircleIcon>
                      </li>
                      <li>
                          <CircleIcon className={activeTab === 5 ? "active circle-icon" : "circle-icon"}></CircleIcon>
                      </li>
                  </ul>
                  <ul className="flechas__lista">
                      <li>
                          <EastRoundedIcon className={activeTab === 0 ? "active arrow-icon" : "arrow-icon"}></EastRoundedIcon>
                      </li>
                      <li>
                          <EastRoundedIcon className={activeTab === 1 ? "active arrow-icon" : "arrow-icon"}></EastRoundedIcon>
                      </li>
                      <li>
                          <EastRoundedIcon className={activeTab === 2 ? "active arrow-icon" : "arrow-icon"}></EastRoundedIcon>
                      </li>
                      <li>
                          <EastRoundedIcon className={activeTab === 3 ? "active arrow-icon" : "arrow-icon"}></EastRoundedIcon>
                      </li>
                      <li>
                          <EastRoundedIcon className={activeTab === 4 ? "active arrow-icon" : "arrow-icon"}></EastRoundedIcon>
                      </li>
                  </ul>
              </div>
              <div className="solucion__item">
                  <div className="solucion__item-heading">
                      <div>
                          {/* Accede a las propiedades de la solución seleccionada */}
                          <h4 className="solucion__titulo">{data[activeTab].subtitulo}</h4>
                          <p>{data[activeTab].descripcion}</p>
                      </div>
                      <img src={data[activeTab].image} className="solucion__img-container" alt="Imagen decorativa" />
                  </div>
                  <span className="title-tag">{data[activeTab].span}</span>
                  <ul className="soluciones__lista--detallada">
                      {data[activeTab].servicios.map((element, index) => {
                          return (
                              <li key={index}>
                                  <img src={element.serviciosImagen} className="solution__img" alt="Imagen decorativa" />
                                  <p>
                                      <span className="bold__solucion">{element.textoNegrita}</span>
                                      {element.textoCompleto}
                                  </p>
                              </li>
                          )
                      })}
                  </ul>
                  <span className="leer-mas">
                      <a href={data[activeTab].link}>Leer más</a>
                      <ArrowForwardIosIcon className="arrow" />
                  </span>
              </div>
          </div>
          <div className="soluciones__accordeon">

              {data.map((element, index) => {
                  const { titulo, subtitulo, descripcion, span, servicios, image, link } = element;
                  return (
                  <SolucionCardMobile key={index} titulo={titulo} subtitulo={subtitulo} descripcion={descripcion} span={span} servicios={servicios} imagen={image} link={link}></SolucionCardMobile>
                  )
              })}
          </div>
      </>)
}

export default App