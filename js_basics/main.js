function getText(){
    var text_input=document.getElementById("input_text").value
    document.getElementById("input_text").value = "";
    return text_input
}

function add_li(){
    let text=getText();
    console.log(text);
    let new_li=document.createElement('li');
    let new_li_text=document.createTextNode(text);
    new_li.appendChild(new_li_text);
    console.log(new_li);
    const actual_li=document.getElementById("List");
    actual_li.appendChild(new_li);
}

document.addEventListener('keypress',test_input);
function test_input(e){
    if(e.key=="Enter"){
        add_li();
    }
}


