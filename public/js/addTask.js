const addTaskForm = document.querySelector('form');
const titleTaskInputElement = document.getElementById('title');
const discriptionTaskInputElement = document.getElementById('discription');


PushManager.logToConsole = true;



async function addTask(event){
    event.preventDefault();

    const title = titleTaskInputElement.value;
    const discription = discriptionTaskInputElement.value;

    const enteries = {
        title:title,
        discription:discription
    };

    const response = await axios.post('/api/v1/TodolistTask', {
        method:'POST',
        body: JSON.stringify(enteries),
        headers:{
            'Content-Type': 'application/json'
        }

    }).then(function (response) {

        var pusher = new Pusher('0ae586360ebde8038bae', {
            cluster: 'ap2'
        });
        var channel = pusher.subscribe('my-channel');

        channel.bind('my-event', function(data){
            alert(JSON.stringify(data));
        });

      })
      .catch(function (error) {
        console.log(error);
      });
}



addTaskForm.addEventListener('submit', addTask);





