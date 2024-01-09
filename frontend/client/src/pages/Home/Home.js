import Style from "./Meme.module.css"
import MemeCard from "../../components/MemeCard/MemeCard"
import axios from "axios"
import { useEffect, useState } from "react"
import imageLoading from "../../assets/gif/memeGif.gif"
const Meme = () => {

    const [memeData, setMemeData] = useState([])
    const [loggedin, setLoggedin] = useState(false)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get('http://localhost:5000/meme/getAll');
                setMemeData(response.data);
                setLoading(false);
            } catch (error) {
                console.log('Error fetching Meme:', error);
                setLoading(false);
            }
        };
        fetchData();


        
    }, []);

    console.log("meme", memeData)

    return (
        <div>
            <h1>All Meme</h1>

            <section className={Style.section}>
                <div>
                    {loading ? (
                        <img src={imageLoading} alt="loading" />
                    ) : (


                        memeData && memeData.data.map(meme => (
                            <MemeCard
                                key={meme.id}
                                memeData={meme}
                            />
                        ))


                    )}
                </div>

            </section>


        </div>
    )
}

export default Meme
