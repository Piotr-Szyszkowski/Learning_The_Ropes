function removeUrlAnchor(url){
   return url.replace(/#.*/, "")
 };

 let t1 = 'www.codewars.com#about';
 console.log(removeUrlAnchor(t1));