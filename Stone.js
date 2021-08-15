class Stone
{

    constructor(x,y)
    {
       var options=
       {
           restitution:0.8,
           friction:0.9,
           density:12
       }
       this.body=Bodies.rectangle(x,y,50,50,options);
       this.width=120;
       this.heigth=130;
       World.add(world.this.body);
    }

    display()
    {
        var stonePos=thisbody.position;
        var angle=this.body.angle;
        push();
        translate(stonePos.x,stonePos.y);
        rectMode(CENTER);
        strokeWeight(4);
        strokeWeight("black");
        fill("brown");
        rect(0,0,thiswidth,this.heigth);
        pop();

    }
}