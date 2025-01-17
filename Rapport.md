# Compte Rendu TP Jukebox

## Binôme
- Messaoudi Amin
- Nadir Ayoub

## Choix de conception et de réalisation

### Structure du projet
Nous avons structuré notre projet en utilisant les conventions de Vue.js pour organiser les composants, les vues et les styles. La structure du projet est la suivante :
- `src/`: Contient le code source de l'application.
  - `components/`: Contient les composants réutilisables.
  - `styles/`: Contient les fichiers de style CSS.

### Composants
Nous avons créé plusieurs composants pour modulariser notre application et faciliter la maintenance du code.

#### `App.vue`
Le composant principal de l'application. Il importe et utilise le composant [`HomeView`](src/components/HomeView.vue) pour afficher la vue principale. Il gère également l'état de la liste des chansons (`songs`) et les méthodes pour ajouter et supprimer des chansons.

#### `HomeView.vue`
Ce composant représente la vue principale de l'application. Il contient le formulaire pour ajouter des chansons, les options de mode de répétition et la liste des chansons. Il gère également la lecture des chansons et le passage à la chanson suivante en fonction du mode de répétition.

#### `Playlist.vue`
Ce composant affiche la liste des chansons et permet de jouer ou de supprimer une chanson. Il gère également le mode de répétition sélectionné par l'utilisateur.

### Styles
Nous avons utilisé des styles scoped pour chaque composant afin de limiter l'application des styles à l'intérieur du composant. Cela permet d'éviter les conflits de styles entre les composants.

### Gestion des événements
Nous avons utilisé les événements personnalisés pour la communication entre les composants parents et enfants. Par exemple, le composant `HomeView` émet un événement `play-song` lorsqu'une chanson est jouée, et le composant `Playlist` écoute cet événement pour mettre à jour l'état de la lecture.

### Gestion des fichiers audio
Nous avons utilisé l'API `URL.createObjectURL` pour gérer les fichiers audio locaux. Lorsqu'un fichier est sélectionné, nous créons une URL pour ce fichier et l'utilisons comme source pour l'élément audio.

## Difficultés rencontrées (optionnel)
- Mise en place de l'environnement de travail
- Gestion des fichiers audio locaux et des liens.
- Implémentation des différents modes de répétition.

## Extensions réalisées (optionnel)