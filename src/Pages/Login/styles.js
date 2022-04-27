import styled from "styled-components"

export const Container = styled.div`
        
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;

    main{
        background-color: #212529;
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 10px;

        p{
            color: #868E96;
        }
    }

    header{
        display: flex;
        width: 365px;
        justify-content: center;
        margin: 15px;

        button{
            width: 5vw;
            background-color: #212529;
        }

    }
    
    form{
        width: 360px;
        height: 60vh;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        button{
            width: 90%;
        }
    }

    @media (max-width: 768px){

        header{
            button{
                width:10vh;
            }
        }

        main{
            width: 90vw;
        }
    }
    

`
