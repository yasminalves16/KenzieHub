import styled, { css } from "styled-components"

export const Container = styled.div`
    text-align: left;

    div{
        margin-bottom: 10px;

        span{
            color: pink;
            font-weight: 600;

        }
    }

`

export const InputContainer = styled.div`
    background: var(--white);
    border-radius: 10px;
    border: 2px solid var(--gray);
    color: var(--gray);
    width: 89%;
    display: flex;
    transition: 0.4s;

    ${(props) =>
        props.isErrored &&
        css`
            border-color: blue;

            svg {
                color: blue;
            }

        `
    }

    input{
        width: 90%;
        height: 40px;
        border-radius: 4px;
        background:  #343B41;
        align-items: center;
        flex: 1;
        border: 0;
        border: 2px solid transparent;
        padding-left: 15px;
        color: var(--white);
        box-sizing: border-box;
        &::placeholder{
            color: var(--gray)
        }
        :active{
            border: 2px solid var(--white);
        }

        :hover{
            border: 2px solid var(--white);
        }

        @media (max-width: 800px){
            width: 10vw;
        }
    }

    svg{
        margin-right: 16px;
    }
`

