#pragma strict
var follow : Transform;
var distx: float;
var disty: float;
var distz: float;
function LateUpdate() {
    transform.position.x = follow.position.x + distx;
    transform.position.y = follow.position.y + disty;
    transform.position.z = follow.position.z + distz;
}

function Start () {
	
}

function Update () {

}