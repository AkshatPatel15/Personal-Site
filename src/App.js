import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./footer/Footer";
import Head from "./head/Head";
import Home from "./home/Home";
import MyService from "./myService/MyService";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";
function App() {
  return (
    <div className="App">
      <Head></Head>
      <Home></Home>
      <Container>
        <Portfolio></Portfolio>
      </Container>
      {/* <MyService></MyService>
      <Skills></Skills>  */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
