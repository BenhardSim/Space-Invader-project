class Laser  {
    constructor(x,y){
        this.xb = x
        this.y = y
        this.r = 10
    }

    update(){
        this.y = this.y - 3
    }

    render(){
        noStroke()
        fill(255,0,0)
        circle(this.xb,this.y,this.r)
    }
}