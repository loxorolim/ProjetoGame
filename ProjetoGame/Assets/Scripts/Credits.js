#pragma strict
//var newGame : GameObject;
//var howToPlay : GameObject;
//var credits : GameObject;
//var exit : GameObject;
function Start () {
//    newGame = GameObject.Find("NovoJogo");
//    howToPlay = GameObject.Find("HowtoPlay");
//    credits = GameObject.Find("Creditos");
//    exit = GameObject.Find("Sair");
}

function Update () {
//    newGame = GameObject.Find("NovoJogo");
//    howToPlay = GameObject.Find("HowtoPlay");
//    credits = GameObject.Find("Creditos");
//    exit = GameObject.Find("Sair");

}

function OnMouseDown (){
//    if (newGame){
//        Application.LoadLevel(1);
//    }else if(howToPlay){
//        Application.LoadLevel(2);
//    }else if(credits){
        Application.LoadLevel("Credits");
//    }else if(exit){
//        Application.Quit();
//    }
    
}