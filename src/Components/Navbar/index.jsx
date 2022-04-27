import { Container } from "./styles"

import Logo from "../../Assets/Logo.svg";

import { useHistory } from "react-router-dom";

import Button from "../Button"

const Navbar = () => {

    const history = useHistory();

    return (
        <Container>
                <img alt="Logo KenzieHub" src={Logo}></img>
                <Button
                    whiteSchema
                    onClick={() => {
                        history.push("/");
                        localStorage.clear();
                    }}
                >Sair</Button>
        </Container>
    )
}

export default Navbar