//const addForm = document.getElementsByClassName("addForm")[0];
const inputTask = document.getElementById("inputTask");
const clearAll = document.getElementById("clearAll");
const addTask = document.getElementById("addTask");
const allItems = document.getElementById("allItems");

clearAll.addEventListener("click", function () {
  allItems.innerHTML = "";
});

inputTask.addEventListener("keydown", function (event) {
  if (event.key == "Enter") addItem();
});

addTask.onclick = function () {
  addItem();
};

function addItem() {
  if (inputTask.value === "") {
    alert("Please Enter a Task");
  } else {
    let li = document.createElement("li");
    //  li.innerHTML="<label>" + inputTask.value  + "  " + `<input id=chckbox type="checkbox"></label>`;
    li.innerHTML = inputTask.value;
    allItems.appendChild(li);
    inputTask.value = "";
    /* 
    let inputBox = document.createElement("input");
    inputBox.innerHTML='<input type="checkbox"></input>';
    li.appendChild(inputBox);
    */
    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true">';
    li.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-eraser" aria-hidden="true">`;
    li.appendChild(deleteButton);

    // let checkbutton = document.createElement("button");
    //  checkbutton.innerHTML="<>"

    // li.addEventListener("click", function() {
    //   li.style.textDecoration = "line-through";
    // })
    /*
    let chckbox = document.getElementById("chckbox");
    chckbox.addEventListener("click", function(){
          if (chckbox.parentElement.style.textDecoration=="line-through")
          {
            chckbox.parentElement.style.textDecoration="none";
          } else {
             chckbox.parentElement.style.textDecoration="line-through"
           }
       
}) */

    //let chckbox = document.getElementById("chckbox");
    checkButton.addEventListener("click", function () {
      if (checkButton.parentElement.style.textDecoration == "line-through") {
        checkButton.parentElement.style.textDecoration = "none";
      } else {
        checkButton.parentElement.style.textDecoration = "line-through";
      }
    });

    deleteButton.addEventListener("click", function (event) {
      let target = event.target;
      target.parentElement.parentElement.remove();
    });
  }
}
