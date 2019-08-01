function language(lang){
    change("lang","none");
    change(lang,"block");
    document.children[0].lang = lang;
}

function change(lang,visibility){
  let tab = document.getElementsByClassName(lang);
  for (elem of tab){
    elem.style.display = visibility;
  }
}
