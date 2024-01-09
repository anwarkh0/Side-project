import { Link } from "react-router-dom"
import notFound from "../../assets/images/download.jpeg"
import style from "./NotFound.module.css"
const Notfound = () => {
    return (
        <div className={style.content}>

            <div className={style.notFound}>
                <Link to="/">

                    <img src={notFound} alt="NotFoUnD" />
                </Link>
            </div>
        </div>
    )
}

export default Notfound