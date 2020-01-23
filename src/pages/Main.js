import React from 'react';
import './style.css';
import Card from '../components/Card/Card';
import Photo from '../assets/women-s-white-and-black-button-up-collared-shirt-774909.jpg';

export default function Main() {

  return (
    <div className="container bg-azul-1">
      <nav id="nav" className="bg-azul-1 font-white">
        <h2>DRA<span>Sorriso</span></h2>
      </nav>
      <main>
        <div className="first-screen">
          <h3>Seu sorriso é nossa<br/>maior prioridade.</h3>
          <span>“Nada que você veste é mais importante que o seu sorriso.”</span>
          <span id="author">- Connie Stevens</span>
        </div>
        <button className="btn-seeMore bg-white">Ver mais</button>
        <div className="division">
          <hr/>
          <h1>Sobre nós</h1>
        </div>
        <Card
          iconClass="fas fa-user-md" 
          title="Experiência" 
          content="Clinica fundada em 2011 no Tatuapé. Há mais de 5 anos atendendo com muita qualidade e experiência no mercado."
        />
        <Card
          iconClass="fas fa-map-marker-alt" 
          title="Localização" 
          content="Contamos com duas unidades em São Paulo com excelentes equipamentos para melhor atendê-los"
        />
        <Card
          iconClass="fab fa-accessible-icon" 
          title="Acessibilidade" 
          content="Atendimento especializado para pacientes com necessidades especiais"
        />
        {/* <Card
          iconClass="fas fa-user-md" 
          title="Experiência" 
          content="Clinica fundada em 2011 no Tatuapé. Há mais de 5 anos atendendo com muita qualidade e experiência no mercado."
        /> */}
        <div className="team">
          <h3>Conheça a equipe</h3>
          <span>Equipe de profissionais capacitados a fazer o melhor atendimento.</span>
          <div className="cristiane">
            <img src={Photo} alt="Foto"/>
            <span>Cristiane Portela</span>
            <p>Gerente/Dentista</p>
          </div>
        </div>
        <div className="services">
          <h3>Nossos Serviços</h3>
          <span>Temos diversas opções de tratamentos.</span>
          <ul>
            <li><span className="far fa-check-circle"></span><p>Clinica geral</p></li>
            <li><span className="far fa-check-circle"></span><p>Implantes</p></li>
            <li><span className="far fa-check-circle"></span><p>Tratamento facial</p></li>
            <li><span className="far fa-check-circle"></span><p>Odontopediatria</p></li>
            <li><span className="far fa-check-circle"></span><p>Próteses</p></li>
            <li><span className="far fa-check-circle"></span><p>Ortodontia</p></li>
            <li><span className="far fa-check-circle"></span><p>Endodontia</p></li>
          </ul>
        </div>
        <div className="rate">
          <ul>
            <li>
        
            </li>
            <li>

            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}