import styled from 'styled-components'
import colors from '../../styles/colors'

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

  @media (max-width: 426px) {
    display: block;
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
  height: 100vh;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
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

  header img {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  > div {
    display: flex;

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }

    div {
      margin-left: 24px;

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
