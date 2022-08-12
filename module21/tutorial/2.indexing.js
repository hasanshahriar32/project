//searching

const lyrics = 'tumi bondhu kala pakhi, ami jeno ki... kala pakhi, ami jeno ki... kala pakhi, ami jeno ki...';
const search = 'Kala';
const lowerLyrics = lyrics.toLowerCase();
const lowerSearch = search.toLowerCase();
const doexExist = lowerLyrics.includes(lowerSearch);
console.log(doexExist); 
console.log(lyrics.indexOf('kala'));


console.log(lyrics.indexOf('nai'));





if (lyrics.indexOf('kala')!=-1){
    console.log('it exixts');
}
else{
    console.log('it does not exixts');
}


console.log(lyrics.startsWith('tumi'));