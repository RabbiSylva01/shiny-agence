
import styled from 'styled-components'
import { StyledLink } from '../utils/style/Atoms'
import 'bootstrap/dist/css/bootstrap.css'



const HomeLogo = styled.h1`
  color:#5843E4;
  text-decoration:none; 
`

const NavContainer = styled.nav`
 
`

function Header() {
  return (
    <NavContainer className="container py-4 w-100 h-25">

      <div class="row">
         <div className="col-12 col-sm-12 col-lg-8 pb-4">
           <HomeLogo>Agence Developpement web</HomeLogo>
         </div>
       
      
         <div className="col-12 col-sm-12 col-lg-4 text-lg-end pb-4" >
           <StyledLink to="/">Accueil</StyledLink>
           <StyledLink to="/freelances">Profils</StyledLink>
           <StyledLink to="/survey/1" $isFullLink>
             Faire le test
           </StyledLink>
         </div>
      </div>
    </NavContainer>
  )
}

export default Header