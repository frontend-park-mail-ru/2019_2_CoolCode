export const AjaxCreate = (function(){
    class AjaxModule {

        async _ajax(method, url, body, callback) {

            let response = await fetch(url);
            let text = await response.text();

            callback(response.status, text);
        }
    }
    return{
        init:  function () {
            globalThis.AjaxModule = new AjaxModule();
        }

    }

}());


