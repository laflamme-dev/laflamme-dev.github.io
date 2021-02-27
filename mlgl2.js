//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    //creating a new paragraph
    var p1 = document.createElement("p");
    var node1 = document.createTextNode("placeholder");
	var node2 = document.createTextNode(" ... continuing this paragraph through another text node...");
    //adding the text to the paragraph
    p1.appendChild(node1);
	// appending to the same paragraph (no line break)
	p1.appendChild(node2);


    var p2 = document.createElement("p");
	p2.innerHTML="placeholder.."
    
	var p3 = document.createElement("p")
	p3.innerHTML="A roll on d% is done, and if less than the shooting score, it is a hit"

    var demo_div = document.getElementById("demo");
	demo_div.style.width='500px';
	demo_div.style.color="blue";
    //adding the paragraph to the div
    demo_div.appendChild(p1);
	demo_div.appendChild(p2);
	demo_div.appendChild(p3);
	

	console.log("onload ok - d100 function loaded, and default shooting")

};

function d100(){return Math.floor(Math.random() * 100) + 1}; // returns a random integer from 1 to 100
var user_shooting_skill=50


function d2(){console.log("ran")};

function request_score() {
	shooting = prompt("quel est ton score (pourcentage) pour les armes automatiques (enter pour 50)")
	if (shooting =="") {shooting=50} 
	shooting = Number(shooting) 
	console.log("rs ok")
	return shooting
};

function basic_alert(){alert("alert!")}

function request_score_from_user() {
	 user_shooting_skill = request_score()
};

function fire() {
	var demo_div = document.getElementById("demo");
	roll=d100()
	result = "Gab skill is "+String(user_shooting_skill)+". " 
	result_color="green"
	if (roll<user_shooting_skill){result =result+"Gab hits with "+String(roll)} else {result = result+"Gab misses with "+String(roll) ; result_color="red";}

    var pfire = document.createElement("p");
	
	pfire.style="font-size:30px;"
	pfire.style.color=result_color
	pfire.innerHTML=result
	demo_div.appendChild(pfire);
	console.log("fire function ran")

	};