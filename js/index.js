import {game} from "./Games.js"

let gamex=new game()

$(".nav-link").click(function(){
    $(this).addClass("activex")
    $(this).parent().siblings().children().removeClass("activex")
})
