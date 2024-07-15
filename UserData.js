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
  var type = document.getElementById("dropdownDividerButton").innerHTML;
  const Minute = document.getElementById("time").value;
  names = JSON.stringify(name);
  types = JSON.stringify(type);
  Minutes = parseInt(Minute);
  console.log(names, types, Minutes);
  userpara(names, type, Minutes);
}

function userpara(Name, WType, Min) {
  a = [Name, WType, Min];
  console.log(WType);
  Emessage = document.getElementById("dropdownDividerButton").innerHTML;
  let retString = localStorage.getItem("data");
  let user_data = JSON.parse(retString);
  if (a[1] == Emessage) {
    document.getElementById("EMessages").innerHTML =
      "<p>Please choose an excercise</p>";
  } else {
    for (let i = 0; i <= user_data.length; i++) {
      Person = user_data[i];
      if (Person[0] == Name) {
        Workout = Person[1].split(",");
        var p = 0;
        for (let j = 0; j < Workout.length; j++) {
          console.log(Workout[j]);
          if (JSON.stringify(Workout[j]) == JSON.stringify(WType)) {
            Person[2] = Person[2] + Min;
            Min = 0;
            break;
          } else if (JSON.stringify(Workout[j]) != JSON.stringify(WType)) {
            p += 1;
          } else if (p == Workout.length) {
            Person[1] = Person[1] + "," + WType;
            Person[2] = Person[2] + Min;
            Min = 0;
            break;
          }
        }
        break;
      } else if (i == user_data.length - 1) {
        user_data.push(a);
        break;
      }
    }

    string = JSON.stringify(user_data);
    localStorage.setItem("data", string);
    console.log(user_data);
  }
}
