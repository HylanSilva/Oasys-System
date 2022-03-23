import styled from "styled-components"
import ReactTypingEffect from 'react-typing-effect';

const Corpo = styled.div`
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin: 0;
`;

const Letreiro = styled.h1`
  margin-top: 0.2%;
  margin-left: 5%;
  font-size: 64px;
`;

const Login = styled.button`
      background-color: black;
      color: white;
      width: 140px;
      height: 60px;
      border-radius: 25px;
      font-size: 24px;
      margin-left: 65%;
      margin-top: 1.5%;
      margin-right: 20px;
      cursor: pointer;
`;

const Buscar = styled.button`
      text-decoration: none;
      border: 3px solid black;
      background-color: white;
      color: black;
      width: 140px;
      height: 60px;
      border-radius: 25px;
      font-size: 24px;
      cursor: pointer;
      transition: .3s ease all;
      :hover{
        border: 3px solid white;
        background-color: black;
        color: white;
      }
`;

const Carousel = styled.div`
      border-radius: 50px;
      margin-top: -10%;
      margin-left: 35%;
      width: 800px;
      height: 500px;
      overflow: hidden;
`;

const Parameter = styled.p`
      margin-left: 2%;
      font-weight: lighter;
      font-size: 38px;
      overflow: hidden
`;

const Botton = styled.footer`
      position: fixed;
      bottom: 0;
      background-color: black;
      width: 100%;
      height: 25px;
      align-items: center;
      display: flex;
      flex-direction: column;
`;

const TextBotton = styled.p`
      margin-top: -1px;
      font-size: 18px;
      color: white;
`;
function App() {


  return (
    <Corpo>
      <nav>
        <Letreiro>Oasys</Letreiro>
      </nav>
      <main>
        <Parameter>
        <ReactTypingEffect
        text={["O maior acervo de livros","você encontra aqui!"]} cursor={["_"]}/>
        <br/>
        </Parameter>
        <Carousel>
              <img style={{"width":"100%"}} src="./src/components/img/imagen.jpg"></img>
        </Carousel>
        <div>
        <Login>Login</Login>
        <Buscar>Buscar</Buscar>
        </div>
      </main>
      <Botton>
        <TextBotton> Desenvolvido por: <a
        style={{"textDecoration":"none","color":"white"}} href="https://github.com/HylanSilva"> Hylan Silva</a><a 
        style={{"textDecoration":"none","color":"white"}} href="#"> DSLabz</a> </TextBotton>
      </Botton>
    </Corpo>
  )
}

export default App
