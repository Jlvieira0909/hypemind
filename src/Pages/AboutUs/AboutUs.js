import React, { useState } from 'react';
import './AboutUs.css';
import brazilFlag from '../../Images/brazil.png';
import usaFlag from '../../Images/usa.png';
import HeaderImg from '../../Images/Header.png';
import FooterImg from '../../Images/Footer.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <div className='AboutContainer'>
            <button onClick={toggleLanguage} className='LanguageToggle'>
                {isEnglish ? (
                    <img src={usaFlag} alt='Brazil flag' />
                ) : (
                    <img src={brazilFlag} alt='USA flag' />
                )}
            </button>
            <img className='AboutThumb' src={HeaderImg} alt='' />
            <h1 className='AboutTitle'>
                Where technology meets creativity
            </h1>
            <p className='AboutParagraph'>
                {isEnglish ? (
                    <>
                        Welcome to our universe!<br />
                        HypeMind is a one-person creative collective project created by
                        <Link to="/creator" className="textLink"> João L. Vieira </Link>
                        with the purpose of being a place where I can put my ideas out and share them with the world! I really hope you enjoy the fullest every experience we craft, and I hope that maybe I can motivate or inspire you to create your own stuff too! The spirit
                        that we carry on Hypemind is that we try to make everyone reach their fullest creative potential, we believe that everyone carries such wonderful and creative thoughts and our objective is to make everyone feel that special feeling of gazing into
                        your own universe and bringing to life your deepest and most sincere feelings.
                    </>
                ) : (
                    <>
                        Bem-vindo ao nosso universo!<br />
                        HypeMind é um projeto coletivo criativo de uma pessoa, criado por
                        <Link to="/creator" className="textLink"> João L. Vieira </Link>
                        com o propósito de ser um lugar onde posso colocar minhas ideias e compartilhá-las com o mundo! Espero que você aproveite ao máximo cada experiência que criamos, e espero que talvez eu possa motivá-lo ou inspirá-lo a criar suas próprias coisas também! O espírito
                        que carregamos na Hypemind é que tentamos fazer com que todos alcancem seu potencial criativo máximo; acreditamos que todos possuem pensamentos maravilhosos e criativos, e nosso objetivo é fazer com que todos sintam aquela sensação especial de explorar
                        seu próprio universo e dar vida aos seus sentimentos mais profundos e sinceros.
                    </>
                )}
            </p>
            <h1 className='AboutFlavorText'>
               We Are Everywhere
            </h1>
            <img className='AboutThumb' src={FooterImg} alt='' />
            <footer className='AboutFooter'>

            </footer>
        </div>
    );
};

export default AboutUs;
