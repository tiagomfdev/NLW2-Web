import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherItem ()  {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/41709981?s=460&u=2ad9b51621edf113db3cd450b3c6fdacf09fa3d8&v=4" alt="Tiago Machado Flor"/>
                <div>
                    <strong>Tiago Machado Flor</strong>
                    <span>Matematica</span>
                </div>
            </header>

            <p>
                Minim consectetur qui dolor mollit aliqua. 
                <br/><br/>
                Excepteur tempor occaecat fugiat est consequat. Eu ut amet elit laborum enim Lorem nostrud duis deserunt ea. Reprehenderit sit aute ex officia irure exercitation dolor est do ea. Dolore id exercitation pariatur laboris quis occaecat in fugiat ex cillum. Ipsum nulla sunt sint cupidatat ex duis cupidatat aliquip ipsum adipisicing incididunt veniam aute irure. Sint qui nostrud elit do aute dolor ullamco.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;