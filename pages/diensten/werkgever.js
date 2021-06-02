import BannerComponent from '../../components/banner';
import ContentBlock from '../../components/content';
import CTABlock from '../../components/cta';
import ContactEmployer from '../../components/contactEmployer';

const ServicesEmployerPage = ({ attributes }) => {
  return (
    <>
      <BannerComponent attributes={attributes} />
      <ContentBlock attributes={attributes} />
      <CTABlock attributes={attributes} />
      <ContactEmployer attributes={attributes} />
    </>
  );
};

export const getStaticProps = async () => {
  const content = await import(`../../content/pages/services-employer.md`);

  return { props: content.default };
};

export default ServicesEmployerPage;
