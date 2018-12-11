var createImg = document.createElement('img');
var gameContainer = document.getElementById('game-container');
var child = document.getElementById('description');


var title = document.getElementById('title');
var desc = document.getElementById('description');
var btnOne = document.getElementById('button1');
var btnTwo = document.getElementById('button2');
var btnThree = document.getElementById('button3');
var inv = document.getElementById('inventoryItem');

var supply = false;
var gas = false;
var customers = true;
var code = false;
var time = true;
var stash = false;


//pagina laden

function loadGame() {
	supply = false;
	gas = false;
	customers = true;
	code = false;
	time = true;
	stash = false;
	createImg.setAttribute('id' , 'img');
	gameContainer.insertBefore(createImg , child);
	document.getElementById('img').src = 'img/theheist.png';
	inv.style.display = 'none';
	btnTwo.style.display = 'none';
	btnThree.style.display = 'none';
	btnOne.innerHTML = 'START GAME';
	btnOne.setAttribute('onclick' , 'cafe()');
	title.innerHTML = 'The Heist';
	desc.innerHTML = 'Welkom bij “The heist” dit is een kleine adventure game waarbij je door middel van de juiste keuzes door het spel heen moet komen, als je de juiste keuzes maakt kan je door naar het volgende scherm (Let op! : Het spel heeft meerde "Game Over!" eindes dus het is mogelijk om de game opnieuw te spelen met een ander einde!)';
	console.log('Current level: Start screen');
}

loadGame();

//levels
//1
function cafe() {
	title.innerHTML = 'Cafe';
	desc.innerHTML = 'Je zit in het cafe, je hebt zojuist met je vrienden besproken om een bank te gaan beroven.';
	img.src = 'img/Cafe.jpg';
	btnOne.innerHTML = 'GA NAAR HUIS';
	btnOne.setAttribute('onclick', 'huis()');
	console.log('Current level: Cafe');
}
//2
function huis() {
	title.innerHTML = 'Thuis';
	desc.innerHTML = 'Jullie zitten met zn alle bij jouw thuis om de strategie te bespreken voor de bankoverval.';
	img.src = 'img/Huis.jpg';
	btnOne.innerHTML = 'VERZAMEL SPULLEN VOOR DE OVERVAL';
	btnOne.setAttribute('onclick' , 'grabSupply()');
	btnTwo.style.display = 'inline';
	btnTwo.innerHTML = 'GA NAAR DE AUTO';
	btnTwo.setAttribute('onclick', 'carBegin()');	
	console.log('Current level: Thuis');
}

function grabSupply() {
	supply = true;
	btnOne.innerHTML = 'GA NAAR DE AUTO';
	btnOne.setAttribute('onclick', 'carBegin()');
	btnTwo.style.display = 'none';
}
//3
function carBegin() {
	if (supply == false) {
		desc.innerHTML = 'Pak eerst de spullen die je nodig hebt voor de overval!'
	}
	else {
		title.innerHTML = 'In de auto';
		desc.innerHTML = 'Jullie zitten nu in de auto onderweg naar de bank, als je op het dashboard kijkt zie je dat de tank bijna leeg is, wat doe je?';
		img.src = 'img/fuelLight.png';
		btnOne.innerHTML = 'RIJ DOOR NAAR DE BANK';
		btnOne.setAttribute('onclick', 'bankOutside()');
		btnTwo.style.display = 'inline';	
		btnTwo.innerHTML = 'RIJ NAAR HET TANKSTATION';
		btnTwo.setAttribute('onclick', 'gasStation()');
		console.log('Current level: Auto');
	}
	
}

//4
function bankOutside() {
	title.innerHTML = 'Voor de bank'
	desc.innerHTML = 'Jullie staan nu voor de bank met de auto klaar om aan de overval te beginnen, maar jullie zien dat er nog mensen binnen in de bank zijn. Wat gaan jullie doen?';
	img.src = 'img/BankOut.jpg';
	btnOne.innerHTML = 'WACHT NOG EVEN';
	btnOne.setAttribute('onclick', 'bankWaiting()');
	btnTwo.style.display = 'inline';
	btnTwo.innerHTML = 'BEGIN MET DE OVERVAL';
	btnTwo.setAttribute('onclick' , 'heistPart1()');
	console.log('Current level: Voor de bank');
}
//5
function gasStation() {
	title.innerHTML = 'Tankstation';
	desc.innerHTML = 'Jullie zijn even naar het tankstation gereden omdat je zag dat het benzine lampje aangaf dat de tank bijna leeg was. Hier krijg je de optie om de auto vol te tanken of alsnog door te rijden naar de bank';
	img.src = 'img/Tankstation.jpg';
	btnOne.innerHTML = 'TANK DE AUTO VOL';
	btnOne.setAttribute('onclick' , 'fuel()');
	btnTwo.innerHTML = 'RIJ NAAR DE BANK';
	btnTwo.setAttribute('onclick' , 'bankOutside()');
	console.log('Current level: Tankstation');
}

function bankWaiting() {
	customers = false;
	title.innerHTML = 'Nog steeds voor de bank'
	desc.innerHTML = 'Jullie zien nu dat er bijna niemand in de bank is. Dit is jullie kans om je slag te slaan.';
	btnOne.innerHTML = 'BEGIN MET DE OVERVAL';
	btnOne.setAttribute('onclick', 'heistPart1()');
	btnTwo.style.display = 'none';
	console.log('Current level: Voor de bank (aan het wachten)');
}

