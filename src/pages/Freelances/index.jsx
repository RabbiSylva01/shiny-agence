import Card from '../../Composants/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { useFetch, useTheme } from '../../utils/hooks'
import 'bootstrap/dist/css/bootstrap.css'

const CardsContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr); 
  align-items: center;
  justify-items: center;
  @media (max-width: 576px) {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(1, 1fr); 
    align-items: center;
    justify-items: center;
    width: 80%;
  }
`

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const PageSubtitle = styled.h2`
  font-size: 1.8rem;
  color: ${colors.secondary};
  text-align: center;
 
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(
    `https://fierce-taiga-87212.herokuapp.com//freelances`
  )

  const freelancersList = data?.freelancersList

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <div className='container'>
      <PageTitle theme={theme} width="60%" className="py-4 fw-bold">Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme} width="60%" className="py-4 fw-bold">
        Chez Agence Developpement web nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <div className="row">
        <CardsContainer className="gap-4 g-col-9 g-col-sm-9 g-col-lg-4">
          {freelancersList?.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
              theme={theme}
            />
         
          ))}
        </CardsContainer>
        </div>
      )}
    </div>
  )
}

export default Freelances