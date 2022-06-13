//custom function
function calculateTip(){

    //store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    //quick validation
     if(billAmount===0 || serviceQuality==0)
     {
         window.alert("PLease enter some values");
         return;
     }

     //check if input is empty or less than or equal to 1
     if(numPeople==0 || numPeople<=1){
        numPeople=1;

        document.getElementById("each").style.display="none";}

      else{
        document.getElementById("each").style.display="block";
      }
      
      
      //maths
      var total = (billAmount * serviceQuality) / numPeople;
      total =Math.round(total *100) /100;
      total= total.toFixed(2);
     


      //display the tip
      document.getElementById("totalTip").style.display="block";
      document.getElementById("tip").innerHTML=total;
    
}


// Hide the tip amount on load
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

//clicking the button calls our custom function

document.getElementById("calculate").onclick= function(){
    calculateTip();
};