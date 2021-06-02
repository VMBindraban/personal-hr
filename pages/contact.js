import BannerComponent from '../components/banner';

const ContactPage = ({ attributes }) => {
  return (
    <>
      <BannerComponent attributes={attributes} />
    </>
  );
};

export const getStaticProps = async () => {
  const content = await import(`../content/pages/contact.md`);

  return { props: content.default };
};

export default ContactPage;
