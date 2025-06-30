import { Link } from 'react-router-dom'
import colors from '../../styles/colors'
import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  border: 1px solid ${colors._primary};
  background-color: #fff;
  margin-bottom: 48px;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 216px;
  object-fit: cover;
`

export const Categories = styled.ul`
  position: absolute;
  display: flex;
  margin: 16px;
  right: 0;

  li {
    background-color: ${colors._primary};
    color: ${colors._secundary};
    margin-left: 8px;
    padding: 6px 4px;
    font-size: 12px;
    font-weight: bold;
  }

  .destaqueOff {
    display: none;
  }
`

export const ContainerRes = styled.div`
  padding: 8px;
  padding-top: 0px;
`

export const DescriptionRes = styled.p`
  margin-bottom: 16px;
`

export const Tag = styled.div`
  padding: 8px;
  background-color: #fff;
`

export const Space = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Rating = styled.span`
  display: flex;
  align-items: flex-end;
`

export const Star = styled.i`
  color: ${colors._startColor};
  font-size: 1.5em;
  margin-left: 8px;
`

export const MoreLink = styled(Link)`
  color: ${colors._secundary};
  background-color: ${colors._primary};
  font-weight: bold;
  font-size: 1em;
  padding: 4px 6px;
  display: inline-block;
  bottom: 0;
  cursor: pointer;
`
