
if(localStorage.getItem('prenom')){
    document.body.append("Bonjour "+localStorage.getItem('prenom'))
}else{
    let prenom=prompt("Entrer votre prenom");
    localStorage.setItem('prenom',prenom);
    document.body.append("Bonjour "+localStorage.getItem('prenom'))
}
localStorage.clear()