class Alien {
    constructor(x,y){
        this.xa = x;
        this.y = y;
        this.r = 70
    }

    render(){
        imageMode(CENTER)
        image(alien,this.xa,this.y,this.r,this.r)
    }
}