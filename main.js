// Global variables
let optionOne = ["Sit Ups", "Push Ups", "Jump Rope"];
let Workout = [];
let WorkOutRecord = function(activityName, activityDuration, caloriesSpent){
  this.activity = activityName;
  this.duration = activityDuration;
  this.calories = caloriesSpent;
};
let maxActivity = "";
let maxCalories = 0;

//console.log(document.getElementById("minutes").value);


// page load event 
document.addEventListener("DOMContentLoaded", function (event) {

    // Create activity radio buttons
    let listOneContaier = document.getElementById('list-activities');
    let list1 = "list-one";
    createRadioButton(optionOne, listOneContaier, list1);
    

    //function to calculate calories and add new array items 
    document.getElementById("add-button").addEventListener("click", function(){
        let duration = parseInt(document.getElementById("minutes").value);
        if(document.querySelector('input[id="Sit Ups"]:checked')){
            calories = duration*10;
            activity = optionOne[0];
        } else if(document.querySelector('input[id="Push Ups"]:checked')){
            calories = duration*15;
            activity = optionOne[1];
        } else if(document.querySelector('input[id="Jump Rope"]:checked')){
            calories = duration*18;
            activity = optionOne[2];
        }
        Workout.push(new WorkOutRecord(activity, duration, calories));
        checkMaxCalories (calories);
        console.log(activity, duration, calories);
        
        clearForm(list1);

    });

    // Helper funtions 

    //Check the maxCalories and maxActivity
    function checkMaxCalories(caloriesSpend){
        for(let x=0; x < Workout.length; x++){ 
        console.log("Workout[x].activity is" + Workout[x].activity)
        if(Workout[x].calories >= caloriesSpend){
            //maxActivity = Workout[x].activity, maxCalories = Workout[x].calories;
            maxCalories = Workout[x].calories;
        } //else{
            //maxActivity =pActivity, maxCalories = pCalories;
        //}
        }
    }; 

    
    //Display the activity that burns the most calories
    document.getElementById("most-calories").addEventListener("click", function(){
        //document.getElementById("list-most-activities").textContent= maxActivity + " " + maxCalories;
         document.getElementById("list-most-activities").textContent = "";
         let mostAcitivities = document.getElementById("list-most-activities");
         for (act of Workout ){
             if (act.calories === maxCalories ){
                let displayActivity = document.createElement("li");
                displayActivity.textContent = act.activity + " " + act.calories; 
                mostAcitivities.append(displayActivity);
         }
        }
    });
        
        //Display all activities
    document.getElementById("allActivies").addEventListener("click", function(){
        document.getElementById("all-activities-container").textContent = "";
        for (i=0; i<Workout.length; i++){
            let list = document.createElement("li");
            list.textContent = Workout[i].activity + " " + Workout[i].duration + " minutes " + Workout[i].calories + " calories";
            document.getElementById("all-activities-container").append(list);
        }
    });

});


function clearForm(listName){
    let activityList = document.querySelectorAll(`input[name="${listName}"]`);
    for(const btn of  activityList){
        if(btn.checked){
           btn.checked = false;
        }
      }
      document.getElementById("minutes").value = '';
    
};

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
  
