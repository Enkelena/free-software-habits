
function generateApp(softwareList) {
    let html = "";
    softwareList['softwareList'].forEach(element => {
        html += "<tr><td></td>";
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


//gets software list from server (github)
fetch('https://raw.githubusercontent.com/Enkelena/free-software-habits/master/alternativeApps.json')
  .then( response => response.json() )
  .then( softwareList => {
        generateApp(softwareList);
        //search bar
        const searchBar = document.getElementById('search-bar');
        searchBar.onkeyup = (el) => {
            const searchText = el.target.value;
            if (el.target.value.replace(/\s/g, '').length >= 1){
                const filteredSoftwareList = [];
                filteredSoftwareList['softwareList'] = softwareList['softwareList'].filter ( entry => {
                        return entry.name.toLowerCase().search(searchText.toLowerCase()) > -1;
                    });
                generateApp(filteredSoftwareList);
            } else {
                generateApp(softwareList);
            }
        }
    });

//show about box
const show_about_link = document.getElementById('info-link');
show_about_link.onclick = () => {
    window.scrollTo(0,0);
    document.body.style.overflow = 'hidden';
    document.getElementById('blackout').style.display = 'block';
    document.getElementById('about-box').style.display = 'block';
    document.getElementById('blackout').onclick = () => {
        document.body.style.overflow = 'auto';
        document.getElementById('blackout').style.display = 'none';
        document.getElementById('about-box').style.display = 'none';
    }
}