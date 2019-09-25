const notes = require('./notes');

/* Node.js provides a bare - bones way to access command line arguments.While it’s a good start, it doesn’t provide any way to parse more complex command line arguments. Instead, we use Yargs to easily set up a more complex set of arguments for
your application. */

const yargs = require('yargs');

// console.log(process.argv);

//Customise yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler: function(argv){
    notes.addNote(argv.title, argv.body);
  }
})


// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'remove title',
      demandOption: true,
      type: 'string',
    }
  },
  handler: function(argv){
    notes.removeNote(argv.title);
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function(){
    console.log("Reading a note");
  }
})

//Create a list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function(){
    console.log("Listing a note");
    
  }
})

// add, remove, read, list

yargs.parse();
// console.log(yargs.argv);
