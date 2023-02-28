import {displayDetails} from "./UI.JS"
export class GameDetail{
    constructor(id){
    this.GetResp(id)
       
    }
    



    async GetResp(id){
        $(document).ready(async function(){
            $(".ready").show().fadeOut(1000)
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '62014bf3e3msha5f5aa8e4c71fafp109ee7jsn444100edc65e',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            let res=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
            res=await res.json()
            let displayDetailx=new displayDetails(res)
        })

    }
}