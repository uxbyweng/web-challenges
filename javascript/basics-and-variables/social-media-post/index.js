console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
const postTitle = "Chancellor Merz has called Trump a 'Trumpeltier'.";
const postContent =
    "Kanzler Merz hat in einer öffentlichen Aussage Donald Trump als „Trumpeltier“ bezeichnet. Die Bemerkung sorgt aktuell für Diskussionen über politische Etikette und die Frage, wie weit politische Spitzenvertreter in ihren Formulierungen gehen dürfen. Während einige den Kommentar als harmlose Spitze werten, kritisieren andere die mangelnde diplomatische Zurückhaltung. Die Reaktionen aus den USA und aus der eigenen Koalition stehen noch aus.";
let postLikes = 38727828;
const postUser = "Jan Böhmermann";
const isReported = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--
console.log(postTitle);
console.log(postContent);
console.log(postLikes);
console.log(postUser);
console.log(isReported);

postLikes++; // increase  number of likes by one
console.log(postLikes);
// --^-- write your code here --^--
