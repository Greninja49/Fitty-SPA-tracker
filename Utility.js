function toggleDiv(divid) {
  if (divid == "here1") {
    document.getElementById("Graphs").style.display = "block";
    document.getElementById("AddWorkout").style.display = "none";
    document.getElementById("Stats").style.display = "none";
  } else if (divid == "here2") {
    document.getElementById("AddWorkout").style.display = "block";
    document.getElementById("Stats").style.display = "none";
    document.getElementById("Graphs").style.display = "none";
  } else if (divid == "here3") {
    document.getElementById("Stats").style.display = "block";
    document.getElementById("Graphs").style.display = "none";
    document.getElementById("AddWorkout").style.display = "none";
  }
}

function toggleDrop(drop) {
  const svgarrow =
    '<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" > <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" /> </svg>';
  no = drop;
  if (no == drop) {
    document.getElementById("dropdownDividerButton").innerHTML = no;
  } else {
    document.getElementById("dropdownDividerButton").innerHTML =
      "Add Workout" + svgarrow;
  }
}
var Start = JSON.parse(localStorage.getItem("data")).length;
localStorage.setItem("rownum", JSON.stringify(Start));
localStorage.setItem("control", JSON.stringify(Start));
function tabled() {
  var Strtd = localStorage.getItem("data");
  td = JSON.parse(Strtd);
  rows = td.length;
  console.log(rows);
  rowlim = JSON.parse(localStorage.getItem("rownum"));
  control = JSON.parse(localStorage.getItem("control"));
  console.log(rowlim);
  const trtd =
    '<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"><td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">';
  const smtd = '<td class="px-6 py-4">';
  const ctd = "</td>";
  a = trtd + ctd + smtd + ctd + smtd + ctd;
  if (control == rows) {
    if (rowlim == rows) {
      for (let i = 0; i < rows; i++) {
        temp = td[i];
        document.getElementById("Tbody").innerHTML +=
          trtd + temp[0] + ctd + smtd + temp[1] + ctd + smtd + temp[2] + ctd;
      }
      rowlims = rowlim + 2;
      localStorage.setItem("rownum", JSON.stringify(rowlims));
    } else {
      temp = td.at(-1);
      console.log(temp);
      document.getElementById("Tbody").innerHTML +=
        trtd + temp[0] + ctd + smtd + temp[1] + ctd + smtd + temp[2] + ctd;
      rowlims = rowlim + 1;
      localStorage.setItem("rownum", JSON.stringify(rowlims));
      console.log(rowlim);
    }
    localStorage.setItem("control", JSON.stringify(control + 1));
  } else {
  }
}
