import { Container } from "./styles"
import { FaTrash, FaPen } from "react-icons/fa";

import Button from "../Button"
import { toast } from "react-toastify";


import api from "../../Services/api"

const Card = ({tecnologias, token, setModalEdit, setTecId}) => {

    

    const handleDelet = (id) =>{
        api.delete(`users/techs/${id}`,{

            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return toast.success("Tecnologia Excluida");
        })
    }


    return(
        tecnologias.map((card) => {
            return <Container key={card.id}>
            <p>{card.title}</p>
            <p>{card.status}</p>
            <div>
            <Button onClick={() => {setModalEdit(true) ; setTecId(card.id)}}> <FaPen/></Button>
            <Button onClick={() => handleDelet(card.id)}> <FaTrash/></Button>
            </div>
            </Container>
        })
    )

}

export default Card