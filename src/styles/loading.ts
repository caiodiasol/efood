import styled from 'styled-components'
import colors from './colors'

export const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${colors._secundary};

  font-size: 48px;
  font-weight: bold;
  text-align: center;
`
