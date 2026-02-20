'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
import Link from "next/link";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
        const videoRef=useRef<HTMLVideoElement>(null)
const isMobile=useMediaQuery({maxWidth: 768})
    useGSAP(() => {
        const heroSplit=new SplitText('.title',{type:'chars,words'})
        const paragraghSplit=new SplitText('.subtitle',{type:'lines'})
        heroSplit.chars.forEach((char,index)=>{
            char.classList.add('text-gradient')
        })
        gsap.from(heroSplit.chars,{
        yPercent:100,
            duration:1.8,
            ease:'expo.Out',
            stagger:0.06,
        opacity:'0'
    }
        )
        gsap.from(paragraghSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:'expo.Out',
            stagger:0.06,
        delay:'1'}
        )

gsap.timeline({
    scrollTrigger:{
        trigger:'#hero',
        start:'top top',
        end:'bottom top',
        scrub:true,
    }
}).to('.left-leaf',{
    y:-200
},0).to('.right-leaf',{
    y:200
},0)
const startValue = isMobile ? 'top 50%' : 'center 60%'
const endValue = isMobile ? ' 120% top' : 'bottom top'

const video = videoRef.current
if (video) {
  const scrollProgress = { value: 0 }
  const tl = gsap.timeline({
    scrollTrigger: {
      pin: true,
      trigger: video,
      start: startValue,
      end: endValue,
      scrub: true,
    },
  })
  tl.to(scrollProgress, {
    value: 1,
    ease: 'none',
    onUpdate: () => {
      if (video.duration && !Number.isNaN(video.duration)) {
        video.currentTime = video.duration * scrollProgress.value
      }
    },
  })
}

},[])

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="hero-left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="hero-right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool, Crisp, Classic</p>

              <p className="subtitle">
                Sip the Spirit
                <br />
                of Summer
              </p>
            </div>
          </div>
          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of flair, and timeless
              recipes — designed to delight.
            </p>
            <Link href="#cocktails">View Cocktails</Link>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video ref={videoRef} src="/videos/input.mp4" playsInline muted preload="auto" />
      </div>
    </>
  );
}
