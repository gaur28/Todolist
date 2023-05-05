
function addItem(text, status, id, noUpdate) {
    var id = id ? id : generateID();
    var c = status === "done" ? "danger" : "";
    var item =
      '<li data-id="' +
      id +
      '" class="animated flipInX ' +
      c +
      '"><div class="checkbox"><span class="close"><i class="fa fa-times"></i></span><label><span class="checkbox-mask"></span><input type="checkbox" />' +
      text +
      "</label></div></li>";

    var isError = $(".form-control").hasClass("hidden");

    if (text === "") {
      $(".err")
        .removeClass("hidden")
        .addClass("animated bounceIn");
    } else {
      $(".err").addClass("hidden");
      $(".todo-list").append(item);
    }

    $(".refresh").removeClass("hidden");

    $(".no-items").addClass("hidden");

    $(".form-control")
      .val("")
      .attr("placeholder", "✍️ Add item...");
    setTimeout(function() {
      $(".todo-list li").removeClass("animated flipInX");
    }, 500);

    if (!noUpdate) {
      pushToState(text, "new", id);
    }
  }

const addTaskButtonElement = document.getElementById('addBtn');
const title = document.getElementById('title').value
console.log(addTaskButtonElement);
console.log(title);


function addTask(event){

    event.preventDefault();

  const response = axios({
        method: 'post',
        url: '/api/v1/TodolistTask',
        headers:{
            'Content-Type': 'application/json'
        },
        data:{
            title: title
        }


    });

    console.log(response)
}




addTaskButtonElement.addEventListener('onclick', addTask);


