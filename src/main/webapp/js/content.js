$(window).load(function() {
	var id;
	for (id = 0; id < getContent().length; id++) {
		document.getElementById("content_" + id).innerHTML = getContent()[id];
	}

	for (id = 0; id < getTitle().length; id++) {
		document.getElementById("title_" + id).innerHTML = getTitle()[id];
	}

	for (id = 0; id < getDate().length; id++) {
		document.getElementById("date_" + id).innerHTML = getDate()[id];
	}
})

function getContent() {
	var content = [
			"When she began her career as a professional sheep dog Floss was impressive - the sheep responded well to her, she was faster than your average and she certainly looked good. But farmer Dave Issac has reluctantly decided to sell Floss as she is now too big to get through his farmyard gates - because she is a Peugeot estate car. Mr Issac, 46, who lives on an 180-acre farm near Battle in East Sussex, converted the family car into a working sheep dog in tribute to his dog which had recently died.",
			"From gingerbread to eggnog, toffee nut to roasted hazelnut, lattes bursting with a flavour of Christmas tempt us each year.But rather than thinking of the delicious nectar as 'just a coffee', the hidden calories and high sugar levels lurking in your festive cup mean it should really come with a health warning. Warming and tasty though they are, the majority contain more than a person's daily recommended sugar intake in one medium-sized portion. And going skinny won't help either. In many cases, drinks made from skimmed milk contained more sugar than full fat options. Either way, drinking one every day until Christmas could see your weight creep up by half a stone, experts warn.",
			"The best day to do everything you had planned last week. Meams 'never' if used with the word 'next'.",
			"'Life becomes interesting for the possibility to fulfill a dream.' ― Paulo Coelho",
			"There is nothing as romantic as two lovers sharing a kiss. But scientists have come up with an evolutionary explanation which perhaps threatens to kill the passion. Academics think that kissing helps partners share bacteria, shoring up their immune systems and enabling them to better fight disease.",
			"They are words which will strike fear into every addict - we're running out of chocolate. That's according to the world's largest confectionary producer, which has joined Mars in warning of a massive shortfall which could reach a million tonnes a year by 2020. Switzerland's Barry Callebaut Group said soaring demand have helped chocolate prices hit more than double what they were just eight years ago.",
			"One of the best things about Android is the way you can change core components and customize things to your liking. Keyboards are a big part of that, and there are certainly plenty of great ones to choose from in Google Play. The one thing you need to know before you can use any of them, is how to switch which keyboard is active.",
			"Illicit fishing goes on every day at an industrial scale. But large commercial fishers are about to get a new set of overseers: conservationists—and soon the general public—armed with space-based reconnaissance of the global fleet.",
			"Many people judge themselves harshly against others. But scientists claim we could better learn to accept ourselves, and ultimately boost our self-confidence, with the help of a virtual reality 'avatar'. Experts say that receiving therapy in a virtual reality world, using a computer generated image of yourself, reduces self-criticism and boosts self-compassion and feels of contentment." ];
	return content;
}

function getTitle() {
	var title = [
			"Come buy! Farmer spends £2,000 converting car into a SHEEPDOG (and no, it wasn't a Rover!)",
			"What will your favourite Christmas coffee do your waistline? MailOnline reveals what’s really in those festive lattes – and how going skinny might be even WORSE",
			"The real meaning of English word (what does 'Monday' mean?)",
			"Paulo Coelho",
			"Kissing for ten seconds passes on 80million bugs - but it keeps you healthy! Bacteria transferred helps improve immune system",
			"We're running out of chocolate - and it's because we're eating more than is being produced, says world's biggest confectionary firm",
			"How to switch keyboards in Android Lollipop",
			"The Plan to Map Illegal Fishing From Space",
			"Virtual reality helps boost self-confidence: Avatars could be used to treat depression and feelings of insecurity" ];
	return title;
}

function getDate() {
	var date = [ "12/01/2013", "07/07/2000", "01/07/2012", "29/03/2001",
			"13/08/2014", "20/11/2012", "05/07/2011", "21/04/2000",
			"14/07/2012" ];
	return date;
}

function searchPost() {
	var i;
	var str = document.getElementById("datepicker").value;
	if (str == "") {
		swal("Empty field!", "Please pick a date to search", "error");
		return;
	} else {
		for (i = 0; i < getTitle().length; i++) {
			if (str == getDate()[i]) {
				swal(getTitle()[i], getContent()[i], "success");
			}
		}
	}
}