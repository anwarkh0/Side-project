import { Link } from "react-router-dom"
import notFound from "../../assets/images/404_01-min.jpg"
import style from "./NotFound.module.css"
const NotFound = () => {
    return (
        <div className={style.content}>

            <div className={style.notFound}>
                <Link to="/notfound">

                    <img src={notFound} alt="NotFoUnD" />
                </Link>
            </div>
        </div>
    )
}

export default NotFound