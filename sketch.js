var votersCount = 0;
var database;
var form;
var voters;
function setup()    {
	console.log("Inside function setup");
    canvas = createCanvas(600,600);
    database = firebase.database();

    form = new Form();
    form.display();
    voters = new Voters();
}
