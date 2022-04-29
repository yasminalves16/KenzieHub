import { Container, Modal } from "./styles"

import Input from "../Input"
import Button from "../Button"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from "react-toastify";

import api from "../../Services/api"


const ModalAdd = ({ setModalOpen}) => {

    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

    const schema = yup.object().shape({

        title: yup.string().required("Campo Obrigatório"),
        status: yup.string().required("Campo Obrigatório")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        
        api.post("users/techs", data,{
            
            headers: {
              Authorization: `Bearer ${token}`,
            },
              
        })
        .then((response) => {
            setModalOpen(false)
            return toast.success("Tecnologia Adicionada");
        })
        .catch((error) => {
            return toast.error("Cada tecnologia só pode ser adicionada 1 vez");
        })
    }


    return (
        <Container>
            <Modal>
            <header>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={() => setModalOpen(false)}>X</button>
                </header>
                <main>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input maxlength="50" type="text" label="Nome" placeholder="Digite aqui a Tecnologia" register={register} name="title" error={errors.title?.message}></Input>
                        <label >Selecionar Status</label>
                        <select name="status"  {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <Button type="submit">Salvar</Button>
                    </form>
                </main>
            </Modal>
        </Container>
    )

}

export default ModalAdd;