function fuel() {
	gas = true;
	img.src = 'img/fueling.png';
	desc.innerHTML = 'Je hebt de auto vol getankt, je zou nu voldoende benzine moeten hebben om weg te kunnen komen.';
	btnOne.innerHTML = 'GA NAAR DE BANK';
	btnOne.setAttribute('onclick' , 'bankOutside()');
	btnTwo.style.display = 'none';
	console.log('Current level: Tankstation (aan het tanken)');
}
//6
function heistPart1() {
	title.innerHTML = 'In de bank';
	img.src = 'img/BankIn.jpg';
	desc.innerHTML = 'Jullie zijn nu in de bank en zeggen tegen iedereen dat ze op de grond moeten gaan liggen. De overval is officieel begonnen.';
	btnOne.innerHTML = 'GA NAAR DE KLUIS';
	btnOne.setAttribute('onclick' , 'safeDoor()');
	btnTwo.innerHTML = 'GA NAAR DE BALIE';
	btnTwo.style.display = 'inline';
	btnTwo.setAttribute('onclick', 'balie()');
	console.log('Current level: In de bank');
	console.log(code);
}
//7
function safeDoor() {
	title.innerHTML = 'Voor de kluis';
	img.src = 'img/KluisDeur.jpg';
	if (code == false) {
		time = false;
		btnOne.innerHTML = 'GA NAAR DE BALIE';
		btnOne.setAttribute('onclick' , 'balie()');
		desc.innerHTML = 'Je staat voor de kluis maar je ziet dat er een code voor nodig is om hem open te maken, misschien ligt de code bij de balie.';
		btnTwo.style.display = 'none';
	} else {
		btnOne.innerHTML = 'OPEN DE KLUIS';
		btnOne.setAttribute('onclick' , 'safeOpen()');
		desc.innerHTML = 'Je staat voor de kluis met de code, je bent er bijna. Maak nu de kluis open';	
		btnTwo.style.display = 'none';
	}
	console.log('Current level: Voor de kluis');
}
//8
function balie() {
	if (customers == false) {
		title.innerHTML = 'Bij de balie';
		desc.innerHTML = 'Je staat nu bij de balie, het is misschien handig om hier te kijken voor de code van de kluis.';
		img.src = 'img/balie.png';
		btnOne.innerHTML = 'STEEL KLUIS CODE';
		btnOne.setAttribute('onclick' , 'getCode()');
		btnTwo.style.display = 'none';
		console.log('Current level: Balie');
	} 
	else {
		gameOver();
		desc.innerHTML = 'Het was te druk in de bank, jullie zijn overmeesterd door de mensen die nog binnen waren...';
	}
}

function getCode() {
	desc.innerHTML = 'Je hebt nu de code om de kluis te openen, ga snel naar de kluis om verder te gaan met de overval!';
	code = true;
	btnOne.innerHTML = 'GA NAAR DE KLUIS';
	btnOne.setAttribute('onclick' , 'safeDoor()');
	btnTwo.style.display = 'none';
}

//9
function safeOpen() {
	title.innerHTML = 'In de kluis';
	desc.innerHTML = 'Jullie zijn nu in de kluis, het is nu aan jullie om de overval compleet te maken.';
	img.src = 'img/KluisIn.jpg';
	btnOne.innerHTML = 'REN NAAR DE AUTO';
	btnOne.setAttribute('onclick' , 'carFinal()');
	btnTwo.style.display = 'inline';
	btnTwo.innerHTML = 'PAK DE BUIT';
	btnTwo.setAttribute('onclick' , 'getStash()');
	console.log('Current level: In de kluis');
}

function getStash() {
	stash = true;
	btnTwo.style.display = 'none';
	btnOne.setAttribute('onclick' , 'carFinal()');
	btnOne.innerHTML = 'REN NAAR DE AUTO';
}

//10
function carFinal() {
	if (time == false) {
		gameOver();
		desc.innerHTML = 'Jullie hebben te lang over de overval gedaan, de politie heeft jullie ingesloten.';
	} 
	else {
		title.innerHTML = 'In de auto';
		img.src = 'img/autoeind.jpg';
		desc.innerHTML = 'Jullie zitten in de auto, en rijd politie achter jullie aan. Schud ze af!';
		btnOne.innerHTML = 'SCHUD POLITIE AF';
		btnOne.setAttribute('onclick' , 'win()');
		btnTwo.style.display = 'none';
	}
	console.log('Current level: Car final');
}

//Win!

function win() {
 	if (stash == false) {
		gameOver();
		desc.innerHTML = 'Jullie zijn het belangrijkste van de overval vergeten, de buit. Wat zijn jullie nou voor overvallers.';
	}
	else if (gas == false) {
		gameOver();
		desc.innerHTML = 'Helaas, de benzine raakte op tijdens de achtervolging en hierdoor heeft de politie jullie makkelijk in kunnen sluiten.';
	}
	else {
		title.innerHTML = 'WIN WIN WIN!';
		desc.innerHTML = 'Gefeliciteerd! De overval is geslaagd!'
		img.src = 'img/WIN.png';
		console.log('Current level: WIN WIN WIN!');	
		btnOne.innerHTML = 'RESTART'
		btnOne.setAttribute('onclick' , 'loadGame()');
	}
	
}

//Game over

function gameOver() {
	title.innerHTML = 'GAME OVER';
	img.src = 'img/gameover.jpg';
	console.log('Current level: GAME OVER');
	btnOne.innerHTML = 'RESTART';
	btnOne.setAttribute('onclick' , 'loadGame()');
	btnTwo.style.display = 'none';
}


