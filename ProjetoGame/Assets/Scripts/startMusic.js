#pragma strict
var music:AudioSource;
function Start () {

}

function Update () 
{


}
function OnTriggerEnter (other : Collider) {
    // next line requires an AudioSource component on this gameobject
    if(other.gameObject.tag == "Player")
	    music.Play();
}
