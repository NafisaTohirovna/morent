const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top d-flex">
          <div className="footer-title">
            <img src={require("../images/logo.png")} alt="" />
            <p className="p">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className=" footer-menu d-flex">
            <ul>
              <li>
                <h2>About</h2>
              </li>
              <li>
                <a className="p" href="#0">
                  How it works
                </a>
              </li>
              <li>
                <a className="p" href="#0">
                  Featured
                </a>
              </li>
              <li>
                <a className="p" href="#0">
                  Partnership
                </a>
              </li>
              <li>
                <a className="p" href="#0">
                  Bussiness Relation
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <h2>Community</h2>
              </li>
              <li>
                <a className="p" href="#0">
                  Events{" "}
                </a>
              </li>
              <li>
                <a className="p" href="#0">
                  Blog
                </a>
              </li>
              <li>
                <a className="p" href="#0">
                  Podcast
                </a>
              </li>
              <li>
                <a className="p" href="#0">
                  Invite a friend
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <h2>Socials</h2>
              </li>
              <li>
                <a className="p" href="#0">
                  Discord
                </a>
              </li>
              <li>
                <a className="p" href="#0">
                  Instagram
                </a>
              </li>
              <li>
                <a className="p" href="#0">
                  Twitter
                </a>
              </li>
              <li>
                <a className="p" href="#0">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom d-flex">
          <h2>©2022 MORENT. All rights reserved</h2>
          <div className="d-flex">
            <h2>Privacy & Policy</h2>
            <h2>Terms & Condition</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
