import BannerComponent from '../components/banner';
import ContentImageBlock from '../components/contentImageBlock';

const AboutUsPage = ({ attributes }) => {
  return (
    <>
      <BannerComponent attributes={attributes} />
      <ContentImageBlock attributes={attributes} />
    </>
  );
};

export const getStaticProps = async () => {
  const content = await import('../content/pages/over-phr.md');
  return { props: content.default };
};

export default AboutUsPage;
