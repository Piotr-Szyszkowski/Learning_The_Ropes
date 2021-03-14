
// below saved in separate file
function domainName(url){
   let myEx = /(?<!\/\.)(\w+)(?=\.)/g;
   let ex1 = url.match(myEx);
   for (let i = 0; i < ex1.length; i++) {
      if (ex1[i] !== "www") {
         return ex1[i];
      }
   }
 };


let t1 = "http://google.com";// "google"
let t2 = "http://google.co.jp";// "google"
let t3 = "www.xakep.ru";//"xakep"
let t4 = "https://youtube.com";//"youtube"
let t5 = "https://www.y0f5p6z9outvnw7khzw5.io/index.php"; // "y0f5p6z9outvnw7khzw5"
console.log(domainName(t5));