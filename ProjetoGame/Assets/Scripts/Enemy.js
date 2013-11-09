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
		print("Colidiu");
	//var playerrad = collision.gameObject.GetComponent(SphereCollider);
	//var enemyrad = gameObject.GetComponent(SphereCollider);
		if( size <= collision.gameObject.GetComponent(PlayerProperties).getSize())
		{
			collision.gameObject.GetComponent(PlayerProperties).increaseSize(size/5);
			this.gameObject.transform.position = new Vector3(1000,1000,1000);
			print("Esfera maior!");
		}
		else
		{
		//RESETA O MAPA! MORREU!
			var objs = GameObject.FindGameObjectsWithTag("Enemy");
			for(var i = 0; i < objs.length;i++)
			{
				objs[i].GetComponent(Enemy).resetConfigurations();
			} 
			collision.gameObject.GetComponent(PlayerProperties).resetConfigurations();
		}
	}
}
function resetConfigurations()
{	
	size = originalSize;
	this.gameObject.transform.localScale = Vector3(size,size,size);
	this.gameObject.transform.position = originalPosition;
	this.gameObject.rigidbody.velocity = Vector3.zero;	
	this.gameObject.rigidbody.angularVelocity = Vector3.zero;
}