class launcher
{
	constructor(body, anker)
	{
		var options={
			bodyA:body, 
            pointB:anker,
            stiffness:0.4,
            lenght:1			
			}
		this.bodyA=body;
		this.pointB=anker;
		this.launcher = Constraint.create(options)
 		World.add(world, this.launcher);

	}
    attach(body){
        this.launcher.bodyA = body
    }
    fly(){
        this.launcher.bodyA = null
    }
	display()
	{
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position
            var pointB = this.pointB
            strokeWeight(5)
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
			
			
	}

}