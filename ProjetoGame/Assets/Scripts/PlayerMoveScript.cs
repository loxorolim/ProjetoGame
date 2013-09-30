using UnityEngine;
using System.Collections;

public class PlayerMoveScript : MonoBehaviour {
	
	public float speed = 0.01f;
	public float acceleration = 30;
	private Vector2 amountToMove;
	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void Update () {
		
		if (Input.GetKey (KeyCode.DownArrow))
		{
			print("Teste!");
			transform.rigidbody.AddForce (0, 0, -10);
			//transform.rigidbody.AddForce (100, 0, 100);
		
		}
		if (Input.GetKey (KeyCode.LeftArrow))
		{
			print("Teste!");
			transform.rigidbody.AddForce (-10, 0, 0);
			
			//transform.rigidbody.AddForce (100, 0, 100);
		
		}
		if (Input.GetKey (KeyCode.RightArrow))
		{
			print("Teste!");
			transform.rigidbody.AddForce (10, 0, 0);
			
			//transform.rigidbody.AddForce (100, 0, 100);
		
		}
		if (Input.GetKey (KeyCode.UpArrow))
		{
			print("Teste!");
			transform.rigidbody.AddForce (0, 0, 10);
			//transform.rigidbody.AddForce (100, 0, 100);
		
		}
		
	
	}
}
