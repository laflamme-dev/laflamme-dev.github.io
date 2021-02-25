function d100()
{return Math.floor(Math.random() * 100) + 1}; // returns a random integer from 1 to 100

document.write("bonjour Gabriel")

shooting = prompt("quel est ton score (pourcentage) pour les armes automatiques (enter pour 50)")
if (shooting =="") {shooting=50}
shooting = Number(shooting)


	
	
function MyFunction() {
	document.write("<br> Fire !!")
	for (i=0;i<=5;i++) {
	
	roll=d100()
	//result=""
	result = "Your skill is "+String(shooting)+". " 
	if (roll<shooting){result =result+"You hit with "+String(roll)} else {result = result+"You miss with "+String(roll)}
	document.write("<br>")
	
	document.write("<br> Bonjour Gab voici du roll de pourcentage <br>" + result)
	}
	}
