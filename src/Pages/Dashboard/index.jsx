import { useState, useEffect } from "react";

import { Redirect } from "react-router-dom";

import { Container } from "./styles";

import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar"
import ModalAdd from "../../Components/ModalAdd";
import ModalEdit from "../../Components/ModalEdit"
import Card from "../../Components/Card"

import api from "../../Services/api"

const Dashboard = ({ authenticated, setAuthenticated }) => {
    
    
    const [modalOpen, setModalOpen] = useState(false);
    
    const [modalEdit, setModalEdit] = useState(false)
    
    const [tecId, setTecId] = useState("")
    
    const [tecnologias, setTecnologias] = useState([])
    
    const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));
    
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
    
    const { name, course_module, id } = user
    
    
    useEffect(() => {
        api
        .get(`users/${id}`)
        .then((response) => {
            setTecnologias(response.data.techs);
        })
        
        .catch((err) => console.log(err));
    });
    
    
    if (!authenticated) {
        return <Redirect to="/login" />;
    }
    
    return (
        <Container>

            <Navbar setAuthenticated={setAuthenticated} />
            <hr></hr>


            <header className="header">
                <h2>Olá, {name}</h2>
                <p>{course_module}</p>
            </header>
            <hr></hr>


            <main>

                <div className="topo">
                    <h2>Tecnologias</h2>
                    <Button whiteSchema onClick={() => setModalOpen(true)}>
                        +
                    </Button>
                </div>

                <section className="vitrine">
                    {tecnologias.length <= 0 ? (
                        <div className="noCard">
                            <h2>Você ainda não possui tecnologias</h2>
                        </div>
                    ) : (
                        <Card tecnologias={tecnologias} token={token} setTecId={setTecId} setModalEdit = {setModalEdit} setModalOpen = {setModalOpen}/>
                    )}

                </section>

            </main>


            {modalOpen && <ModalAdd setModalOpen={setModalOpen} />}
            {modalEdit && <ModalEdit setModalEdit={setModalEdit} tecId = {tecId}/>}


        </Container>
    );
};

export default Dashboard;
