import { Container } from "./styles"

import Logo from "../../Assets/Logo.svg";

import { useHistory } from "react-router-dom";

import Button from "../Button"

const Navbar = ({setAuthenticated}) => {

    const history = useHistory();

    const logOut = () => {
        localStorage.clear()
        setAuthenticated(false)
        history.push("/");
    }

    return (
        <Container>
                <img alt="Logo KenzieHub" src={Logo}></img>
                <Button
                    whiteSchema
                    onClick={() => logOut()}
                >Sair</Button>
        </Container>
    )
}

export default Navbar