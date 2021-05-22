const FooterComponent = () => {
  const date = new Date();
  return (
    <>
      <footer className="footer-bottom">
        <div className="container clearfix">
          <div className="left-side pull-left">
            <a href="/">Personal HR</a>
          </div>
          <div className="copyright-text pull-right">
            <p>&copy; {date.getFullYear()} All Right Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
