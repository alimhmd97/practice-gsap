'use client';
import { useGSAP } from "@gsap/react";
import { cocktailLists } from "../navbar/consts";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
export default function Cocktail() {
    useGSAP(() => {
     const tl=gsap.timeline({
        scrollTrigger:{
            trigger:'#cocktails',
            start:'top 30%',
            end:'bottom 80%',
            scrub:true,
        }
     }).from('.cocktail-left-leaf',{
        y:100,
        x:-100,
        
     }).from('.cocktail-right-leaf',{
        y:100,
        x:100,
        
     })
    })
  return (
    <div className="noisy" id="cocktails">
        <img src="/images/cocktail-left-leaf.png" alt="cocktail-left-leaf"
         className="cocktail-left-leaf" id="c-left-leaf" />
         <img src="/images/cocktail-right-leaf.png" alt="cocktail-right-leaf"
         className="cocktail-right-leaf" id="c-right-leaf" />
         <div className="list">
            <div className="popular">
                <h2>Most Popular Cocktails</h2>
                <ul>
                    {cocktailLists.map((cocktail) => (
                        <li key={cocktail.name}>
                            <div className="md:me-28">
                            <h3>{cocktail.name}</h3>
                            <p>{cocktail.country} | {cocktail.detail}</p>
                            </div>
                            <span>{cocktail.price}</span>

                        </li>
                    ))}
                </ul>
            </div>
            <div className="loved">
                <h2>Most Loved Cocktails</h2>
                <ul>
                    {cocktailLists.map((cocktail) => (
                        <li key={cocktail.name}>
                            <div className="me-28">
                            <h3>{cocktail.name}</h3>
                            <p>{cocktail.country} | {cocktail.detail}</p>
                            </div>
                            <span>{cocktail.price}</span>

                        </li>
                    ))}
                </ul>
            </div>
         </div>
    </div>
  )
}
