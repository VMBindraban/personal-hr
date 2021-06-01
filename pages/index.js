import WelcomeComponent from '../components/welcome';
import BannerComponent from '../components/banner';

const HomePage = ({ attributes }) => {
  return (
    <>
      <BannerComponent attributes={attributes} />
      <WelcomeComponent attributes={attributes} />
    </>
  );
};

export const getStaticProps = async () => {
  const content = await import(`../content/pages/home.md`);

  return { props: content.default };
};

export default HomePage;
