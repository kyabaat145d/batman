class man{
    constructor(x,y){
        var options = {
            'restitution':0.1,
            'friction':0.8,
            'density':1.0 
        }
        this.body = Bodies.rectangle(x, y, 25, 50, options);
        this.width = 25;
        this.height = 50;
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);  
        rect(pos.x, pos.y, this.width, this.height);


    }

}