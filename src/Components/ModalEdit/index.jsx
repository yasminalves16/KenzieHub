import { Container, Modal } from "./styles"

import Button from "../Button"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from "react-toastify";

import api from "../../Services/api"


const ModalEdit = ({ setModalEdit, tecId}) => {


    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

    const schema = yup.object().shape({

        status: yup.string().required("Campo Obrigatório")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {

        console.log(data)
        
        api.put(`users/techs/${tecId}`, data,{
            
            headers: {
              Authorization: `Bearer ${token}`,
            },
              
        })
        .then((response) => {
            setModalEdit(false)
            return toast.success("Status Alterado");
        })
        .catch((error) => {
            return toast.error("Verifique-se de estar alterando apenas o status ");
        })
    }


    return (
        <Container>
            <Modal>
            <header>
                    <h3>Alterando Status </h3>
                    <button onClick={() => setModalEdit(false)}>X</button>
                </header>
                <main>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label >Selecionar Status</label>
                        <select name="status"  {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <Button type="submit">Salvar</Button>
                        {errors.status && <span>{errors.name.message}</span>}
                    </form>
                </main>
            </Modal>
        </Container>
    )

}

export default ModalEdit;