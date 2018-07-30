
function generateApp(softwareList) {
    html = ""
    softwareList['softwareList'].forEach(element => {
        html += "<div class='row'><div class='col-lg-3'><a href='" + element['url'][0] + "'>" + element['name'] + "</a> </div> ";
        console.log(element['alternatives'].length);
        element['alternatives'].forEach(alternative => {
            html += "<div class='col-lg-2'><a href='" + alternative['url'] + "'>" + alternative['name'] + "</a></div>";
        });
        html += "</div> "
        console.log(html)
    });
    let el=document.getElementById("apps");
    el.innerHTML=html;
}

function generateBoth() {
    generateApp();
}

//gets software list from server (github)
fetch('https://cdn.rawgit.com/Enkelena/gsoc-project/master/alternativeApps.json')
  .then( response => response.json() )
  .then( softwareList => generateApp(softwareList));
