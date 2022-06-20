var minDistance = function (word1, word2) {
  const Map = {};
  const minDis = (word1, word2) => {
    //if (Map[`${word1}:${word2}`]) return Map[`${word1}:${word2}`];

    if (word1 === "" && word2 == "") return 0;
    if (word1 !== "" && word2 === "") return word1.length;
    if (word1 === "" && word2 !== "") return word2.length;
    if (word1[0] === word2[0]) {
      return minDis(word1.slice(1), word2.slice(1));
    }

    const add = 1 + minDis(word1, word2.slice(1));
    const del = 1 + minDis(word1.slice(1), word2);
    const rep = 1 + minDis(word1.slice(1), word2.slice(1));

    //Map[`${word1}:${word2}`] = Math.min(...[add, del, rep]);
    return Math.min(...[add, del, rep]);
  };

  return minDis(word1, word2);
};

console.log(minDistance("dinitrophenylhydrazine", "acetylphenylhydrazine"));
