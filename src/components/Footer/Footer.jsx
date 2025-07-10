import AnchorLink from "../Shared/AnchorLink/AnchorLink";
import s from "./Footer.module.scss";
import InLineSocialMedia from "./InLineSocialMedia/InLineSocialMedia";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <InLineSocialMedia />
      <p className={s.copyRights}>
        Designed by{" "}
        <AnchorLink
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </AnchorLink>{" "}
        and Built by{" "}
        <AnchorLink
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Via Okta Riana Silalahi
        </AnchorLink>{" "}
        with{" "}
        <AnchorLink
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </AnchorLink>
      </p>
    </footer>
  );
};

export default Footer;
