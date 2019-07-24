export const Kanji = (level, lesson) => {
  const Kanji = require(`./database/${level}/Kanji.json`);
  return Kanji.filter(kanji => kanji.Bai === lesson);
};
