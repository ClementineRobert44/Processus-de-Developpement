import { createMimeMessage } from "mimetext";

function init(plugin, options) {
    console.log("Installing MailApi with options : ");
    console.log(options);
    console.log("----------");
}

export default {
    install: (app, options) => {
        app.config.globalProperties.$mailApi = {
            key: options,
            /**
             * Envoie un message à un Email donné en paramètre
             * @param {*} from UserToken de l'utilisateur connecté
             * @param {*} to Adresse mail du destinataire
             * @param {*} subject Sujet du message
             * @param {*} content Contenu du message, sous format HTML
             */
            async sendMail(from, to, subject, content) {
                const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/send?key=${this.key}`;
                const mail = createMimeMessage();
                console.log(from);
                console.log(to);
                mail.setSender(from);
                mail.setRecipient(to);
                mail.setSubject(subject);
                mail.setMessage("text/plain", content);

                const body = {
                    raw: Buffer.from(mail.asRaw()).toString("base64"),
                };

                return await fetch(url, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
                        "Content-Type": "message/rfc822",
                    },
                    mode: "cors",
                    body: JSON.stringify(body),
                })
                    .then((e) => {
                        if (e.status != "200") throw e;
                        else return e;
                    })
                    .then((e) => e.blob())
                    .then((e) => e.text())
                    .then((e) => {
                        return JSON.parse(e);
                    })
                    .catch((e) => {
                        console.error(e);
                        return null;
                    });
            },

            async sendMailToCoach(subject, content) {
                const from = (await app.config.globalProperties.$stagiaireRepository.getStagiaire()).CompteGoogle;
                const to = (await app.config.globalProperties.$coachRepository.getCoach()).CompteGoogle;
                return await this.sendMail(from, to, subject, content);
            },
        };
        init(app.config.globalProperties.$mailApi, options);
    },
};
