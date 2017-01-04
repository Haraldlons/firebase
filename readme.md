When initializing firebase hosting locally.

HELLO  MY FRIEND

firebase init doesnt work on windows unless you first type
firebase login --interactive
Follow instructions, and dont host any other sides locally simultaneously(wow, that was a hard word).


firebase init
Choose hosting
public directory: public

firebase deploy
hosting ...

firebase open

staging environment
firebase use --add
staging //Navn

firebase use default //gå tilbake til default
firebase deploy

Når man skal skaffe seg token, pass på, ikke bruk GIT Bash shell, fordi enkelte kommandoer fungerer ikke da. 
