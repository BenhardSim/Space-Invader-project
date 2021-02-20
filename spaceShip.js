class Ship {
    constructor(){
        this.x = width/2
        this.y = height*0.85
        this.xspeed = 0;
        this.yspeed = 0;
        
    }

    render(){
        imageMode(CENTER)
        image(spaceShip,this.x,this.y,100,100)
    }

    dir(xdir,ydir){
        this.xspeed = xdir;
        this.yspeed = ydir;
    }

    move(){
        this.x = this.x + this.xspeed*9
    }
}