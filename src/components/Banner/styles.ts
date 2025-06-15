import styled from 'styled-components'

export const RestaurantProfile = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 280px;
  width: 100%;
  color: #fff;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const RestaurantCategory = styled.h2`
  position: absolute;
  top: 0;
  margin-top: 32px;
  font-sizi: 32px;
  font-weight: lighter;
`

export const RestaurantTitle = styled.h1`
  position: absolute;
  bottom: 0;
  font-sizi: 32px;
  margin-bottom: 32px;
`
