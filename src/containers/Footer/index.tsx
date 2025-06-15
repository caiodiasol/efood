import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/icons/facebook_icon.png'
import twitter from '../../assets/images/icons/twitter_icon.png'
import instagram from '../../assets/images/icons/instagram_icon.png'

import { ContainerCenter } from '../../styles/container'
import Logo from '../../styles/logo'
import { Disclaimer, Icon, SocialLinks } from './styles'

const Footer = () => (
  <ContainerCenter>
    <Logo src={logo} alt="Logo efood" />

    <SocialLinks>
      <li>
        <Icon src={facebook} alt="facebook" />
      </li>
      <li>
        <Icon src={twitter} alt="twitter" />
      </li>
      <li>
        <Icon src={instagram} alt="instagram" />
      </li>
    </SocialLinks>
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Disclaimer>
  </ContainerCenter>
)

export default Footer
