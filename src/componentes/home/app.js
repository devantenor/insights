import React from 'react';

import image from '../image/TECHS.png';
//const image = "TECHS.png"


function App() {
    return (
        <div id="app">
        
        <main>
            <header>
                <h2> bem vindo à </h2>
                <h1>Insight's Digitais</h1>
            </header>
            <div className="conteudo">
                <img src={image} alt="conteudo"></img>
                <div>
                <h3>Aprenda sobre à insights</h3>
                <p>Somos uma empresa engajada na tranformação digital, embasada nas tecnologias mais atuais.
                    nossso foco é fornecer a maior experiencia em produtividade e agilidade com as ferramentas certas para você alcançar um novo nível da sua carreira.
                </p>
                </div>
            </div>
            
            <div className="contato">
                <section>
                <div >
                <img className="aside" src={image} alt="rocket"></img>
                <h3>Sua empresa de cara nova</h3>
                </div >
                <form id="form">
                    <h1>Entre em contato conosco</h1>
                    <label>nome</label>
                    <input name="email" type="edress" placeholder="escreva aqui seu nome"></input>
                    <label>seu email</label>
                    <input name="email" type="edress" placeholder="escreva aqui seu email"></input>
                    <button>enviar</button>
                </form>
                </section>
            </div>
            <texto> 
                <h1> Nossos Serviços</h1>
            </texto>
            <produtos>
            <div id="card">
            <div className="produto">
                <img src={image} alt="conteudo"></img>
                <div id="produto">
                <h3>marketing digital</h3>
                <p> alcance os resultados esperados com uma divulgação a altura do seu produto
                    convence-os de que o seu produto é melhor
                    torne-se visível 
                </p>
                </div>
                </div>
            </div>
            <div id="card">
            <div className="produto">
                <img src={image} alt="conteudo"></img>
                <div id="produto">
                <h3>sistemas automatizados</h3>
                <p>pare de fazer da maneira mais improdutiva possivel! ganhe tempo, seja dinâmico, não foque em tarefas repetitivas.
                    priorize seus clientes ao maximo!
                </p>
                </div>
                </div>
            </div>
            <div id="card">
                <div className="produto">
                
                <img src={image} alt="conteudo"></img>
                <div id="produto">
                <h3>gestão de excelencia</h3>
                <p> ficar anotando em papel já é mais do que passado, já ouviu falar de de gestão ágil, scrum, power BI?
                    todas a compentencias que vc precisa estão a um click de voce! 
                </p>
                
                </div>
                </div>
            </div>
            </produtos>
            <texto> 
                <h1> awnt fofo !! dá um macth conosco s2</h1>
            </texto>
            
           
        </main>
        <footer>
            <div>   
                <ul>
                    <li>
                       
                        <span></span>
                    </li>
                </ul>
            </div>

            <div class="rodape">

            </div>
        </footer>
        </div>
    )
};

export default (App)