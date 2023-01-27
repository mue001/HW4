let optionOne = ["SitUps", "PushUps", "JumpRope"];
let Workout = [];
let WorkOutRecord = function(pActivity, pLength, pCalories){
  this.activity = pActivity;
  this.length = pLength;
  this.calories = pCalories;
};

console.log(document.getElementById("num1").value);
let calories = 0;
let length = 0;
let activity = "";
let maxActivity = "";
let maxCalories = 0;


let listOneContaier = document.getElementById('list-one');
let list1 = "list-one";
createRadioButton(optionOne, listOneContaier, list1);

//Create a list of radio buttons based on an array listOption 
function createRadioButton(listOption, container, listName){
    for (option of listOption){
      let radioContainer = document.createElement('div');
      radioContainer.className = "button-of-" + listName;
      container.append(radioContainer);
  
      createElements('label', option, radioContainer);
      
      let radioButton = document.createElement('input');
      radioButton.type = "radio";
      radioButton.value = option;
      radioButton.name = listName;
      radioButton.id = option;
      radioContainer.append(radioButton);
    }
  };

  function createElements(elementType, content, parentContainer){
    let childElement = document.createElement(elementType);
    childElement.textContent = content;
    parentContainer.append(childElement); 
  };


//function to calucrate calories and add new array items 
document.getElementById("button1").addEventListener("click", function(){
  let length = parseInt(document.getElementById("num1").value);
  if(document.querySelector('input[id="SitUps"]:checked')){
    calories =length*10;
    activity = optionOne[0];
  } else if(document.querySelector('input[id="PushUps"]:checked')){
    calories =length*15;
    activity = optionOne[1];
  } else if(document.querySelector('input[id="JumpRope"]:checked')){
    calories =length*18;
    activity = optionOne[2];
  }
  Workout.push(new WorkOutRecord(activity, length, calories));
  checkMaxCalories (activity, calories);
  console.log(activity, length, calories);
});

//Check the maxCalories and maxActivity
function checkMaxCalories(pActivity, pCalories){
  for(x=0; x < Workout.length; x++){ 
    console.log("Workout[x].activity is" + Workout[x].activity)
    if(Workout[x].calories > pCalories){
       maxActivity = Workout[x].activity, maxCalories = Workout[x].calories;
    } else{
       maxActivity =pActivity, maxCalories = pCalories;
    }
  }
};

//Display the activity that burns the most calories
document.getElementById("most-calories").addEventListener("click", function(){
document.getElementById("list-most-activities").textContent= maxActivity + " " + maxCalories;
});

//Display all activities
document.getElementById("allActivies").addEventListener("click", function(){
  document.getElementById("all-activities-container").textContent = "";
  for (i=0; i<Workout.length; i++){
    let list = document.createElement("li");
    list.textContent = Workout[i].activity + " " + Workout[i].length + " minutes " + Workout[i].calories + " calories";
    document.getElementById("all-activities-container").append(list);
  }
  });
  
