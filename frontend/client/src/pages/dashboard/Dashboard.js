import { useContext, useEffect, useState } from "react"
import useApi from "../../components/Hooks/useApi";
import { AuthContext } from "../../components/Context/AuthContext";

import Styles from "./dashboard.module.css"
const Dashboard = () => {
    const { apiCall } = useApi()
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await apiCall({ url: `/meme/getmemebyuser/${user.id}`, method: 'get' })
                setData(response);
                setLoading(false);
            } catch (error) {
                console.log('Error fetching Meme:', error);
                setLoading(false);
            }
        };
        fetchData();



    }, []);
    console.log("first", data)
    console.log("sada",user)
    return (

        <main className={Styles.main}>


            <div>
                {loading ? (
                    <img src="{imageLoading}" alt="loading" />
                ) : (


                    user && data && data.map(data => (
                        <article className={Styles.articleCard}>
                            <img src={`http://localhost:5000/${data.image}`} alt="MemeImage" />
                            <div className={Styles.cardWrapper}>
                                <div className={Styles.cardDetails}>
                                    <p>{user.firstName} {user.lastName}</p>
                                </div>
                                <p>{data.caption}</p>
                            </div>

                        </article>
                    ))


                )}
            </div>
        </main>
    )
}


export default Dashboard