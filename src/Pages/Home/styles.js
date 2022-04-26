import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 85vh;
    margin: 50px 0px 0px 20px;

    img{
        width: 35vh;
    }
    
    p{
        font-size: 1.3rem;
        margin: 15px;
    }

    div{
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        
        p{
            font-size: 1.1rem;
            color: var(--grey)
        }
    }

    

`