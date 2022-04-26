import styled, { css } from "styled-components"



export const Container = styled.button`

    background: ${(props) => (props.whiteSchema ? "#868E96" : " #FF577F")};
    color: var(--white);
    height: 45px;
    border-radius: 8px;
    border: 2px solid transparent;
    font-family: 'Roboto Mono', monospace;
    transition: 1s;
    width: 100%;

      :hover{
        background: #FF427F;
        border: 2px solid var(--white);
      }

      ${(props) =>
        props.whiteSchema &&
        css`
            :hover{
                background: #343B41;
            }
            
        `
    }

`   