import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/GamePage.css"
import thud from "../assets/bell.wav"
import winning from "../assets/winningmoment.wav"
import sadending from "../assets/sadending.wav"
import tiemagic from "../assets/tiemagic.wav"


import rockleft from "../assets/rocklefthand.gif"
import rockright from "../assets/rockrighthand.gif"

import paperleft from "../assets/paperlefthand.gif"
import paperright from "../assets/paperrighthand.gif"


import scissorleft from "../assets/scissorlefthand.gif"
import scissorright from "../assets/scissorsrighthand.gif"

import lefthand from "../assets/rpsleft.gif"
import righthand from "../assets/rpsright.gif"

import gamer from "../assets/gamerimage.png"
import robot from "../assets/robot.png"


import confetti from "canvas-confetti"
import Won from '../assets/won.png'


import lost from "../assets/Gameover.png"
import Tie from "../assets/Tiegame.png"
import { memo } from 'react'

const GamePage = () => {


  const [com, setCom] = useState("")
  const [rock, setRock] = useState(false)
  const [paper, setPaper] = useState(false)
  const [scissors, setScissors] = useState(false)
  const [click, setClick] = useState(false)
  let [playerscore, setPlayerScore] = useState(0)
  let [robotscore, setRobotScore] = useState(0)
  const [cor, serCor] = useState("")
  let [count, setCount] = useState(5)

  console.log(count)
  const AutoGeneration = () => {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * 3);
    setCom(choice[random]);
    // console.log("Original ONE" + com)
    serCor(com)
  }
  useEffect(() => {
    AutoGeneration()
  }, [])

  // console.log("Attemped to print :" + com)

  const handleRock = (e) => {
    let audio = new Audio(thud)
    audio.play()
    let choosen = e.target.value
    setClick(true)
    setTimeout(() => {

      if (choosen === "Rock") {
        setRock(true)
        setPaper(false)
        setScissors(false)
        AutoGeneration()
        ScoreGenerator(choosen, com)
        setClick(false)
        count -= 1
        setCount(count)
        // console.log("NOT Hanlde Rock fun Original ONE :" + com)
      }
    }, 1500)
  }

  const handlePaper = (e) => {
    let audio = new Audio(thud)
    audio.play()
    // console.log(e.target.value)
    let choosen = e.target.value
    setClick(true)
    setTimeout(() => {

      if (choosen === "Paper") {
        setPaper(true)
        setRock(false)
        setScissors(false)
        AutoGeneration()
        ScoreGenerator(choosen, com)
        // console.log("NOT Hanlde Paper fun Original ONE :" + com)
        setClick(false)
        count -= 1
        setCount(count)
      }
    }, 1500)
  }

  const handleScissors = (e) => {
    let audio = new Audio(thud)
    audio.play()
    let choosen = e.target.value
    setClick(true)
    setTimeout(() => {

      if (choosen === "Scissors") {
        setScissors(true)
        setRock(false)
        setPaper(false)
        AutoGeneration()
        ScoreGenerator(choosen, com)
        // console.log("NOT Hanlde Scissors fun Original ONE :" + com)
        setClick(false)
        count -= 1
        setCount(count)
      }
    }, 1500)

  }


  // console.log(com)


  const ScoreGenerator = (player, robot) => {
    if (player === robot) {
      playerscore += 0;
      robotscore += 0
    } else if (player === "Rock" && robot === "Scissors") {
      playerscore += 1
      robotscore += 0
    } else if (player === "Paper" && robot === "Rock") {
      playerscore += 1
      robotscore += 0
    } else if (player === "Scissors" && robot === "Paper") {
      playerscore += 1
      robotscore += 0
    } else {
      playerscore += 0
      robotscore += 1
    }
    setPlayerScore(playerscore)
    setRobotScore(robotscore)
  }


  var end = Date.now() + (2 * 1000);

  var colors = ['#ff0000', '#0000ff', "#ee82ee", '#ffff47'];

  function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 100,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 100,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  function ScoreComparing() {
    if (count === 0 && playerscore > robotscore) {

      frame()
    }
  }
  ScoreComparing()


  const Reset = () => {
    count = 5
    playerscore = 0
    robotscore = 0
    setCount(count)
    setPlayerScore(playerscore)
    setRobotScore(robotscore)
  }



  const ResultAudio = () => {
    if (count === 0 && playerscore > robotscore) {
      let audio = new Audio(winning)
      audio.play()
    } else if (count === 0 && playerscore < robotscore) {
      let audio = new Audio(sadending)
      audio.play()
    } else if (count === 0 && playerscore === robotscore) {
      let audio = new Audio(tiemagic)
      audio.play()
    }
  }
  ResultAudio()


  return (
    <div id='main_div'>
      <div className="game_div">
        {/* <div id='settings'>
          < FiSettings id="dropdown" />
        </div> */}
      </div>
      <div className="profiles">
        <div id='gamer'>
          <div>
            <img src={gamer} alt="gamer profile" />
          </div>
          <div className="score">
            <p className='font'>Chances: {count}</p>
            <p className='font'>Score:{playerscore}</p>
          </div>
        </div>
        <div id='robot'>
          <div className="score">
            <p className='font'>Chances: {count}</p>
            <p className='font'>Score:{robotscore}</p>
          </div>
          <div>
            <img src={robot} alt="robot" />
          </div>

        </div>
      </div>
      <div id="slide">
        {/* <div>
          {
            setting ? <RxSpeakerLoud className='sound' onClick={hanldeToggle} /> : <RxSpeakerOff className='sound' onClick={hanldeToggle} />
          }
        </div> */}
        <div>
          <Link to={"/instructions"} > ❔ Help </Link>
        </div>
      </div>

      <div className="imgs">
        <div>
          {
            click ? <img src={lefthand} alt="" /> : rock ? <img src={rockleft} alt='normalhand' /> :
              paper ? <img src={paperleft} alt='normalhand' /> : scissors ? <img src={scissorleft} alt='normalhand' /> : <img src={rockleft} alt='normalhand' />
          }
        </div>

        {/* Right hand functioning */}

        <div>
          {
            click ? <img className='moving_img' src={righthand} alt="" /> : cor && cor === "Rock" ? <img src={rockright} className='moving_img' alt='rockhand' /> : cor && cor === "Paper" ? <img src={paperright} className='moving_img' alt='paperhand' /> : cor && cor === "Scissors" ? <img src={scissorright} className='moving_img' alt='scissorshand' /> : <img src={rockright} className='moving_img' alt='normalhand' />
          }
        </div>


      </div>
      <div className="btns">
        <button value={"Rock"} disabled={count === 0 ? true : false} onClick={handleRock}>✊</button>
        <button value={"Paper"} disabled={count === 0 ? true : false} onClick={handlePaper}>🫱</button>
        <button value={"Scissors"} disabled={count === 0 ? true : false} onClick={handleScissors}>✌️</button>
      </div>

      {
        count === 0 && playerscore > robotscore ? <img id="won" src={Won} alt="img" /> : count === 0 && playerscore < robotscore ? <img src={lost} id="won" alt="losted" /> : count === 0 && playerscore === robotscore ? <img id="won" src={Tie} alt="img" /> : null

      }
      {/* <img id="won" src={Tie} alt="img" /> */}
      <div >
        {
          count === 0 ? <button className='jump' onClick={Reset}>Play Again</button> : null
        }
      </div>
    </div>
  )
}

export default memo(GamePage)