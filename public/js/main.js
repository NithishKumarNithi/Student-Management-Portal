const PROTOCOL = location.protocol;
const HOSTNAME = location.host;

const URL = PROTOCOL+'//'+HOSTNAME;

let httpsRequest = {
    get : function(url){
        return fetch( url, { method: "GET" } );
    },
    post : function(url,data){
        return fetch(
            url,
            {
                method: "POST", 
                body: data,
            }
        );
    },
    put : function(url,data){
        return fetch(
            url,
            {
                method: "PUT", 
                body: data,
            }
        );
    },
    delete : function(url,data){
        return fetch(
            url,
            {
                method: "DELETE"
            }
        );
    },

};

