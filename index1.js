function add(){
    console.log("Adding")
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if (localStorage.getItem('itemJson') == null) {
        itemarr = []
        // itemarr.push([tit, desc])
        localStorage.setItem('itemJson', JSON.stringify(itemarr))

    }
    else {
        itemarr = JSON.parse(localStorage.getItem('itemJson'))
        itemarr.push([tit, desc])
        localStorage.setItem('itemJson', JSON.stringify(itemarr))
    }
    display()
    
}
adding = document.getElementById("add");
adding.addEventListener("click", add)


//on loading of file
function start(){
    if(localStorage.getItem('itemJson')==null)
    {
        add()
    }
    else{
        // itemlist=JSON.parse(localStorage.getItem('itemJson'))
        display()
    }
}

function display(){
    itemList1=JSON.parse(localStorage.getItem('itemJson'))
    let str = ""
    let loc = document.getElementById("tbody")
    itemList1.forEach((element, index) => {
        str += `
    <tr>
        <th scope="row">${index}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>
            <button id="delete" onclick="deleted(${index})" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    `
    })
    loc.innerHTML = str
}

function deleted(index){
    itemList=JSON.parse(localStorage.getItem('itemJson'))
    itemList.splice(index,1)
    localStorage.setItem('itemJson',JSON.stringify(itemList))
    display()
}
