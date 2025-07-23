import { BeatLoader } from 'react-spinners'
import colors from '../../styles/colors'
import { LoaderContainer } from './styles'

const Loader = () => (
  <LoaderContainer>
    <BeatLoader color={colors._primary} />
  </LoaderContainer>
)

export default Loader
