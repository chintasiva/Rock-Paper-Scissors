import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import "../Styles/GamingCarousel.css"
import rock from "../r.png"
import paper from "../p.png"
import scissors from "../s.png"
import { Link } from 'react-router-dom'

import tap from "../assets/tapsound.mp3"

const SliderData = [
  {
    image1: rock,
    image2: "https://pngimg.com/uploads/stone/stone_PNG13598.png",
    title: "ROCK",
    desc: "Rock Vs Scissors: Rock Wins!",
    note: "Rock Vs Rock. Leads to Tie!"
  },
  {
    image1: paper,
    image2: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-misc9-kut7672-chim.png?auto=&bg=transparent&con=3&cs=srgb&dpr=1&fm=png&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1400&s=0190f6e72057bc3fa4fdff75c4aa4f24",
    title: "PAPER",
    desc: "Paper Vs Rock: Paper Wins!",
    note: "Paper Vs Paper. Leads to Tie!"
  },
  {
    image1: scissors,
    image2: "https://th.bing.com/th/id/R.5483faed3b107b03f86b8a89f87c2c1f?rik=iTz8xaUtn%2fDSSA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fscissors-png-open-2000.png&ehk=zI9620MNlO1dy8s4jXf2HkUNWGlMfOaLidSiWNqcziA%3d&risl=&pid=ImgRaw&r=0",
    title: "SCISSORS",
    desc: "Scissors Vs Paper: Scissors Wins!",
    note: "Scissors Vs Scissors. Leads to Tie!"
  }
]

const Instructions = () => {
  const [current, setCurrent] = useState(0)
  const length = SliderData.length

  const nextSlide = () => {
    let audio = new Audio(tap)
    audio.play()
    setCurrent(current == length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    let audio = new Audio(tap)
    audio.play()
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  console.log(current)

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {

    return null
  }

  return (
    <section className='slider'>
      <Link to={"/game"} id='nav'>Back To Game</Link>
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      {
        SliderData.map((el, i) => {
          return (
            <div className={i === current ? "slide active" : "slide"} key={i}>
              {
                i === current && (<div className='image'>
                  <div className='img_div'>
                    <img src={el.image1} alt={el.image1} />
                    <img src={el.image2} alt={el.image2} className='img2' />
                  </div>
                  <h1 className='head'>{el.title}</h1>
                  <p className="desc">{el.desc}</p>
                  <p className="note">{el.note}</p>
                </div>)
              }

            </div>

          )
        })
      }
    </section>
  )
}

export default Instructions