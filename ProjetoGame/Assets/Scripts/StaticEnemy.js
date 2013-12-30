#pragma strict

#pragma strict


function Start () 
{

}

function Update () {

}
 
function OnCollisionEnter(collision : Collision) 
{
	// Debug-draw all contact points and normals
	for (var contact : ContactPoint in collision.contacts)
	 {
		Debug.DrawRay(contact.point, contact.normal, Color.white);
	}
	if (collision.gameObject.tag == "Player")
	{

		//RESETA O MAPA! MORREU!
			var objs = GameObject.FindGameObjectsWithTag("Enemy");
			for(var i = 0; i < objs.length;i++)
			{
				objs[i].GetComponent(Enemy).resetConfigurations();
			} 
			objs = GameObject.FindGameObjectsWithTag("Platform");
			for(i = 0; i < objs.length;i++)
			{
				objs[i].GetComponent(PlataformMovement).resetConfigurations();
			} 
			collision.gameObject.GetComponent(PlayerProperties).resetConfigurations();
		
	}
}
