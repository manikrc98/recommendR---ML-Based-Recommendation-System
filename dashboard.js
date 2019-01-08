window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar-dashboard").style.height = "80px";
        document.querySelector(".category-title").style.fontSize = "25px";
        document.querySelector(".browse").style.marginTop = "240px";
        var moviesWatched = document.getElementsByClassName("moviesWatched");
        var i;
        for (i = 0; i < moviesWatched.length; i++) {
            moviesWatched[i].style.fontSize = "1em";
            document.getElementsByClassName("metrics")[i].style.padding = "0px 60px";
        }

        document.querySelector(".movieStats").style.margin = "0px 350px";
        document.querySelector(".movieStats").style.marginTop = "0px";
        document.querySelector(".movieStats").style.marginBottom = "0px";
    } else {
        document.querySelector(".navbar-dashboard").style.height = "300px";
        document.querySelector(".category-title").style.fontSize = "30px";
        document.querySelector(".browse").style.marginTop = "330px";
        document.querySelector(".moviesWatched").style.fontSize = "2em";
        document.querySelector(".movieStats").style.marginTop = "100px";
        document.querySelector(".movieStats").style.marginBottom = "100px";
        document.querySelector(".movieStats").style.margin = "100px auto";
        var moviesWatched = document.getElementsByClassName("moviesWatched");
        var i;
        for (i = 0; i < moviesWatched.length; i++) {
            moviesWatched[i].style.fontSize = "2em";
            document.getElementsByClassName("metrics")[i].style.padding = "0px 120px";
        }
        document.querySelector(".metrics").style.padding = "0px 120px";
    }
}
var rating, ratingVal, flag = 0,
    icon;

function setRatingInside(id, ratingValue) {
    rating = document.querySelector('#' + id);
    ratingVal = ratingValue;
    rating.innerHTML = "<a href='#'>" + "Watched?<i class='material-icons' id='iconswap'>check_circle_outline</i>" + "</a>";
    rating.style.width = "90px";
    icon = document.querySelector('#iconswap');
}

function dropText() {
    rating.innerHTML = "<p>" + ratingVal + "</p>";
    rating.style.width = "20px";
}
function swapicon() {
        rating.innerHTML = "<a href='#'>" + "Watched? <i class='material-icons'>check_circle</i>" + "</a>";
        console.log("Im in");
}
function displayInfoBoard(){
    var movCont=document.getElementById('movCont');
    var miBoard=document.getElementById('miBoard');
    movCont.style.width="70%";
    miBoard.style.display="block";
}