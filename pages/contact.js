import BannerComponent from '../components/banner';
import ContentComponent from '../components/contact';

const ContactPage = ({ attributes }) => {
  return (
    <>
      <BannerComponent attributes={attributes} />
      <ContentComponent attributes={attributes} />
    </>
  );
};

export const getStaticProps = async () => {
  const content = await import(`../content/pages/contact.md`);

  return { props: content.default };
};

export default ContactPage;
