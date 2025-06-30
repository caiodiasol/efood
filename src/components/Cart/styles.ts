import styled from 'styled-components'
import colors from '../../styles/colors'

import trash from '../../assets/images/lixeira-de-reciclagem 1.png'
import close from '../../assets/images/close 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }

  aside {
    z-index: 1;
    background-color: ${colors._primary};
    padding: 32px 8px;
    width: 360px;

    ul {
      margin-bottom: 40px;
      li {
        display: flex;
        padding: 8px;
        background-color: ${colors._secundary};
        position: relative;
        margin-bottom: 16px;

        div {
          margin-left: 8px;

          h3 {
            margin-bottom: 16px;
          }
        }
      }
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
  color: ${colors._secundary};
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 16px;
`

export const Send = styled.button`
  background-color: ${colors._secundary};
  color: ${colors._primary};
  font-weight: 700;
  font-size: 14px;
  padding: 4px;
  width: 100%;
  border: none;
  cursor: pointer;
`
export const Close = styled.button`
  display: none;

  @media (max-width: 426px) {
    display: block;
    background-image: url(${close});
    background-size: cover;
    background-color: transparent;
    background-position: center;
    position: absolute;
    right: 8px;
    top: 8px;
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    outline: none;
  }
`
