async function init(plugin, options) {
    console.log("Installing SheetsApi with options : ");
    console.log(options);
    if(plugin.getSpreadsheetId())
        await plugin.loadSpreadsheet();
    console.log("----------");
  }


export default {
    install: (app, options) => {
        app.config.globalProperties.$sheetsApi = {
            currentSheet : null,

            /* Chargement de la feuille en mémoire */
            loadSpreadsheet() {
                return new Promise((resolve, reject) => {
                    if(this.currentSheet) resolve();
                    
                    var sheetId = this.getSpreadsheetId();
                    if(sheetId)
                    {
                        var accessToken =  sessionStorage.getItem("access_token");
                        console.log("token : " + accessToken);
                        if(!accessToken) return null;
                        var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?includeGridData=true&key=AIzaSyBER13Jf30swj6FSNcvPh79PGJJP4v0xvg`;
                        
                        return fetch(url, {
                        method: "GET",
                        headers: {                        
                            "Authorization" : `Bearer ${sessionStorage.getItem("access_token")}`,
                        },                
                        mode: "cors"
                        })
                        .then((e) => e.blob())
                        .then(e => e.text())
                        .then(e => { this.currentSheet = JSON.parse(e); resolve(); })
                        .catch(ex => reject(ex));                        
                    }
                });
            },


            /* Opérations sur la feuille */
            async getSheetWithName(name) {
                if(!this.currentSheet) await this.loadSpreadsheet();
                
                var sheet = null;
                this.currentSheet.sheets.forEach(e => {
                    if(e.properties.title == name)
                    sheet = e;
                });
                
                if(!sheet)
                    console.log(`Sheet named ${name} not found.`);
                else
                    console.log(`Sheet named ${name} found.`);
                return sheet;
            },

            async updateCell(cellId, value) {                
                var sheetId = this.getSpreadsheetId();
                
                var accessToken =  sessionStorage.getItem("access_token");

                console.log("token : " + accessToken);
                if(!accessToken) return null;
                var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${cellId}?key=AIzaSyBER13Jf30swj6FSNcvPh79PGJJP4v0xvg`;
                
                await fetch(url, {
                    method: "PUT",
                    headers: {                        
                        "Authorization" : `Bearer ${sessionStorage.getItem("access_token")}`,
                    },              
                    mode: "cors",
                    body: {
                        valueInputOption : {
                            RAW: value,
                            USER_ENTERED: true
                        }
                    }
                }).then((e) => console.log(e));
            },


            /* Stockage de l'id */
            async setSpreadsheetId(id) {
                localStorage.setItem("spreadsheetId", id);
                await this.loadSpreadsheet();
                console.log(`spreadsheetId set to ${id}`);
            },

            getSpreadsheetId() {                
                return localStorage.getItem("spreadsheetId") ?? null;
            },

            resetSpreadsheetId()
            {
                localStorage.removeItem("spreadsheetId");
                console.log("removed spreadsheetId");
            }
        };

        init(app.config.globalProperties.$sheetsApi, options);

        console.log("SheetsAPI installed");
    }
};