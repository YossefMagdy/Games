

export class displayGames{
    constructor(res){
        this.data=res
        this.display(this.data)
    }

    display(data="MMORPG"){
        
        let Des=data[0].short_description
        
        let temp=""
        for(let i=0;i<data.length;i++){
            temp+=
            `
            <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="game-box border-5 border border-dark rounded-3" GameId="${data[i].id}">
            <div class="game-describtion p-3">
              <div class="image overflow-hidden rounded-3">
                <img src="${data[i].thumbnail}" class="w-100" alt="">
              </div>
              <div class="text">
                <div class="div d-flex justify-content-between mt-3">
                  <h2 class="text-white ">${data[i].title}</h2>
                  <button class="btn text-white btn-sm">Free</button>
                </div>
                <p class=" text-white mt-3 text-center text-white-50">${data[i].short_description.split(" ", 5)}</p>
              </div>
            </div>
            <div class="game-category border-5 border-top border-dark">
            <div class="d-flex justify-content-between p-3">
            <div><p class="text-white px-2 py-2 d-flex align-items-center rounded-3">${data[i].genre}</p></div>
            <div><p class="text-white px-2 py-2 d-flex align-items-center rounded-3">${data[i].platform}</p></div>
          </div>
            </div>
            </div>
          </div>
            `
        }
        $("#GameBox").html(temp)
    }
}

export class displayDetails{
    constructor(res){
        this.display(res)
        this.DetailsElemnt=$(".game-detail")
        this.Opendetails()
    }
    Opendetails(){
        this.DetailsElemnt.removeClass("d-none")
        $(".game-market").addClass("d-none")
        document.addEventListener("keyup",(el)=>{
            if(el.key=="Escape"){
                this.DetailsElemnt.addClass("d-none")
            $(".game-market").removeClass("d-none")
            }
        })
        $("#close").click(()=>{
            this.DetailsElemnt.addClass("d-none")
            $(".game-market").removeClass("d-none")
        })
    }
    display(res){
      let  temp=""
      temp+=
      `
      <div class="container text-white mt-5">
    <h2>Details Game</h2>
    <div class="row">
        <div class="col-md-4">
          <div class="image p-3">
            <img src="${res.thumbnail}" class="w-100"  alt="">
          </div>
        </div>
        <div class="col-md-8">
          <div class="info p-3">
            <h2>Title: ${res.title}</h2>
            <p>Category: <span class="px-2 rounded-3">${res.genre}</span></p>
            <p>Platform: <span class="px-2 rounded-3">${res.platform}</span></p>
            <p>Status: <span class="px-2 rounded-3" >${res.status}</span></p>
  
            <p class=" description">${res.description}</p>
            <button  class="GotoGamePage btn text-white">Show Game</button>
          </div>
        </div>
    </div>
    <i class="fa-solid fa-xmark fa-2x text-white" id="close"></i>
  </div>
      
      `
      $(".game-detail").html(temp)
      $(".GotoGamePage").click((el)=>{
        window.open(res.freetogame_profile_url)
      })
    }
}

