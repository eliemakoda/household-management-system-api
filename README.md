# Systeme de Gestion de déchets menagers
Bonjour Et Bienvenue sur ce projet consistant à créer un système pour `Gestion des dechets Menagers`.
le systeme esr constitué de plusieurs entités que sont:
 * les `utilisateurs` qui peuvent être de plusieurs profile `ADMIN` `GUESS` `AGENT`
 * `Dechet`: que représente les déchets que prend en considération la société lors du recyclage
 * `Commande`: qui représente une commande faites par un client pour besoin de recyclage de déchets 
 *  `ZoneCollecte`: que sont les zone auquelles la collecte de déchets est possible 
 *  `Notification`: la notification envoyée au client avant , pendant et après le recyclage 
 *  `Historique collecte`: table qui stocke les differentes collecte qui on eu lieu 
  

  # Quelques regles de Gestion 
  * tous les utilisateurs ne disposent pas des mêmes privilèges / niveau de privilège 
  * les administrateurs sont privés d'accès aux interface des agents 
  # Technologies

  sous réserve de l'écriture de tests avec `jest` 
  et d'une documentation automatique avec `swagger`
  le présent système est basé sur la technologie
  * javascript 
    *  framework Nodejs -> express
  
## Architecture du projet 
le présent projet est basé sur une architecture 
`MVC`  créée from scratch.
* model : le model de donnée et l'interraction directe avec la bd
* controller: qui fait des vérification sur la nature des donnée et est en constante interraction avec la vue et le model
* la vue: qui receptionne les requêtes http
* router : qui définit les endpoints de l'api 

il existe des middleware de sécurité 
comme ceux limittant le nombre de requête par inteface; sécurité...
le présent systeme utilise l'orm `Prisma` qui permet l'interraction avec les bases de données sql et nosql sans avoir à modifier le code du systeme , juste le modèle de donnée.

## lancer l'interface de la base de donnée

* npx prisma studio
  ## comment lancer ?
  - git clone url 
  - npm install 
  - npm start


# Token 
vous aurez besoin d'un token pour utiliser l'application 
`Comment avoir son token?`
vous devez vous connecter à l'api grace à l'endpoint 
`/login`

les information par défaut de connexion pour avoir un token d'une durée d'au moins 24h sont: 
* {
  "email":"eliemakodakowo@gmail.com",
  "password":"Markvonarms11!"
  }


creer une fichier `.env` et ajoutez les informations nécessaires 

il doit ressembler à ceci 
`
JWT_SECRET=merveilleAnge
PORT=5500`