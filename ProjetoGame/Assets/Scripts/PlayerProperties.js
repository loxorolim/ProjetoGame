#pragma strict

var size: float;
var originalSize: float;
var originalPosition: Vector3;
function Start () 
{
	size = this.gameObject.transform.localScale.x;
	originalSize = this.gameObject.transform.localScale.x;
	originalPosition = this.gameObject.transform.position;
}

function Update ()
 {

}
function increaseSize(s:float)
{
	size = size + s;
	this.gameObject.transform.localScale += Vector3(s,s,s);
	

}

function getSize()
{
	return size;
}
function resetConfigurations()
{
	size = originalSize;
	this.gameObject.transform.localScale = Vector3(size,size,size);	
	this.gameObject.transform.position = originalPosition;
	this.gameObject.rigidbody.velocity = Vector3.zero;
}