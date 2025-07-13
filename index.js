const overExaggeratedAlert = () => alert("Hey I was pressed!")

function addingEventListener() {
    const input = document.getElementById('button')
    input.addEventListener("click",overExaggeratedAlert);
}
addingEventListener()




