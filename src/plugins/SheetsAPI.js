function init(options) {
    console.log("init SheetsAPI");
    console.log(options);
}


export default {
    install: (app, options) => {
        init(options);
        app.config.globalProperties.$sheetsApi = {
            getSpreadsheet(sheetId) {
                var accessToken =  sessionStorage.getItem("access_token");
                console.log("token : " + accessToken);
                if(!accessToken) return null;
                var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?includeGridData=true&key=AIzaSyBER13Jf30swj6FSNcvPh79PGJJP4v0xvg`;

                fetch(url, {
                    method: "GET",
                    headers: {                        
                        "Authorization" : `Bearer ${sessionStorage.getItem("access_token")}`,
                    },                
                    mode: "cors"
                    }).then((e) => e.blob()).then(e => e.text()).then(e => console.log(JSON.parse(e)));
            },
        };
        console.log("SheetsAPI installed");
    }
};