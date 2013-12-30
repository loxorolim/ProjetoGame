#pragma strict
var pos1:GameObject;
var pos2:GameObject;
var speed:float;
var toFollow:GameObject;
var move: boolean;
var originalPosition: Vector3;

function Start ()
{
	toFollow = pos1;

	originalPosition = this.gameObject.transform.position;
}

function Update () 
{
	   
	   if(move)
	   {
	       transform.LookAt(toFollow.transform.position);
		   transform.Translate(Vector3.forward * speed*Time.deltaTime);
		   var distance = Vector3.Distance (transform.position, toFollow.transform.position);
		   if(distance < 0.5)
		   {
		   		if(toFollow.Equals(pos1))
		   			toFollow = pos2;
		   		else
		   			toFollow = pos1;
		   }
	   }
	   
}
function setMove(val)
{
	move = val;
}
function resetConfigurations()
{	
	this.gameObject.transform.position = originalPosition;
	setMove(false);

}