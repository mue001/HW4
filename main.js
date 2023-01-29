// Global variables
let activityOptions = ["Sit Ups", "Push Ups", "Jump Rope"];
let Workout = [];
let activityNumber = 0;
let WorkOutRecord = function(activityName, activityDuration, caloriesSpent){
    this.activityID = ++activityNumber;
    this.activity = activityName;
    this.duration = activityDuration;
    this.calories = caloriesSpent;
};

let maxCalories = 0;


// page load event 
document.addEventListener("DOMContentLoaded", function (event) {

    // Create activity radio buttons
    let listOneContaier = document.getElementById('list-activities');
    let list1 = "list-one";
    createRadioButton(activityOptions, listOneContaier, list1);
    

    //function to calculate calories and add new array items 
    document.getElementById("add-button").addEventListener("click", function(){
        let duration = parseInt(document.getElementById("minutes").value);
        if(document.querySelector('input[id="Sit Ups"]:checked')){
            calories = duration*10;
            activity = activityOptions[0];
        } else if(document.querySelector('input[id="Push Ups"]:checked')){
            calories = duration*15;
            activity = activityOptions[1];
        } else if(document.querySelector('input[id="Jump Rope"]:checked')){
            calories = duration*18;
            activity = activityOptions[2];
        }

        console.log("act value : " + activity);

        // Only push an object into array if the duration is a number - if the input is empty - do nothing  
        if(!isNaN(duration) && activity !== undefined ){
            Workout.push(new WorkOutRecord(activity, duration, calories));
            maxCalories = findMaxCalories (calories, maxCalories);
            console.log(activity, duration, calories);           
            clearForm(list1);
            //or can use reset form built-in function
            //document.getElementById("activity-form").reset();
            
        }   

        document.getElementById("most-calories").addEventListener("click", mostBurnedActivites);
        document.getElementById("allActivies").addEventListener("click", displayAllActivities);
        
    });

    // Helper funtions 

    //Find the maxCalories
    function findMaxCalories(calories, maxCalories){
        if(calories >= maxCalories){
            return calories;
        }
    }; 

    
    //Display the activity that burns the most calories
    function mostBurnedActivites() {
        //document.getElementById("list-most-activities").textContent= maxActivity + " " + maxCalories;
         document.getElementById("list-most-activities").textContent = "";
         let mostAcitivities = document.getElementById("list-most-activities");
         for (act of Workout ){
             if (act.calories === maxCalories ){
                let displayActivity = document.createElement("li");
                displayActivity.textContent = `Activity ${act.activityID}: ${act.activity} ${act.calories} calories`; 
                mostAcitivities.append(displayActivity);
         }
        }
    };
        
        //Display all activities
    function displayAllActivities (){
        document.getElementById("all-activities-container").textContent = "";
        for (i=0; i<Workout.length; i++){
            let list = document.createElement("li");
            list.textContent = `Activity ${Workout[i].activityID}: ${Workout[i].activity} ${Workout[i].duration} minutes ${Workout[i].calories} calories`;
            document.getElementById("all-activities-container").append(list);
        }
    };

});


function clearForm(listName){
    let activityList = document.querySelectorAll(`input[name="${listName}"]`);
/*     for(const btn of  activityList){
        if(btn.checked){
           btn.checked = false;
           btn.value = "";
           console.log("Reset value : " + btn.value);
        }
      } */
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
  
