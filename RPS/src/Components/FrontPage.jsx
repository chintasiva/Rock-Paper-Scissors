import React, { useState } from 'react'
import "../Styles/FrontPage.css"
import { useNavigate } from 'react-router-dom'
// import sound from "../backgroundscore.mp3"
import btnscore from "../btnscore.mp3"
const FrontPage = () => {
    const [load, setLoading] = useState(false)
    const navigate = useNavigate();

    // sound.loop(true)



    const handleClick = () => {

        new Audio(btnscore).play()

        setLoading(!load)
        setTimeout(() => {
            navigate('/game');
            // const audio = new Audio(sound)
            // audio.loop = true
            // audio.play()
        }, 4000);
    }

    return (
        <div id='bod'>
            <div className='container'>
                <img src='https://i.ibb.co/dGyC5fY/newnrm.gif' alt='img' />
                <img src='https://i.ibb.co/vqbNmxw/newrev.gif' alt='imgrev' />
            </div>
            <div>
                {
                    load ? <img id='fight' src="https://i.ibb.co/KNxBGYp/fight.gif" alt="" /> : <button id='btn' onClick={handleClick}>
                        Start Game
                    </button>
                }

            </div>
        </div>
    )
}

export default FrontPage