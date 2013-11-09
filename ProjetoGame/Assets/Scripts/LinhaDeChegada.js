#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter(collision : Collision) {
		// Debug-draw all contact points and normals
		for (var contact : ContactPoint in collision.contacts) {
			Debug.DrawRay(contact.point, contact.normal, Color.white);
		}
		if (collision.gameObject.tag == "Player")
		{
			if( Application.loadedLevel + 1 < Application.levelCount )
   			 Application.LoadLevel( Application.loadedLevel + 1 );
		}
	}