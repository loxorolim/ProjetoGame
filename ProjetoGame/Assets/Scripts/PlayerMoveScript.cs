using UnityEngine;
using System.Collections;

public class PlayerMoveScript : MonoBehaviour {
	
	public bool MoveUp = true;
	public bool MoveDown = true;
	public bool MoveLeft = true;
	public bool MoveRight = true;
	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void Update () {
		
		if (Input.GetKey (KeyCode.DownArrow)&& MoveDown)
		{
			//print("Teste!");
			transform.rigidbody.AddForce (0, 0, -10);
			//transform.rigidbody.AddForce (100, 0, 100);
		
		}
		if (Input.GetKey (KeyCode.LeftArrow)&& MoveLeft)
		{
			//print("Teste!");
			transform.rigidbody.AddForce (-10, 0, 0);
			
			//transform.rigidbody.AddForce (100, 0, 100);
		
		}
		if (Input.GetKey (KeyCode.RightArrow)&& MoveRight)
		{
			//print("Teste!");
			transform.rigidbody.AddForce (10, 0, 0);
			
			//transform.rigidbody.AddForce (100, 0, 100);
		
		}
		if (Input.GetKey (KeyCode.UpArrow)&& MoveUp)
		{
			//print("Teste!");
			transform.rigidbody.AddForce (0, 0, 10);
			//transform.rigidbody.AddForce (100, 0, 100);
		
		}
		/*if (Input.GetKeyUp (KeyCode.Space))
		{
			print("Teste!");
			
			
				transform.rigidbody.AddForce (0, 100, 0);
				//pulou = true;
				//transform.rigidbody.AddForce (100, 0, 100);
			
			}
				
		}
		*/
		
		
	}
}
