#pragma strict
var life : int = 3;
var fall : boolean;
function Start () {

}

function Update () {
if(transform.position.y <= -7){
	transform.position.x = -3.911;
	transform.position.z = 3;
	transform.position.y = 3;
	fall = true;
}else fall = false;
if (fall == true)life -=1;
print(life);
if (life < 1)Application.LoadLevel("Menu");
}