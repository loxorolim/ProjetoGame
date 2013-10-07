#pragma strict
var distToGround: float;
var jumpSpeed = 10; 
var jump = 200;
function Start(){
  // get the distance to ground
  distToGround = collider.bounds.extents.y;
}
 
function IsGrounded(): boolean {
  return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
}
 
function Update () {
  if (Input.GetKeyDown(KeyCode.Space) && IsGrounded()){
    //rigidbody.velocity.y = jumpSpeed;
    rigidbody.AddForce (0, jump, 0);
  }
}