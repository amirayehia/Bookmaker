var webName = document.getElementById("name");
var webUrl = document.getElementById("url");
var container;
if (localStorage.getItem("bookmarks")){
    container= JSON.parse(localStorage.getItem("bookmarks"));
    display()
} else {
    container = []

}

function submitValue (){
    var bookmark = {
        name:webName.value,
        url :webUrl.value

    }
  
 container.push(bookmark)
 localStorage.setItem("bookmarks",JSON.stringify(container) )
 console.log(container);
 clearElements ()
 display ()

}
function clearElements (){
    webName.value= "",
    webUrl.value = ""

}
function display (){

    var cartona = ``;
    for (var i = 0 ; i < container.length ; i++){
        cartona += `
        <tr>
                    <td>${container[i].name}</td>
                    <td>${container[i].url}</td>
                    <td><button class="btn btn-warning text-light" onclick = 'VisitElement("${container[i].url}")'>Visit</button></td>
                    <td><button class="btn btn-danger" onclick='deleteElement (${i})' >Delete</button></td>
                </tr>`
    }
     document.getElementById("demo").innerHTML = cartona


}
function VisitElement(link){
    console.log("visited");
    window.open(link);

}

function deleteElement (index){
    container.splice(index,1);
    localStorage.setItem("bookmarks",container)
    display()
}