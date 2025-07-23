import styled from 'styled-components'
import colors from '../../styles/colors'

import trash from '../../assets/images/lixeira-de-reciclagem 1.png'

export const CartAside = styled.aside`
  .empty-text {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
`

export const CartList = styled.ul`
  margin-bottom: 40px;
  color: ${colors._primary};

  li {
    display: flex;
    padding: 8px;
    background-color: ${colors._secundary};
    position: relative;
    margin-bottom: 16px;

    div {
      margin-left: 8px;
    }
  }
`

export const Item = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const Trash = styled.button`
  background-image: url(${trash});
  background-size: cover;
  background-color: transparent;
  background-position: center;
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;
  outline: none;
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 16px;
`
