/*
1)
Az "additional" osztállyal megjelölt szekción belül látható egy "more" ("Bővebben" felirattal) 
és "hidden" besorolású elem (alapból nem látszik)
A "more" elemre kattintva: rejtse el magát és jelenítse meg a "hidden" részt (display: inline)
*/

var more = document.querySelector('.additional .more');

function MoreClick()
{
	more.style.display = "none";
	document.querySelector('.additional .hidden').style.display = "inline";
}

more.onclick = MoreClick;

/*
2)
Az "offers" lista elemeinek tartalma nem látható (fehér a szöveg)
Oldjuk meg, hogy bármelyikre kattintva annak szövege feketére vált (mindegyik elemre)
*/

var items = document.querySelectorAll('.offers li');

function ItemClick()
{
	this.style.color = "#000";
}

for(var i = 0; i < items.length; i++)
{
	items[i].onclick = ItemClick;
}

/*
3)
A fenti "Fontos hirdetés" blokk az oldalon a legfontosabb
Ha lefelé görgetünk és elérjük azt a pontot, ahol már pont nem látszana, ragasszuk az ablak tetejéhez
Ehhez változtassuk meg a stílusát (position: fixed, left: 0, top: 0, width: 100%, fontSize: 75%)
*/

var advertising = document.querySelector('.advertising');
var adTreshold = advertising.offsetHeight;

function OnScroll()
{
	var scrollTop = document.documentElement.scrollTop;
	
	if(scrollTop >= adTreshold)
	{
		advertising.style.position = "fixed";
		advertising.style.left = 0;
		advertising.style.top = 0;
		advertising.style.width = "100%";
		advertising.style.fontSize = "75%";
		
		//Érdemes mindent lejjebb tolni, hogy ne takarja ki a tartalom tetejét
		document.getElementById('container').style.marginTop = adTreshold +"px";
	}
}

window.onscroll = OnScroll;
