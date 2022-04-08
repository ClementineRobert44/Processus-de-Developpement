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
- Index : page principale, et affiche le contenu du routeur
    - Dépend de : BarMenu, Footer
- BarMenu : barre de menu affichée sur toutes les pages
    - Dépend de : GoogleSignIn
- GoogleSignIn : bouton d'authentification Google
- Footer : barre de bas de page affichée sur toutes les pages
- ExerciceCard : composant résumant les informations d'une carte
- ModuleCard : composant résumant les informations d'un module et un résumé de ses exercices
    - Dépend de : ExerciceCard
- WIP : page Work In Progress
- CommentPage : page permettant de saisir un commentaire
- ExercicePage : page affichant les détails d'un exercice
- ModuleListPage : page affichant la liste des modules de l'utilisateur connecté
    - Dépend de : ModuleCard
- ModulePage : page affichant les exercices d'un module
    - Dépend de : ModuleCard

### Hiérarchie cible
ProgramPage
    - * ModuleCard
ModulePage
    - 1 ModuleDetailCard
        - * ExerciceCard
ExercicePage
    - 1 ExerciceDetailCard
