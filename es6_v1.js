var sentence;
// $('#poopy').click(function (sentence) {console.log('clickworks') });


let animals = [
	{ type: 'giraffe', height: 8.2, weight: 315, name: 'Geofrie', top3Foods: ['leaves','roots','children']},
	{ type: 'tiger', height: 2.1, weight: 120, name: 'Tony', top3Foods: ['meat','children','corn flakes']}
]

animalListing(animals, true);


function animalListing( animalArray, listFoods){
	if(listFoods===undefined){
		listFoods = true;
	}
	let outputArray = [];
	for(let animalIndex = 0; animalIndex< animalArray.length; animalIndex++){
		var thisAnimal = animalArray[animalIndex];
		var {name} = thisAnimal;
		var {height} = thisAnimal;
		var {weight} = thisAnimal;
		var {type} = thisAnimal;
		var foods = thisAnimal.top3Foods;
		var food1 = foods[0];
		var food2 = foods[1];
		var food3 = foods[2];
		sentence = "Animal: "+name+" is a "+type+" and is "+height+" meters at "+(weight*2.2)+" lbs";
		console.log(sentence);
		if(listFoods){
			sentence += " and it likes to eat "+food1+", "+food2+", and "+food3;
			console.log(sentence)
		}
	}
	return outputArray;
}

$('#poopy').on('click', function(){console.log('clickworks');});
