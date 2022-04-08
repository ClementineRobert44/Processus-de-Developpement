import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../routes/Index.vue";
import WIP from "../components/WIP.vue";
import ProgramPage from "../routes/ProgramPage.vue";
import ModulePage from "../routes/ModulePage.vue";
import ExercicePage from "../routes/ExercicePage.vue";
import CommentPage from "../routes/CommentPage.vue";
import StagiairePage from "../routes/StagiairePage.vue";

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/modules",
        name: "Modules",
        component: ProgramPage,
    },
    {
        path: "/modules/:id",
        name: "Module",
        props: true,
        component: ModulePage,
    },
    {
        path: "/modules/:id/exercice/:idE",
        name: "Exercice",
        props: true,
        component: ExercicePage,
    },
    {
        path: "/achievements",
        name: "Achievements",
        component: WIP,
    },
    {
        path: "/contact",
        name: "Contact",
        component: WIP,
    },
    {
        path: "/commentaire/:id",
        name: "Commentaire",
        props: true,
        component: CommentPage,
    },
    {
        path: "/stagiaire",
        name: "Stagiaire",
        component: StagiairePage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
