


function d100()
{return Math.floor(Math.random() * 100) + 1}; // returns a random integer from 1 to 100

shoot = prompt("quel est ton score (pourcentage) pour les armes automatiques")
shoot = Number(shoot)
for (i=0;i<=5;i++) {
	
	roll=d100()
	if (roll<shoot){result ="you hit"} else {result = "you miss"}
	
	document.write("<br> Bonjour Gab voici du roll de pourcentage <br>" + result)
	}

