import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
`

export const Modal = styled.div`
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 369px;
  height: 340px;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #212529;
  border-radius: 10px;

  

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100;
        max-width: 320px;
        margin-top: 20px;
        margin-left: 10%;

        select{
            height: 40px;
            width: 90%;
            margin-bottom: 30px;
            border-radius: 4px;
            background:  #343B41;
            color: var(--white);
            padding-left: 10px;
            font-size: 16px;
            margin-top: 10px;

                :hover{
                    border: 2px solid var(--white);
                }
            }
         
        
        label{
            margin-top: 10px;
        }

        button{
            width: 285px;
        }
    }

    main{
        width: 100%;
    }
 
    header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 7vh;
        background: #343B41;
        font-size: 0.8rem;
        font-weight: 400;
        border-radius: 10px;

        button{
            background-color: #343B41;
            border: none;
            color: var(--white);

            :hover{
                color:  #FF577F;
            }
        }
    }

    
`;