import styled from "styled-components"

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-left: -20px;

    hr{
        color: var(--grey);
        width: 100%;
        opacity: 0.2;
    }
    
    .header{
        display: flex;
        justify-content: space-between;
        width: 65%;
        height: 18vh;
        align-items: center;
    }

    main{
        display: flex;
        flex-direction: column;
        width: 65%;

        
        .topo {
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            margin-bottom: 40px;

            button{
                width: 35px;
                height: 35px;
            }
        }
        
        .vitrine{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content:center;
            background-color:  #212529;

            div{
                margin: 30px 30px 18px 30px;
                padding-bottom: 10px;
            }

            h2{
                padding: 20px 20px 40px 20px;
            }

            @media (max-width: 570px){
                width: 80vw;

                div{
                    margin: 20px 0px 30px 10px;
                }
            }

        }


    }


`

