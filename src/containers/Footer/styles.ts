import styled from 'styled-components'
import colors from '../../styles/colors'

export const FooterSide = styled.footer`
  background-color: ${colors._secundary};
`

export const SocialLinks = styled.ul`
  margin: 32px 0 80px;
  display: flex;
`

export const Icon = styled.img`
  height: 1.5em;
  margin: 0 4px;
`

export const Disclaimer = styled.p`
  max-width: 480px;
  font-size: 10px;
  text-align: center;
`
