import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory} from "react-router-dom"

import { Container } from "./styles";

import Input from "../../Components/Input"
import Button from "../../Components/Button"

import Logo from "../../Assets/Logo.svg";

import { toast } from "react-toastify"

import api from"../../Services/api"





const Signup = () => {

    const history = useHistory()

    const schema = yup.object().shape({

        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email("Email inválido"),
        password: yup.string().required("Campo Obrigatório").min(6, "Minimo 6 caracteres!"),
        confirmPassword: yup
            .string()
            .required("Senhas não são iguais")
            .oneOf([yup.ref("password")], "Senhas não são iguais"),
        course_module: yup.string().required("Campo Obrigatório")   
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    
    const onSubmit = (data) => {
        const { course_module, name, email, password, avatar_url } = data;
        const user = {
          course_module,
          name,
          email,
          password,
          avatar_url,
          bio: " ",
          contact: " ",
        };
        api.post("users", user)
        .then((r) => {

            toast.success('Conta criada com sucesso')
            return history.push("/login")
        })
        .catch((err) => toast.error('Verifique se colocou todas as informações corretamente ou tente outro email') )
    }

    return (

        <Container >
            <header>
                <img src={Logo} alt="logo"/>
                <Button onClick={() => history.push("/")}> Voltar </Button>
            </header>
            <main>
                <h2>Crie sua conta</h2>
                <p>Rapido e grátis, vamos nessa</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="bio" value="lorem ips"></input>
                    <Input  type="text" label="Nome" placeholder="Digite aqui seu nome" register = {register} name="name" error = {errors.name?.message}></Input>
                    <Input  type="email" label="Email" placeholder="Digite aqui seu email" register = {register} name="email" error = {errors.email?.message} ></Input>
                    <Input  type="password" label="Senha" placeholder="Digite aqui sua senha" register = {register} name="password" error = {errors.password?.message}></Input>
                    <Input  type="password" label="Confirmação de Senha" placeholder="Digite novamente sua senha" register = {register} name="confirmPassword" error = {errors.confirmPassword?.message} ></Input>
                    <Input  type="text" label="Url Foto Perfil" placeholder="Cole aqui sua url" register = {register} name="avatar_url"  ></Input>
                    <label >Selecionar Modulo</label>
                    <select name="course_module"  {...register("course_module")}>
                        <option value="Primeiro módulo (Introdução ao Frontend)">"Primeiro módulo"</option>
                        <option value="Segundo módulo (Frontend Avançado)">"Segundo módulo"</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">"Terceiro módulo"</option>
                        <option value="Quarto módulo (Backend Avançado)">"Quarto módulo"</option>
                    </select>
                    <Button type="submit"> Cadastrar </Button>
                </form>
            </main>
        </Container>
    );
}

export default Signup
