import styled from "styled-components"

export const Container = styled.div`

    background-color: yellow;
    display: flex;
    flex: column;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background: #121214;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid transparent;

        :hover{
            border: 2px solid white;
        }

    p{
        width: 80px;
    }
    
    button{
        width:25px;
        height: 30px;
        margin:4px;
    }

    @media (max-width: 570px){

        width: 70vw;
        padding: 5px;

    }

`