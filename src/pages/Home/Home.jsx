import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { HomeText, HomeTextGo, HomeWrapper } from './Home.styled';;


const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Contacts App</title>
      </Helmet>
      <HomeWrapper>
        {isLoggedIn ? (
          <HomeTextGo>
            Go to
            <Link to="/contacts"> Contacts</Link>
          </HomeTextGo>
        ) : (
          <HomeText>
            Welcome to Contacts app! 
          </HomeText>
        )}
      </HomeWrapper>
    </>
  );
};

export default Home;