/*
 Detects the browser language
 */
var userLang = navigator.language || navigator.userLanguage;

/*
 test if ou cookie is set
 */

console.log();

if(localStorage.getItem('lang')!=null){
  //   it is set, so no redirect
}
else{
  // The cookie is not set, so set it, and redirect
  langstring=userLang.split('-')[0];
  localStorage.setItem('lang',langstring);
  redirect(langstring);
}

/*
 redirects to the desired URLs
 Only the first two letters of the ISO country code are used
 */
function redirect(actuallang){
  var url ='/';
  switch(actuallang){
    case 'en':
      url ='http://link-en';
      break;
    case 'fr':
      url ='http://link-fr';
      break;
    case 'ru':
      url ='http://link-ru';
      break;
    case 'es':
      url ='http://link-es';
      break;
    case 'de':
      url ='http://link-de';
      break;
    default:
      url='http://link-default';
      break;
  }
  window.location.replace(url);
}
