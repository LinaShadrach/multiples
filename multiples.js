var multiples = function(countTo, countBy) {
	if(!(typeof countBy === "number" &&
  typeof countTo === "number")) {
  	alert("please enter a number");
  }
  if(countBy < countTo && countBy > 0){
    for(var i = countBy; i<= countTo; i+= countBy) {
      console.log(i);
    }
   }
   else if(countTo < countBy && countBy < 0) {
   	for(var i = countBy; i>= countTo; i+= countBy) {
      console.log(i);
    }
   }
}

multiples();
