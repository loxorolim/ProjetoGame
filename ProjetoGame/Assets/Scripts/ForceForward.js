#pragma strict
var force: float;
function Start () {

}

function Update () {

	
}
function OnCollisionStay(collision : Collision) 
{
	// Debug-draw all contact points and normals
	for (var contact : ContactPoint in collision.contacts)
	 {
		Debug.DrawRay(contact.point, contact.normal, Color.white);
	}
	if (collision.gameObject.tag == "Player")
	{
		print("Colidiu");
		collision.gameObject.transform.rigidbody.AddForce (0, 0, force);

	}
}