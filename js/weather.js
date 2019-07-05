//let temparature = Number(prompt("Enter a number:"));
//if (temparature > 0) {
  //  console.log(number + " is positive");
//} else if (temparature < 0) {
 //   console.log(temparature+ " is negative ");
//} else{
   // console.log(temparature + " is zero ");
//}

//if (temparature >= 0 && temparature <= 100) {
 //   console.log(number + "is between 0 and 100, both included");
//}
function myFunction(){
	var temparature = document.getElementById("temp").value;
	
	//declare variables and to access an HTML element
		
	//assign values
	
	if (temperature >=27) {
		alert( "summer dresscode shorts sunglasses t-shirts");
	   }
	   else if (temperature <=26 && temperature >20){
		alert(" wear long sleeve shirts trousers");
	   }
	   else if (temperature <=19 && temperature>=15){
		alert(" wear heavy jackets woolen hats closed shoes");
	   }
	   else if (temperature <=14 && temperature >=-10){
		alert(" wear long sleeve shirts, trousers");
	   } 
	   else {
		alert("not a valid weather temparature");	
	   }	
	}