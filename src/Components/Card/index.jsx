import { Container } from "./styles"

const Card = ({tecnologias}) => {

    console.log(tecnologias)

    return(
        tecnologias.map((card, index) => {
            return <Container key={index}>
            <p>{card.title}</p>
            <p>{card.status}</p>
            </Container>
        })
    )

}

export default Card