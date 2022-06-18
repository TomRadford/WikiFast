import styled from "styled-components"
import { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
    border: 8px solid #444444; /* Light grey */
    border-top: 8px solid #57c3b9; /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${rotate} 1s linear infinite;
    display: ${props => props.loading ? 'block' : 'none'}
    `

// export const Spinner = styled.div(({ loading }) => ({
//     display: loading ? 'block' : 'none',
//     animation: css`${rotate}  2s linear infinite`
// }))

