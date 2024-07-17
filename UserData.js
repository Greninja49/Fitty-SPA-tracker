function populateData() {
  if (localStorage.getItem("data")) return;
  else {
    let Stored_Value = [
      ["John Doe", "Running,Cycling", 75],
      ["Jane Smith", "Swimming,Running", 80],
      ["Mike Johnson", "Yoga,Cycling", 90],
    ];

    localStorage.setItem("data", JSON.stringify(Stored_Value));
  }
}
function data() {
  var name = document.getElementById("name").value;
  var type = document.getElementById("Wcon").innerHTML;
  console.log(type);
  const Minute = document.getElementById("time").value;
  names = JSON.stringify(name);
  types = JSON.stringify(type);
  Minutes = parseInt(Minute);
  console.log(names, Minutes);
  userpara(name, type, Minutes);
}

function userpara(Name, WType, Min) {
  a = [Name, WType, Min];
  let retString = localStorage.getItem("data");
  let user_data = JSON.parse(retString);
  if (a[1] == "Add Workout") {
    document.getElementById("EMessages").innerHTML =
      "<p>Please choose an excercise</p>";
  } else {
    for (let i = 0; i <= user_data.length; i++) {
      Person = user_data[i];
      if (Person[0] == Name) {
        Workout = Person[1].split(",");
        console.log(Workout.length);
        var p = 0;
        for (let j = 0; j <= Workout.length + 1; j++) {
          console.log(Workout[j], WType);
          if (JSON.stringify(Workout[j]) == JSON.stringify(WType)) {
            Person[2] = Person[2] + Min;
            Min = 0;
            break;
          } else if (p == Workout.length || Workout.length == 1) {
            Person[1] = Person[1] + "," + WType;
            Person[2] = Person[2] + Min;
            Min = 0;
            break;
          } else if (JSON.stringify(Workout[j]) != JSON.stringify(WType)) {
            p = p + 1;
            console.log(p);
          }
        }
        break;
      } else if (i == user_data.length - 1) {
        user_data.push(a);
        break;
      }
    }
    document.getElementById("EMessages").innerHTML = "";
    string = JSON.stringify(user_data);
    localStorage.setItem("data", string);
    console.log(user_data);
  }
}
