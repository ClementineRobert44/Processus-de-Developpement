# bricocoach

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Architecture

### Pages

-   Index : page principale, et affiche le contenu du routeur
    -   Dépendances :
        -   BarMenu : barre de menu affichée sur toutes les pages
            -   GoogleSignIn : bouton d'authentification Google
        -   Footer : barre de bas de page affichée sur toutes les pages
-   ProgramPage : page affichant la liste des modules
    -   ModuleCard : composant résumant les informations d'un module
-   ModulePage : page affichant le détail d'un module
    -   ModuleDetailCard : composant détaillant les informations d'un module et un résumé de ses exercices
        -   ExerciceCard : composant résumant les informations d'une carte
-   ExercicePage : page affichant le détail d'un exercice
    -   ExerciceDetailCard : composant détaillant un exercice et permettant de modifier l'état d'un exercice
-   WIP : page Work In Progress
-   CommentPage : page permettant de saisir un commentaire

Feuille test : 1QfwDg_7Zjp5tmRTb2QKZJxAaNcQs02icgImVZBj-Vrs
