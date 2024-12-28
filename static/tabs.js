function handle(event, btn, color) {

    let tab_content = document.getElementsByClassName("tab-content");
    for(let i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }
    let btns = document.getElementsByClassName("btn");
    for(let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = '#f1f1f1';
        btns[i].className = btns[i].className.replace(" active", "");
    }
    document.getElementById(btn).style.display = "block";
    event.currentTarget.className += " active";

    document.getElementById(`${btn}-button`).style.backgroundColor = color;
    document.body.style.backgroundColor = color;
    //document.getElementById(btn).style.backgroundColor = color;
    //document.getElementById("tab").style.backgroundColor = color;
}

var load_file = event => {
    let output = document.getElementById('img_disp');
    output.src = URL.createObjectURL(event.target.files[0]);
}