import MemeImage from "../../assets/images/image.jpg"
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <header className={Styles.header}>
            <nav className={Styles.nav}>
                <div className={Styles.imageTitle}>
                    <img src={MemeImage} alt="navImageMeme" className={Styles.imageMeme} />
                    <span>Meme Generator</span>
                </div>
                <ul className={Styles.linksWrapper}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/login">login</Link></li>
                </ul>
            </nav>
        </header>
    );
};
export default NavBar