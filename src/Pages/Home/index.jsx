import { useHistory, Redirect } from "react-router-dom"

import { Container } from "./styles";
import Logo from "../../Assets/Logo.svg";
import Button from "../../Components/Button"



const Home = ({authenticated}) => {  

    const history = useHistory()

    const handleNavigation = (path) => {
        return history.push(path)
    }

    if(authenticated){
        return <Redirect to="/dashboard" />
    }


    return (
        <Container>

            <h1> <img alt="Logo KenzieHub" src={Logo}></img> </h1>
            <section>
                <p>
                    Uma plataforma que tem como finalidade cadastrar as tecnologias que você
                    conhece
                </p>
                <p>
                    Podendo alterar ou excluir se necessario, e ainda selecionar o nível de
                    habilidade
                </p>
            </section>

            <div>
                <p>Não tem uma conta ainda ?</p>
                <Button onClick={() => handleNavigation("/signup")}> Cadastre-se </Button>
                <p>Já tem uma conta ? </p>
                <Button whiteSchema onClick={() => handleNavigation("/login")}> Login </Button>
            </div>
        </Container>
    );
};


export default Home;
