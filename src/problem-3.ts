const countWordOccurrences = (sentence:string, word:string)=>{
    const lowerCaseOfSentence = sentence.toLocaleLowerCase();
    const lowerCaseOfWord = word.toLocaleLowerCase();

    const WordPresentInSentence = lowerCaseOfSentence.split(' ');
    const ArrayOfMatchingWord= WordPresentInSentence.filter(w=>w === lowerCaseOfWord)

    return ArrayOfMatchingWord.length
}


