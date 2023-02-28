import {displayGames} from "./UI.JS"
import {GameDetail} from "./Detail.js"

export class game{
    constructor(){
       this.NavLink=Array.from(document.querySelectorAll(".nav-link"))
      
       this.getapi("MMORPG")
        this.getCateg()
    }

    getCateg(){
        this.NavLink.forEach((el)=>{
            el.addEventListener("click",(el)=>{
               let categ= el.target.getAttribute("GetCateg")
               this.getapi(categ)
            })
        })
      
    }
    async getapi(categ){
        $(document).ready(async function(){
            $(".ready").fadeOut(1000)
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '62014bf3e3msha5f5aa8e4c71fafp109ee7jsn444100edc65e',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            let res=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categ}`, options)
            res=await res.json()
            let UI=new displayGames(res)
    
            this.OpenDetail=Array.from(document.querySelectorAll(".game-box"))
            this.OpenDetail.forEach((el)=>{
                el.addEventListener("click",function(){
                    let id=this.getAttribute("GameId")
                    let Gamex=new GameDetail(id)
                })
            })
        })
    }
}
