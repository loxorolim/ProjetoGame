#pragma strict

function Start () {

}

function Update () {

}
function OnTriggerEnter(collision : Collider) 
{
	var objs = GameObject.FindGameObjectsWithTag("Platform");
	for(var i = 0; i < objs.length;i++)
	{
		objs[i].GetComponent(PlataformMovement).setMove(true);
	} 
}