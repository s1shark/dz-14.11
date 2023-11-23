import "./Footer.css"
import FooterItem from "../FooterItem/FooterItem";

const Footer = () => {
    return (
        <div className="common-footer">
            <FooterItem text="About us" isLowercaseText={false} />
            <FooterItem text="Blog" isLowercaseText={false} />
            <FooterItem text="Our works" isLowercaseText={false} />
            <FooterItem text="See us" isLowercaseText={false} />
        </div>
    );
}

export default Footer;