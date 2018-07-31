
function generateApp(softwareList) {
    html = ""
    softwareList['softwareList'].forEach(element => {

        html += "<tr>";
        html += "<td><a href='" + element['url'][0] + "'>" + element['name'] + "</a></td>";
        html += "<td>"
        element['alternatives'].forEach(alternative => {
             html += "<a href='" + alternative['url'] + "'>" + alternative['name'] + "</a></br>";
        });
        html += "</td></tr>"
    });
    let el=document.getElementById("tableBody");
    el.innerHTML=html;
}

function generateBoth() {
    generateApp();
}

//gets software list from server (github)
fetch('https://raw.githubusercontent.com/Enkelena/free-software-habits/master/alternativeApps.json')
  .then( response => response.json() )
  .then( softwareList => generateApp(softwareList));
