class Player{
    constructor(){
        this.name = null
        this.distance = 0
        this.index = null

    }

    getCount(){
        var cRef = db.ref("playercount")
        cRef.on("value",(data)=>{
            playerCounter = data.val()
        })
    }

    updateCount(num){
        db.ref("/").update({
            playercount:num
        })
    }

    update(){
        var playerIndex = "players/player"+this.index
        db.ref(playerIndex).set({name:this.name,distance:this.distance})
    }

    static getPlayerinfo(){
        db.ref("players").on("value",(data)=>{
            allPlayers = data.val()
        })
        

    }
}