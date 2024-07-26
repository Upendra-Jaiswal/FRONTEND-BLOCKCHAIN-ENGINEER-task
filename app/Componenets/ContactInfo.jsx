import "../styles/index.css";

// export default function ContactInfo({ email, phone }) {
const ContactInfo = ({ email, phone }) => {
  return (
    <div className="contact-info">
      <div className="contact-item">
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
        <span>{email}</span>
      </div>
      <div className="contact-item">
        <i className="fa fa-phone" aria-hidden="true"></i>
        <span>{phone}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
