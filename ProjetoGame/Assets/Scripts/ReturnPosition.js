#pragma strict


var originalPosition: Vector3;
function Start () 
{

	originalPosition = this.gameObject.transform.position;
}

function Update ()
 {

}
function resetConfigurations()
{	
	this.gameObject.transform.position = originalPosition;

}