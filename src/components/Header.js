import '../App.css';
import LinkedInIcon from '../assets/social-media/linkedin.png';
import EmailIcon from '../assets/social-media/email.png';
import GitHubIcon from '../assets/social-media/github.png';

function Header() {
    
    return (
       <div className="Header">
            {/* LinkedIn Icon: https://icons8.com/icons/set/linkedin--static--white from Icons8 */}
            <a href="https://www.linkedin.com/in/louiszhangg/" target="_blank"><img src={LinkedInIcon} alt="LinkedIn Icon" className="social-media-icons"/></a>
            {/* Email Icon: https://icons8.com/icons/set/email--static--white from Icons8 */}
            <a
                href="https://mail.google.com/mail/?view=cm&to=holozhang5@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={EmailIcon} alt="Email Icon" className="social-media-icons"/>
            </a>
            {/* GitHub Icon: https://icons8.com/icons/set/github--static--white from Icons8 */}
            <a href="https://github.com/louiszhangg" target="_blank"><img src={GitHubIcon} alt="GitHub Icon" className="social-media-icons"/></a>
       </div>
    )
}

export default Header; 