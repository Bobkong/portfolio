
import './Footer.css';
import ins from '../../Assets/ins-logo.png';
import linkedin from '../../Assets/linkedin.png';

function Footer() {
    return (
    <div id="footer-div">
        <div id='footer-content-div'>
            <div className='footer-half-div'>
                <span className='footer-text'>Thansk for viewing my work!</span>
                {/* <div>
                    <img src={linkedin} onClick={() => {window.open('https://www.linkedin.com/in/lingshuangkong/')}} className="footer-logo"/>
                    <img src={ins} onClick={() => {window.open('https://www.instagram.com/bobkong96/')}} className="footer-logo"/>
                </div> */}
            </div>
            <div className='footer-half-div'>
                <p id='built-info'>Copyright @ 2022 Lingshuang Kong</p>
                <p id='built-info'>Built with React and passion</p>
            </div>
        </div>
    </div>);
}

export default Footer;