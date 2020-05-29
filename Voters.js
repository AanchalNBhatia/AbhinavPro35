class Voters    {
    constructor()   {
        this.index = null;
        this.email = null;
        this.response = null;
        this.voterName= null;
    }
    updateCount(count)  {
        database.ref('/').update({
            votersCount: count
        })
    }
    update()    {
        var voterIndex = "voter"+ this.index;
        database.ref('votersIndex').set({
          response: this.response,
          email: this.email,
          name: this.voterName  
        })
    }
    
}    	