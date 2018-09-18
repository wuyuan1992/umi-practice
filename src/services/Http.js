import axios from 'axios';

export default class Http{
    static get(url){
        return new Promise(async (resolve, reject)=>{
            // console.log(url);
            const random_puzzles = [
                {
                  setup: 'What is the object oriented way to get wealthy ?',
                    punchline: 'Inheritance',
                },
                {
                  setup: 'To understand what recursion is...',
                  punchline: "You must first understand what recursion is",
                },
                {
                  setup: 'What do you call a factory that sells passable products?',
                  punchline: 'A satisfactory',
                },
              ];

            // let data = await axios.get('/dev/random_puzzles');
            // console.log(data);
            resolve(random_puzzles);
        })
    }
}