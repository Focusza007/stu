let behind = "";
let  front = "";
let display = document.getElementById("t");

function num(number) {
   front += number;
  behind += number;
  display.innerHTML =  front;
}

function Calculation(p) {
  if (p == "-+") {
    behind = behind * -1;
     front =  front * -1;
    behind = behind.toString();
     front =  front.toString();
     display.innerHTML =  front;
  } else if (p == "%") {
    behind = behind + "%";
     front =  front + "% of";
     display.innerHTML =  front;
  } else {
    behind += p;
     front += p;
     display.innerHTML =  front;
  }
}

function summarize(o) {
  if (o == "=") {
    try {


      behind= eval(behind);
      behind=behind.toString()
      display.innerHTML =behind;
       front = behind;
       
    } catch {
        display.innerHTML = "error";
        behind = "";
     front = "";
    }
  } else if (o == "delete") {
    behind = "";
     front = "";
     display.innerHTML = front;
  }
}
