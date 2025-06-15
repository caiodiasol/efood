import styled from 'styled-components'
import colors from '../../styles/colors'

export const ProductImage = styled.img`
  max-width: 100%;
`

export const ProductTitle = styled.h3`
  margin-bottom: 8px;
`

export const ProductDescription = styled.p`
  margin-bottom: 8px;
`

export const AddProduct = styled.button`
  background-color: ${colors._secundary};
  color: ${colors._primary};
  width: 100%;
  border: none;
  padding: 4px 0;
  font-weight: bold;
  font-size: 14px;
`
