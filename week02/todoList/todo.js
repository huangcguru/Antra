function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            let output = '<h2 class = "todoitems">Details</h2>'
            data.forEach(function (item) {
                output += 
                `
                <ul class = "list-group">
                    <li class="list-group-item">userId: ${item.userId}</li>
                    <li class="list-group-item">id: ${item.id}</li>
                    <li class="list-group-item">title: ${item.title}</li>
                    <li class="list-group-item">completed: ${item.completed}</li>
                </ul>
              `
            })
            document.getElementById('todolist').innerHTML = output
        })


        .catch((error)=>{
            console.log(`Error Fetching data: ${error}`)
            document.getElementById('items').innerHTML = 'Error Loading Data'
        })

}

fetchData()