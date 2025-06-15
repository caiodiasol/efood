import styled from 'styled-components'

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`
export const ContainerCenter = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Container
