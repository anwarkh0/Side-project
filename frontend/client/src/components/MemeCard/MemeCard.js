import Styles from "./MemeCard.module.css"
import { Link } from "react-router-dom";

const MemeCard = ({ memeData }) => {
    return (
        <Link to={`/meme/${memeData.id}`}>

            <main className={Styles.main}>

                <article className={Styles.articleCard}>
                    <img src={`http://localhost:5000/${memeData.image}`} alt="MemeImage" />
                    <div className={Styles.cardWrapper}>
                        <div className={Styles.cardDetails}>
                            <p>{memeData.User.firstName} {memeData.User.lastName}</p>
                        </div>
                        <p>{memeData.caption}</p>
                    </div>

                </article>
            </main>
        </Link>
    );
};
export default MemeCard

