import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import 'bootstrap/dist/css/bootstrap.css'

const FooterContainer = styled.footer`
  display: flex;
  
  align-items: center;
  justify-content: center;
 ;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
  
    <FooterContainer className="container py-4">
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer