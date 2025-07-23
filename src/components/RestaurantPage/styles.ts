import styled from 'styled-components'
import colors from '../../styles/colors'

import close from '../../assets/images/close 1.png'

export const RestaurantSection = styled.section`
  background-color: ${colors._background};
`

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2.34%;

  li {
    background-color: ${colors._primary};
    color: ${colors._secundary};
    padding: 8px;
    margin-bottom: 32px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2.34%;
  }

  @media (max-width: 798px) {
    display: block;
    max-width: 500px;
    margin: 0 auto;
  }
`

export const Modal = styled.div`
  &.visible {
    display: flex;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  max-width: 1024px;
  background-color: ${colors._primary};
  padding: 32px;

  header button {
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

  > div {
    display: flex;
    @media (max-width: 768px) {
      display: block;
    }

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;

      @media (max-width: 768px) {
        width: 100%;
        height: 200px;
      }
    }

    div {
      margin-left: 24px;

      @media (max-width: 768px) {
        margin-left: 0;
      }

      h4 {
        font-size: 18px;
        margin-bottom: 16px;
      }

      p {
        font-size: 14px;
        margin-bottom: 36px;
      }

      span {
        font-size: 14px;
        display: block;
        margin-bottom: 20px;
      }

      button {
        background-color: ${colors._secundary};
        color: ${colors._primary};
        border: none;
        font-size: 14px;
        cursor: pointer;
        padding: 4px 6px;
        font-weight: 700;
      }
    }
  }
`
