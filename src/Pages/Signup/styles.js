import styled from "styled-components"

export const Container = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;

    main{
        background-color: #212529;
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        p{
            color: #868E96;
        }
    }

    header{
        display: flex;
        width: 367px;
        justify-content: space-between;
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
        button{
            width: 90%;
        }
    }

    select{
        height: 40px;
        width: 90%;
        margin-bottom: 30px;
        border-radius: 4px;
        background:  #343B41;
        color: var(--white);
        padding-left: 10px;
        font-size: 16px;
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