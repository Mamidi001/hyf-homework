const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(danishWordsArray) {
	return danishWordsArray.sort((a, b) => a.length - b.length)[0];
}

console.log(getShortestWord(danishWords));



const danishString = "Jeg har en blå bil";
const danishArrayList =[];
function danishArray(){
    if(danishString.includes('å')) {
        const å = /å/g;
        const count = danishString.match(å).length;
        return ({total :1, å: count});
    }
}
console.log(danishArray('count'));
    
// second string

const danishString2 = "Blå grød med røde bær";
const danishArrayList2 =[];
function danishArray2(){
        if(
            danishString2.includes('å') ||
            danishString2.includes('æ') ||
            danishString2.includes('ø')
        ) {
           
            const å =/å/g;
            const æ =/æ/g;
            const  ø=/ø/g;
            const countÅ = danishString2.match(å).length;
const countÆ = danishString2.match(æ).length;
const countØ = danishString2.match(ø).length;
const totalCount = countÆ + countØ + countÅ;
return({totalCount,å :countÅ, Æ :countÆ,Ø :countØ })
}
}
console.log(danishArray2('countÅ'));
    





