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
  
  let random_puzzles_call_count = 0;
  
  export default {
    'get /dev/random_puzzles': function (req, res) {
      const responseObj = random_puzzles[random_puzzles_call_count % random_puzzles.length];
      random_puzzles_call_count += 1;

      console.log(responseObj);
      setTimeout(() => {
        res.json(responseObj);
      }, 3000);
    },
  };