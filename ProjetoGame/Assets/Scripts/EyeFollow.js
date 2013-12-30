#pragma strict
var player:GameObject;
function Start () {
	player = gameObject.FindWithTag("Player");
}

function Update () 
{

	transform.LookAt(player.transform.position);
}