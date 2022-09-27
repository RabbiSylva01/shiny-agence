import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import { useTheme } from '../../utils/hooks'
import HomeIllustration from '../../assets/home-illustration.svg'
import 'bootstrap/dist/css/bootstrap.css'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomerContainer = styled.div`
  margin: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
 
  display: flex;
  flex-direction: row;
  max-width: 100%;
  @media (max-width: 700px) {
    height:300px;
  }
`

const LeftCol = styled.div`
 
  ${StyledLink} {
    max-width: 35%;
  }
`

const StyledTitle = styled.h2`
 
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Illustration = styled.img`
@media (max-width: 700px) {
  height:220px;
  visibility:hidden;
  display:none;
}
`

function Home() {
  const { theme } = useTheme()

  return (
    <HomeWrapper className='container'>
      <HomerContainer className="row gy-4 align-items-center py-6 px-3" theme={theme}>
        <LeftCol className="col-12 col-sm-12 col-lg-6">
          <StyledTitle className="lh-2 pb-4" theme={theme}>
            Bienvenue chez Agence Developpement web
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <div className="col-12 col-sm-12 col-lg-3" width="100%">
           <Illustration src={HomeIllustration} />  
        </div>
        
      </HomerContainer>
    </HomeWrapper>
  )
}

export default Home