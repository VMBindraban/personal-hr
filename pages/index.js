import RevSliderComponent from '../components/revSlider';
import WelcomeComponent from '../components/welcome';
import TestimonialsComponent from '../components/testimonials';

const HomePage = ({ attributes }) => {
  return (
    <>
      <RevSliderComponent attributes={attributes} />
      <WelcomeComponent attributes={attributes} />
      <TestimonialsComponent attributes={attributes} />
    </>
  );
};

export const getStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`);

  return { props: content.default };
};

export default HomePage;
