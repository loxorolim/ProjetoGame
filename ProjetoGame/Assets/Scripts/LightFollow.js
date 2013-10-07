#pragma strict
var follow : Transform;
 
function LateUpdate() {
    transform.position.x = follow.position.x;
    transform.position.y = follow.position.y+5;
    transform.position.z = follow.position.z;
}

function Start () {

}

function Update () {

}