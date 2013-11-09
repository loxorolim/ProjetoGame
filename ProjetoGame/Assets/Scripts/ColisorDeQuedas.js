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
			var objs = GameObject.FindGameObjectsWithTag("Enemy");
			for(var i = 0; i < objs.length;i++)
			{
				objs[i].GetComponent(Enemy).resetConfigurations();
			} 
			collision.gameObject.GetComponent(PlayerProperties).resetConfigurations();
			 
			   //returns GameObject[]
		print("Chegou!");
		//var playerrad = collision.gameObject.GetComponent(SphereCollider);
		//var enemyrad = gameObject.GetComponent(SphereCollider);
		//if( enemyrad.radius < playerrad.radius)
		//print("Esfera maior!");
		}
	}