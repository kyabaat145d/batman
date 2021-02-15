class drops{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0 
        }
        this.body = Bodies.rectangle(x, y, 2, 2, options);
        this.width = 2;
        this.height = 2;
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
        if (this.body.position.y >= 1500){
            this.body = null;
        }
    }
}