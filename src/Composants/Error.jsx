import styled from 'styled-components'
import colors from '../utils/style/colors'
import ErrorIllustration from '../assets/404.svg'
import 'bootstrap/dist/css/bootstrap.css'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
  @media (max-width: 700px) {
    margin: 15px;
  }
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

const Illustration = styled.img`
  max-width: 800px;
  @media (max-width: 700px) {
    max-width: 500px;
  }
`

function Error() {
  return (
    <ErrorWrapper className='container'>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={ErrorIllustration} className="col-10 col-sm-10 col-lg-10"/>
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error
