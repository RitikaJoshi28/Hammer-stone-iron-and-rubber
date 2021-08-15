class Iron
{

    constructor()
    {

        var options=
        {
             'restituion':0.8,
             'friction':3,
             'density':30
        }
    this.body=Bodies.rectangle(x,y,50,50,options);
   this.width=100;
   this.height=60;
   World.add(world.this.body);
    }

    display()
    {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
       strokeWeight(4);
       strokeWeight("black");
       stroke("green");
    fill("grey");
    rectMode(0,0,this.width,this.height);
    pop();
    }
}


