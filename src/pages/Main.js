import React, { useEffect } from 'react';

import Card from '../components/Card/Card';

import Photo from '../assets/women-s-white-and-black-button-up-collared-shirt-774909.jpg';
import './style.css';

export default function Main() {
  function rateSlide() {
    let r1 = document.querySelector('#rate-2');
    let s1 = document.querySelector('#first');
    let s2 = document.querySelector('#second');

    if(r1.className === 'rate-box mgl') {
      r1.classList.remove('mgl');
      s2.className = 'slide-gray';
      s1.className = 'slide-white';
    } else {
      r1.classList.add('mgl');
      s2.className = 'slide-white';
      s1.className = 'slide-gray'
    }

    setTimeout(rateSlide, 6000);

  }
  // function hideWindow() {
  //   let win = document.querySelector('.information');

  //   win.classList.add('hide')
  // }
  useEffect(rateSlide)
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
          <a className="btn-seeMore bg-white" href="mailto:?cristiane@drasorriso.com.br">Enviar email</a> 
        </div>
        <div className="about">
          <h3>Sobre nós</h3>
          <div className="cards">
            <Card
              iconClass="fas fa-user-md" 
              title="Experiência" 
              content="Clínica fundada em 2011 no Tatuapé. Há mais de 5 anos atendendo com muita qualidade e experiência no mercado."
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
          </div>
          {/* <Card
            iconClass="fas fa-user-md" 
            title="Experiência" 
            content="Clinica fundada em 2011 no Tatuapé. Há mais de 5 anos atendendo com muita qualidade e experiência no mercado."
          /> */}
        </div>
        <hr/>
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
        <div className="rate-container">
          <div className="header-no-padding">
            <h3>O que nossos clientes dizem</h3>
            <span>Veja os relatos dos nossos clientes sobre o atendimento</span>
            <div className="slides">
              <span id="first" className="slide-gray"></span>
              <span id="second" className="slide-white"></span>
            </div>
          </div>
          <div className="rate-card">
            <div className="rate-box" id="rate-1">
              <p className="content">
                O atendimento profissional e pessoal da clínica é sempre excelente. Ela é a melhor dentista que eu já tive. Recomendo!
              </p>
              <span id="name">- Gabriel Hernandes</span>
            </div>
            <div className="rate-box" id="rate-2">
              <p className="content">
              Sou cliente e amigo da Dra. Sorriso há algum tempo. Assim sendo, tenho estado muito satisfeito com a Dr. Sorriso e com a equipe da Clínica Odontológica, em razão de sua reconhecida competência técnico-profissional e pelo tratamento ético e humano que dedica aos seus pacientes, indistintamente.
              </p>
              <span id="name">- Anderson Correa</span>
            </div>
          </div>
        </div>
        <div className="contact">
          <h3>Contato</h3>
          <span>Informações de contato e localização</span>
          <div className="unity">
            <div className="info">
              <div className="map-view">
                <iframe width="100%" title="map" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Rua%20Padre%20Estevao%20Pernet%2C%20160+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
              </div>
              <h4>Unidade I - Metrô Tatuapé</h4>
              <span>Clínica Dra. Sorriso</span>
              <span>Às Quartas, Sextas e Sábados</span>
              <span>Rua Padre Estevao Pernet, 160</span>  
              <span>03315-000 São Paulo</span>
              <h4>Informações de Contato:</h4>
              <span><i></i>(11) 3782-4233</span>
              <span><i></i><a href="mailto:?cristiane@drasorriso.com.br">cristiane@drasorriso.com.br</a></span>
              <span><i></i>Rua Padre Estevão Pernet, 160 - Tatuapé - São Paulo-SP</span>
              <hr/>
            </div>
            <div className="info">
              <div className="map-view">
                <iframe title="map" width="100%" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Rua%20Tomas%20Velasco%2C%2060%20-%20Jd.%20das%20Esmeraldas%20-%20S%C3%A3o%20Paulo%20-%20SP+()&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
              </div>
              <h4>Unidade II - Butantã</h4>
              <span>Clínica Dra. Sorriso</span>
              <span>Às Terças e Quintas</span>
              <span>Rua Tomas Velasco, 60</span>  
              <span>05549-170 São Paulo</span>
              <h4>Informações de Contato:</h4>
              <span><i></i>(11) 3782-4233</span>
              <span><i></i><a href="mailto:?cristiane@drasorriso.com.br">cristiane@drasorriso.com.br</a></span>
              <span><i></i>Rua Tomas Velasco, 60 - Jd. das Esmeraldas - São Paulo - SP</span>
            </div>
          </div>
        </div>
        <footer>
          <span>&copy;RCAK - Informática</span>
        </footer>
      </main>
      {/* <div className="information">
        <span onClick={hideWindow}><i className="fas fa-times"></i></span>
        <div className="title">
          <h3>Atendimento</h3>
        </div>
        <div className="content-information">
          <h4>Butantã</h4>
          <span>Terças e Quintas</span>
          <h4>Tatuapé</h4>
          <span>Quartas, Sextas e Sábados</span>
        </div>
      </div>*/}
    </div> 
  )
}