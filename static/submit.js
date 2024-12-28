function XHR_Send(data, is_json=true) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/", true);

    if(is_json == true) { 
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data)); 
    } else {
        xhr.send(data);
    }
}

function send_data(input_id) {
    let elem = document.getElementById(input_id);
    let type = input_id.split('-')[0];
    let input = null;

    switch(type) {
        case "text": case "qr":
            input = elem.value;
            let post_str = {
                "type": type, 
                "data": input
            };
            console.log(post_str);
            XHR_Send(post_str);
            break;

        case "img":
            const img = elem.files[0];
            const FD = new FormData();
            FD.append('img', img);
            console.log(FD);
            XHR_Send(FD, false);
            document.getElementById('img_disp').src = '';
            break;
    }
}