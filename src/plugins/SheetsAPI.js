async function init(plugin, options) {
    console.log("Installing SheetsApi with options : ");
    console.log(options);
    if (plugin.getSpreadsheetId()) await plugin.loadSpreadsheet(plugin.getSpreadsheetId());
    console.log("----------");
}

export default {
    install: (app, options) => {
        app.config.globalProperties.$sheetsApi = {
            currentSheet: null,
            key: options,

            /* Chargement de la feuille en mémoire */
            async loadSpreadsheet(sheetId, force) {
                if (!force) if (this.currentSheet) return true;

                if (sheetId) {
                    const accessToken = sessionStorage.getItem("access_token");
                    console.log("token : " + accessToken);
                    if (!accessToken) return false;
                    var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?includeGridData=true&key=${this.key}`;

                    return await fetch(url, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                        mode: "cors",
                    })
                        .then((e) => {
                            if (e.status != "200") throw e;
                            else return e;
                        })
                        .then((e) => e.blob())
                        .then((e) => e.text())
                        .then((e) => {
                            this.currentSheet = JSON.parse(e);
                            console.log(this.currentSheet);
                        })
                        .then(() => {
                            localStorage.setItem("spreadsheetId", sheetId);
                            return true;
                        })
                        .catch((e) => {
                            console.error(e);
                            return false;
                        });
                }
            },

            /* Opérations sur la feuille */
            async getSheetWithName(name) {
                if (!this.currentSheet) await this.loadSpreadsheet(this.getSpreadsheetId());

                var sheet = null;
                this.currentSheet.sheets.forEach((e) => {
                    if (e.properties.title == name) sheet = e;
                });

                if (!sheet) console.log(`Sheet named ${name} not found.`);
                else console.log(`Sheet named ${name} found.`);
                return sheet;
            },

            async updateCell(cellId, value) {
                var sheetId = this.getSpreadsheetId();

                var accessToken = sessionStorage.getItem("access_token");

                console.log("token : " + accessToken);
                if (!accessToken) return null;

                var valueRange = {
                    range: cellId,
                    values: [{ values: value }],
                };

                var valueInputOption = "RAW";

                var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${cellId}?valueInputOption=${valueInputOption}&key=${this.key}`;

                await fetch(url, {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
                    },
                    mode: "cors",
                    body: JSON.stringify(valueRange),
                })
                    .then((e) => console.log(e))
                    .then(this.loadSpreadsheet(this.getSpreadsheetId(), true));
            },

            /* Stockage de l'id */
            async setSpreadsheetId(id) {
                var result = await this.loadSpreadsheet(id, true);

                if (result) {
                    console.log(`spreadsheetId set to ${id}`);
                }
                return result;
            },

            getSpreadsheetId() {
                return localStorage.getItem("spreadsheetId") ?? null;
            },

            getSpreadsheetName() {
                return this.currentSheet?.properties.title;
            },

            resetSpreadsheetId() {
                localStorage.removeItem("spreadsheetId");
                console.log("removed spreadsheetId");
            },
        };

        init(app.config.globalProperties.$sheetsApi, options);

        console.log("SheetsAPI installed");
    },
};
