import HoverText from "../HoverText/HoverText";
import "./Contact.css"

function Contact() {
    return (
    <div className="contact-div">
        <span className="label-medium neutrals-lighten-2 contact-item" onClick={() => {window.open('https://www.linkedin.com/in/lingshuangkong/')}}><HoverText text="LINKEDIN" /></span>
        <span className="label-medium neutrals-lighten-2 contact-item" onClick={() => {window.open('mailto:klingshuang@gmail.com')}}><HoverText text="EMAIL" /></span>
        <span className="label-medium neutrals-lighten-2 contact-item" onClick={() => {window.open('https://drive.google.com/file/d/10k0xKttE0a8xR5s4oG6pl8-8hOplCFbq/view?usp=sharing')}}><HoverText text="RESUME" /></span>
    </div>);
}

export default Contact;