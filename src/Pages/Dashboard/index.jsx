import { Container } from "./styles";
import Logo from "../../Assets/Logo.svg"

import Button from "../../Components/Button"

import { useHistory} from "react-router-dom"

const Dashboard = () => {

    const history = useHistory()

    return (

        <Container >
            <header>
                <img alt="Logo KenzieHub" src={Logo}></img>
                <Button  onClick={() => {
                    history.push("/");   localStorage.clear();
                }}> Sair </Button>
            </header>
            <section>
                <h2>Ola dev</h2>
                <p>Imagem</p>
                <p>Modulo</p>
            </section>
            <main>
                <div>
                    <h2>Tecnologias</h2>
                    <Button>+</Button>
                </div>
                <section>
                    quadro
                </section>
            </main>
        </Container>
    );
}

export default Dashboard
