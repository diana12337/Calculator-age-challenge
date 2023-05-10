let date = new Date();

date = date.toLocaleString();


document.getElementById("submit").onclick = function(){
 

  let dayChoice;
  dayChoice = document.getElementById("day").value;

   if(document.getElementById("day").value !== "") {  
     if(dayChoice >= 1 && dayChoice <= 31){
  dayChoice = Number(dayChoice);
    }
     else {document.getElementById("not-day").innerHTML = "Must be a valid day"; document.getElementById("day").style.borderColor = "red"; document.getElementById("text-above-day").style.color = "red"
          }
   }
  else{document.getElementById("not-day").innerHTML = "This field is required"; document.getElementById("day").style.borderColor = "red"; document.getElementById("text-above-day").style.color = "red"
      }
  
  
 let monthChoice;
  monthChoice = document.getElementById("month").value;
  
   if(document.getElementById("month").value !== "") {
      if(monthChoice >= 1 && monthChoice <= 12) {
  monthChoice = Number(monthChoice);
   }
   else {document.getElementById("not-month").innerHTML = "Must be a valid month";  document.getElementById("month").style.borderColor = "red"; document.getElementById("text-above-month").style.color = "red"; return false;
          }
   }
  else{document.getElementById("not-month").innerHTML = "This field is required"; document.getElementById("month").style.borderColor = "red"; document.getElementById("text-above-month").style.color = "red"; 
      }
  
  
 let yearChoice;
  yearChoice = document.getElementById("year").value;
  if(yearChoice !== "") {
 yearChoice = Number(yearChoice);
   }
  else{document.getElementById("not-year").innerHTML = "This field is required"; document.getElementById("year").style.borderColor = "red"; document.getElementById("text-above-year").style.color = "red";
    }
     
   
   function removeWarning() {
     document.getElementById("not-day").innerHTML = "";
     document.getElementById("not-month").innerHTML = "";
     document.getElementById("not-year").innerHTML = "";
     document.getElementById("month").style.borderColor = "hsl(0, 0%, 86%)"; 
     document.getElementById("text-above-month").style.color = "hsl(0, 0%, 86%)"; 
     document.getElementById("day").style.borderColor = "hsl(0, 0%, 86%)"; 
     document.getElementById("text-above-day").style.color = "hsl(0, 0%, 86%)"; 
     document.getElementById("year").style.borderColor = "black"; 
     document.getElementById("text-above-year").style.color = "hsl(0, 0%, 86%)"; 
  }
  
  document.getElementById("day").onkeyup = removeWarning;
  document.getElementById("month").onkeyup = removeWarning;
  document.getElementById("year").onkeyup = removeWarning;

  
  if (dayChoice == "" || monthChoice == "" ||yearChoice == "") {
    return;
  }
  
  let dateChoice = new Date(yearChoice, monthChoice - 1, dayChoice + 1);
  
 var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 if (yearChoice % 400 == 0 || (yearChoice % 100 != 0 && yearChoice % 4 == 0)) {
        daysInMonth[1] = 29;
    }
 if ( dayChoice > daysInMonth[monthChoice - 1]) {
       document.getElementById("not-day").innerHTML = "Must be valid date"; return false;
    }
  
  
  function removeWarningDate() {
     document.getElementById("not-day").innerHTML = "";
     document.getElementById("not-month").innerHTML = "";
     document.getElementById("not-year").innerHTML = "";
  }
  
 
  document.getElementById("month").onkeyup = removeWarningDate;


let date = new Date();

if(dateChoice <= date) {
     var diffYear = (date.getTime() - dateChoice.getTime()) / 1000;
     diffYear /= (60 * 60 * 24);
     let yearResult = Math.abs(Math.floor(diffYear/365.25));

  
   document.getElementById("year-result").innerHTML = yearResult;

  
   yearResult == 1 ? document.getElementById("year-text").innerHTML = "year":
   document.getElementById("year-text").innerHTML = "years";

  
    var diffMonth = (date.getTime() - dateChoice.getTime()) / 1000;
    diffMonth /= (60 * 60 * 24 * 30.417);
  
    let monthResult = Math.abs(Math.floor(diffMonth % 12));
    document.getElementById("month-result").innerHTML = monthResult;
    monthResult == 1 ? document.getElementById("month-text").innerHTML = "month":
    document.getElementById("month-text").innerHTML = "months";
  
  
  
  
   var diffTime = (date.getTime() - dateChoice.getTime());
     let daysDiff = diffTime / (1000 * 3600 * 24);
     let dayResult = Math.abs(Math.floor((daysDiff % 365.25) % 30.417));
     document.getElementById("day-result").innerHTML = dayResult;
     dayResult == 1 ? document.getElementById("day-text").innerHTML = "day":
    document.getElementById("day-text").innerHTML = "days";
    }
  else {document.getElementById("not-year").innerHTML = "Must be in the past";
   } 

}
