function addMovie()
{
    var movieTitle = document.getElementById("inputTitle").value;
    var movieYear = document.getElementById("inputYear").value;
    var movieActors = document.getElementById("inputActor").value;
    console.log("halo");
    console.log(movieTitle);
    console.log(movieYear);
    console.log(movieActors);

    var li = document.createElement("li");
    li.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieYear + ", " + movieActors;
    document.getElementById("movieList").appendChild(li);
    console.log(li);
    
}

function removeMovie()
{
    var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (var i=0; i<checkedBoxes.length; i ++)
    {
        document.getElementById("movieList").removeChild(checkedBoxes[i].parentNode)
    }
}