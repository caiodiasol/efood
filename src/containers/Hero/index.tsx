import logo from '../../assets/images/logo.png'

import { Description, HeroPage } from './styles'
import { ContainerCenter } from '../../styles/container'
import Logo from '../../styles/logo'

const Hero = () => (
  <HeroPage>
    <ContainerCenter>
      <Logo src={logo} alt="Logo efood" />
      <Description>
        Viva experiências gastronômicas no conforto da sua casa
      </Description>
    </ContainerCenter>
  </HeroPage>
)

export default Hero
