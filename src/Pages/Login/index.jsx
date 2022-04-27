import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Link, useHistory, Redirect } from "react-router-dom";

import { Container } from "./styles";

import Input from "../../Components/Input"
import Button from "../../Components/Button"

import Logo from "../../Assets/Logo.svg";

import api from "../../Services/api";

import { toast } from "react-toastify"



const Login = () => {

    const history = useHistory();


    const schema = yup.object().shape({

        email: yup.string().required("Campo Obrigatório").email("Email inválido"),
        password: yup.string().required("Campo Obrigatório").min(6, "Minimo 6 caracteres!"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        api.post("sessions", data).then((response) => {

            const { token } = response.data;

            localStorage.setItem("@kenzieHub:token", JSON.stringify(token));

            toast.success("Login realizado com sucesso!")

            return history.push("/dashboard");
        })
        .catch((err) => {
            toast.error("Senha e/ou Email invalidos")
        })
    };

    const handleClick = () => {
        return history.push("/signup")
    }

    return (

        <Container >
            <header>
                <img src={Logo} alt="logo" />
            </header>
            <main>
                <h2> Login </h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Input type="email" label="Email" placeholder="Digite aqui seu email" register={register} name="email" error={errors.email?.message} ></Input>
                    <Input type="password" label="Senha" placeholder="Digite aqui sua senha" register={register} name="password" error={errors.password?.message}></Input>

                    <Button type="submit"> Entrar </Button>
                    <p>Ainda não possui uma conta ?</p>
                    <Button type="button" whiteSchema onClick={() => handleClick()}> Cadastre-se </Button>
                </form>
            </main>
        </Container>
    );
}

export default Login
