import styled from "styled-components"

const Div = styled.div`
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;      padding: 0;
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
      :hover{
        border: 3px solid black;
        background-color: white;
        color: black;
      }
`;

const Buscar = styled.button`
      border: 3px solid black;
      background-color: white;
      color: black;
      width: 140px;
      height: 60px;
      border-radius: 25px;
      font-size: 24px;
      transition: ease-in all;
      animation-duration: 3.ms;
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
`;


const Botton = styled.footer`
      background-color: black;
      width: 100%;
      height: 25px;
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-top:8.3%;
      padding-bottom: 0.5%;
`;

const TextBotton = styled.p`
      font-size: 18px;
      margin-top: 0.25%;
      color: white;
`;
function App() {


  return (
    <Div>
      <nav>
        <Letreiro>Oasys</Letreiro>
      </nav>
      <main>
        <Parameter>O maior acervo de livros<br/>se encontra aqui! </Parameter>
        <Carousel>
              <img style={{"width":"100%"}} src="./src/components/img/imagen.jpg"></img>
        </Carousel>
        <div>
        <Login>Login</Login>
        <Buscar>Buscar</Buscar>
        </div>
      </main>
      <Botton>
        <TextBotton> Desenvolvido por: HylanSilva (DSLabz) </TextBotton>
      </Botton>
    </Div>
  )
}

export default App
