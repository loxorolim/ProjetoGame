#pragma strict
var speed:float;
var x:boolean;
var y:boolean;
var z:boolean;

function Start () {

}

function Update () 
{
	if(x)
	transform.Rotate(speed*Time.deltaTime,0,0);
	if(y)
	transform.Rotate(0,speed*Time.deltaTime,0);
	if(z)
	transform.Rotate(0,0,speed*Time.deltaTime);
}