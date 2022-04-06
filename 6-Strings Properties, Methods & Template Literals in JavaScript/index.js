let html = "this is your first email and first date lorem if youu same str2";

//html er lenght jante use kore 
// console.log(html.length);

//lowerCase UpperCase
// console.log(html.toUpperCase);
// console.log(html.toLowerCase);

//index number er position a kon letter ache ta jante 
console.log(html[3]);

//letter koto number index a ache ta jante 
console.log(html.indexOf('is'));

//string er majhe koto number index ki letter ba word ache ta jante 
console.log(html.charAt(5));

//string sesh (str2) word ta diye hoyche ki na tar sotto ta jaichai korte, jodi str2 diye sesh hoy to true dekhabe r jodi oi word ta diye na sesh hoy to false dekhabe  
console.log(html.endsWith('str2'));

//apni ekta letter ba word diye check korte paren ta apnar string er majhe ache ki na . jodi apnar string er majhe oi word ta thake to true dekhabe r jodi na thake to false dekhabe
console.log(html.includes('he'));

//jodi apnar string er majhe hote index number 0-4, ba 4-6, pojonto ki ki word ba letter ache ta dekhte chan to
console.log(html.substring(2,5));

//jodi string er index number dhore slice ba vag korte chan tahole 
console.log(html.slice(3,5));

//apnar string er majhe joto gula space ba string dhore vag korte chan tahole 
console.log (html.split(' '));

//apnar string er majhe kono word poribothon korte chaile . dhore this er position a is bosate hobe tokhon 
console.log(html.replace('youu', 'oliul'));


// template literals

let fruit1 = 'orange';
let fruit2 = 'Apple';

let myHtml =`Hello
<h1>this is my header</h1>
<p> you like ${fruit1}
and ${fruit2}
`;
document.body.innerHTML =myHtml;