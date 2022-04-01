function init(options) {
    console.log("init SheetsAPI");
    console.log(options);
}


export default {
    install: (app, options) => {
        init(options);
        app.config.globalProperties.$sheetsApi = {
            getSpreadsheet(sheetId) {
                console.log("token : " + sessionStorage.getItem("access_token"));
                var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?includeGridData=true`;
                var headers = new Headers();
                headers.append("Authorization", `Bearer ${sessionStorage.getItem("access_token")}`);
                headers.append("key", sessionStorage.getItem(options));
                headers.append("Access-Control-Allow-Origin", "*");

                fetch(url, {
                    method: "GET",
                    headers: headers,
                    mode: "cors"
                    }).then((e) => console.log(e));
            },
        };
        console.log("SheetsAPI installed");
    }
};