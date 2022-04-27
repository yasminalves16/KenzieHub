import { Container, Modal } from "./styles"

import Input from "../Input"
import Button from "../Button"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import api from "../../Services/api"


const ModalAdd = ({ setModalOpenClose, setTecnologias, tecnologias }) => {


    const schema = yup.object().shape({

        title: yup.string().required("Campo Obrigatório"),
        status: yup.string().required("Campo Obrigatório")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data)
        setTecnologias([...tecnologias, data ])
        console.log(tecnologias)
    }

    return (
        <Container>
            <Modal>
            <header>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={() => setModalOpenClose(false)}>X</button>
                </header>
                <main>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input type="text" label="Nome" placeholder="Digite aqui a Tecnologia" register={register} name="title" error={errors.name?.message}></Input>
                        <label >Selecionar Status</label>
                        <select name="status"  {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <Button type="submit">enviar</Button>
                    </form>
                </main>
            </Modal>
        </Container>
    )

}

export default ModalAdd;