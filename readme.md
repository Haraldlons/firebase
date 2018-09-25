# Firebase Test Upload Files Repository

Hosted by Firebase: 
https://web-quickstart-a295e.firebaseapp.com/

## Host project locally
```bash
firebase serve
```

## Prerequisite
- firebase cli



## Various notes
```bash
firebase init #doesnt work on windows unless you first type
firebase login --interactive
```

### Initializing project
```bash
firebase init
# Choose hosting
# public directory: public

firebase deploy
# hosting ...

firebase open

# staging environment
firebase use --add
# staging //Navn

firebase use default //gå tilbake til default
firebase deploy
```
Når man skal skaffe seg token, pass på, ikke bruk GIT Bash shell, fordi enkelte kommandoer fungerer ikke da. 
