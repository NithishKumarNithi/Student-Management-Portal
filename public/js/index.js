let formAlert = document.getElementById('formAlert');
let editFormAlert = document.getElementById('editFormAlert');
let submitDev = document.getElementById('submitDev');
let updateStudent = document.getElementById('updateStudent');
let checkRows = document.querySelectorAll('.checkRow');
var editFormData = document.querySelectorAll('#editStudent input');

// add-student
submitDev.onclick = function(event){
    event.preventDefault();
    let formData = forms.getData("addDev");
    if (forms.isValid(formData)) {
        formAlert.classList.add('d-none');
        httpsRequest.post( URL+'/add-student', formData)
         .then(res => res.text())
         .then(r => console.log(r));
    }else formAlert.classList.remove('d-none');
}

// submit update-student
updateStudent.onclick = function(event){
    event.preventDefault();
    let formData = forms.getData("editStudent");
    if (forms.isValid(formData)) {
        editFormAlert.classList.add('d-none');
        // httpsRequest.put( URL+'/add-student', formData)
        //  .then(res => res.text())
        //  .then(r => console.log(r));
    }else editFormAlert.classList.remove('d-none');
}

// get checked row to enable edit / delete data
checkRows.forEach(function(checkRow){
    checkRow.onchange = function(e){
        let parentEle = this.parentElement.parentElement.parentElement;
        this.checked 
         ? parentEle.classList.add('selected') 
         : parentEle.classList.remove('selected');
         enableModification();
    }
})

function setBtn(addBtn = true, editBtn = false, deleteBtn = false){    
    document.getElementById('add').disabled = addBtn ? false : true;
    document.getElementById('edit').disabled =  editBtn ? false : true;
    document.getElementById('delete').disabled =  deleteBtn ? false : true;
}

function enableModification(){
    let selected = document.querySelectorAll('table tr.selected');
    if(selected.length > 1) { setBtn(false, false, false); resetFormValue(); }
    else if(selected.length < 1) { setBtn(true, false, false); resetFormValue(); }
    else { 
        setBtn(false, true, true);
        let result;
        httpsRequest.get( URL+'/student/'+selected[0].dataset.studentid )
            .then(res => res.text())
            .then(r => {
                result = JSON.parse(r);
                editStudent(result);
                deleteStudent(result);
            });
    }
}

function editStudent(data){
    // let formEditData = forms.getData("editStudent");
    // for (let data of formEditData.entries()){ console.log(data); }
    editFormData[0].value = typeof(data) === 'object'? data.firstname : ' ';
    editFormData[1].value = typeof(data) === 'object'? data.lastname : ' ';
    editFormData[2].value = typeof(data) === 'object'? data.email : ' ';
    editFormData[3].value = typeof(data) === 'object'? data.roll_number : ' ';
    editFormData[4].value = typeof(data) === 'object'? data.phonenumber : ' ';
}

function deleteStudent(data){
    let name = typeof(data) === 'object' ? data.firstname+" "+data.lastname : ' ';
    document.getElementById('delete').onclick = function(event){
        event.preventDefault();
        if(confirm("Are you sure. You want to delete " + name)){
            console.log("Delete");
        }else{
            console.log("Don't Delete");
        }
    }
}

function resetFormValue() { 
    editStudent(); 
    deleteStudent(); 
}