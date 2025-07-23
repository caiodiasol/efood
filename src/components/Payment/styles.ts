import styled from 'styled-components'

export const Form = styled.aside`
  form {
    > div {
      display: grid;
      grid-template-columns: 1fr auto;
      justify-content: space-between;
      align-items: end;
      gap: 30px;
    }
  }
`

export const CVV = styled.div`
  max-width: 87px;
`
