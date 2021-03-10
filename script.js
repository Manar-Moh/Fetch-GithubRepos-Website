//main variables
let input = document.querySelector(".input-name");
let getbutton = document.querySelector(".input-send");
let showDiv = document.querySelector(".container-body");
    
getbutton.onclick = function () {
     getRepo();
}

function getRepo() {

     //check if user enter value or empty
     if (input.value == "") {
          showDiv.innerHTML = "<span class='emptyDiv'>Please Write Github Username</span>";
     }
     else {
          fetch('http://api.github.com/users/'+input.value+"/"+'repos')
          .then(response => response.json())
          .then(data => {
               
               showDiv.innerHTML = "";

               data.forEach(repo => {

                    //repo name
                    let maindiv = document.createElement("div");
                    let reponame = document.createTextNode(repo.name);
                    reponame.className = "repo-name";
                    maindiv.appendChild(reponame);

                    //repo link
                    let repolink = document.createElement("a");
                    let repolinktext = document.createTextNode("Visit");
                    repolink.appendChild(repolinktext);
                    repolink.href = "http://github.com/"+input.value+"/"+ repo.name ;
                    repolink.setAttribute('target', '_blank');
                    repolink.className = 'repo-link';
                    maindiv.appendChild(repolink);

                    maindiv.className = 'repo-box';

                    //append data to show div
                    showDiv.appendChild(maindiv);
                    
               })
              
          });
     }

}