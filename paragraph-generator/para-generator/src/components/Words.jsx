import React from 'react'
import { useState, useEffect } from 'react'
import Data from './Data'

// function Words( {words} ) {

//     function generateSentence(wordLength) {
//      const { subjects, verbs, objects, adjectives, adverbs } = Data[0]
//         let sentence = "";
      
//         for (let i = 0; i < wordLength ; i++) {
//           const randomSubjects = Math.floor(Math.random() * subjects.length);
//           const randomVerbs = Math.floor(Math.random() * verbs.length)
//           console.log(randomSubjects)
//           sentence = sentence +  subjects[randomSubjects] + verbs[randomVerbs] + " " ;
//         }
      
//         // Additional logic for sentence construction or variation can be added here
      
//         return sentence.trim(); // Remove trailing space
//       }
      

//   return (
//     <div > {generateSentence(words)}</div>

//   )
// }

// export default Words


function Words({ words }) {
  function generateSentence(wordLength) {
    const { subjects, verbs, objects, adjectives, adverbs } = Data[0];  //could be function in data the const { subjects, verbs } = Data()
    let sentence = "";

    for (let i = 0; i < wordLength; i++) {
      const randomCategoryIndex = Math.floor(Math.random() * 5); // 5 categories: subjects, verbs, objects, adjectives, adverbs

      switch (randomCategoryIndex) {
        case 0:
          sentence += subjects[Math.floor(Math.random() * subjects.length)] + " ";
          break;
        case 1:
          sentence += verbs[Math.floor(Math.random() * verbs.length)] + " ";
          break;
        case 2:
          sentence += objects[Math.floor(Math.random() * objects.length)] + " ";
          break;
        case 3:
          sentence += adjectives[Math.floor(Math.random() * adjectives.length)] + " ";
          break;
        case 4:
          sentence += adverbs[Math.floor(Math.random() * adverbs.length)] + " ";
          break;
        default:
          break;
      }
    }

    return sentence.trim();
  }

  return (
    <div>{generateSentence(words)}</div>
  );
}

export default Words;