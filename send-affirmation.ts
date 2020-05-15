const getAffirmations = async (fileName: string): Promise<Array<string>> => {
 const decoder = new TextDecoder("utf-8");
 const text: string = decoder.decode(await Deno.readFile("affirmation.txt"));
 return text.split("\n");
};

const affirmations: Array<string> = await getAffirmations("affirmation.txt");
const affirmation: string = affirmations[Math.floor(Math.random() * affirmations.length)];
console.log(affirmation);
