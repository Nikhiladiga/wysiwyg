//Enabling edit mode on body load
function enableEditMode(){
    richTextField.document.designMode = 'On';
}



function execCmd(command){
    richTextField.document.execCommand(command,true,null);
    let btn = document.getElementsByClassName('btn');
}

function execCommandWithArg(command,arg){
    richTextField.document.execCommand(command,false,arg);
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  });

