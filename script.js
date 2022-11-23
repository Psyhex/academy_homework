const maxrows = 5;
const minrows = 2;

function SetTextArea(){
    document.getElementById("textareaid").rows = minrows-1;
}

function ChangeTextArea(textarea) {
    let text=textarea.value;
    let arraytext=text.split('\n');
    let rows=arraytext.length;

    if(rows>minrows){
        textarea.rows=maxrows-1;
    }else{
        textarea.rows=rows-1;}
    if(rows<minrows){
        textarea.rows=minrows-1;
    }
}