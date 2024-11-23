var webSideName = document.getElementById("webSideName")
var webSideLink = document.getElementById("webSideLink")
var addBookmarkBtn = document.getElementById("addBookmarkBtn")
var tBody = document.getElementById("tBody")
var BookmarksArray = []

if(localStorage.getItem("Bookmark") != null){
    BookmarksArray = JSON.parse(localStorage.getItem("Bookmark"))
    displayBookmark()
}
function addBookmark() {
if( BookmarkLinkRegex.test(webSideLink.value) && BookmarkNameRegex.test(webSideName.value)){
    var Bookmark = {
        name: webSideName.value,
        link: webSideLink.value,
    }
    BookmarksArray.push(Bookmark)
    localStorage.setItem( "Bookmark",JSON.stringify(BookmarksArray))
    displayBookmark()
    clearInput()
}else{
    alert("Enter Valid URL & Side name ")
}
}

function displayBookmark(){
    var collection =""
    for (var i = 0 ; i < BookmarksArray.length; i++) {
        collection +=`
        <tr>
                                <td>${i}</td>
                                <td>${BookmarksArray[i].name}</td>
                                <td><a href="${BookmarksArray[i].link}" target="_blank"  class="btn btn-success"><i class="fas fa-eye me-2"></i>Visit</a></td>
                                <td><button href="#" onclick="deleteBookmark(${i})" class="btn btn-danger"><i class="fas fa-trash-can me-2"></i>Delete</button></td>
                            </tr>
        `

     }
     tBody.innerHTML = collection
}
function clearInput(){
Bookmark = {
        name: webSideName.value = "",
        link: webSideLink.value = "",
    }
}
function deleteBookmark(BookmarkIndex){
BookmarksArray.splice(BookmarkIndex,1)
localStorage.setItem( "Bookmark",JSON.stringify(BookmarksArray))
displayBookmark()
}


var BookmarkLinkRegex =/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/ ;
var BookmarkNameRegex =/^\w{3,}(\s+\w+)*$/ ;