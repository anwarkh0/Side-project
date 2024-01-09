import { useParams } from "react-router-dom";
import Styles from './Meme.module.css'
import loader from '../../assets/gif/memeGif.gif'
import axios from "axios";
import { useState, useEffect } from 'react'
const Meme = () => {
    const { id } = useParams()
    const [meme, setMeme] = useState(null)
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        const fetchMeme = async () => {
            setisLoading(true)
            try {
                const meme = await axios.get(`http://localhost:5000/meme/getOne/${id}`)
                if (meme) {
                    setMeme(meme.data)
                    setisLoading(false)
                }
                else {
                    setMeme(null)
                    setisLoading(false)
                }
            }
            catch (err) {
                setisLoading(false)

            }
        }
        fetchMeme();
    }
        , [])

    const renderContent = () => {
        if (isLoading) return <div className={Styles.container}><img src={loader} alt="loading" /></div>;
        // if (isError) return <Error />;
        if (meme && !isLoading) return (
            <article className={Styles.memeContainer}>
                <img
                    alt="memeImage"
                    src={`http://localhost:5000/${meme.data.image}`} />
            </article>);

        return <div className={Styles.container}><h1>No meme found</h1></div>;
    };

    return (
        renderContent()
    )
}

export default Meme