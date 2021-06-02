import BannerComponent from '../../components/banner';
import ContentBlock from '../../components/content';
import ContactEmployee from '../../components/contactEmployee';

const ServicesEmployeePage = ({ attributes }) => {
  return (
    <>
      <BannerComponent attributes={attributes} />
      <ContentBlock attributes={attributes} />
      <ContactEmployee attributes={attributes} />
    </>
  );
};

export const getStaticProps = async () => {
  const content = await import(`../../content/pages/services-employee.md`);

  return { props: content.default };
};

export default ServicesEmployeePage;
