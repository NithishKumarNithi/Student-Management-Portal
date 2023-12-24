let forms = {
    getData : function(id){
        let form = document.getElementById(id);
        return new FormData(form);
    },
    isValid : function(datas){
        let isFormFilled = true;
        for (let data of datas.entries()){
            if (data[1] == "" ){
                isFormFilled = false;
                return;
            }
        }
        return isFormFilled;
    },
    test : function(){
        return "test";
    }
}
