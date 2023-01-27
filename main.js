let  optionOne = ["situp", "pushup", "jumprope"];


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
  }

  function createElements(elementType, content, parentContainer){
    let childElement = document.createElement(elementType);
    childElement.textContent = content;
    parentContainer.append(childElement); 
  }
