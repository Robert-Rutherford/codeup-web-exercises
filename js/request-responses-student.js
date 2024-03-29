$(document).ready(function () {
    "use strict";
    console.log("Intro to AJAX!");

    /*********************************************
     *              INTRO TO AJAX
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's make our first AJAX request. Generate a new Hookbin
     * endpoint, then query it for a username...
     */
    $.ajax("https://hookb.in/3O38ojNWzEUL6Jexagdo");


    /*
     * TO DO TOGETHER: For this next one, we'll send over some data. Add the
     * following JavaScript Object to your Hookbin AJAX request:
     */

    var person = {
        type: "POST",
        data: {
            first: "Jesse",
            last: "Pinkman",
            location: "unknown"
        }
    };

    // console.log($.ajax("https://hookb.in/3O38ojNWzEUL6Jexagdo", person));

    // console.log($.ajax());

    /*
     * TO DO: Refactor the first example using a GET request object instead of
     * appending a query to the url.
     */
    var newPerson = {
        type: "GET",
        data: {
            first: "Bob",
            last: "Phillian",
            location: "unknown"
        }
    };

    // console.log($.ajax("https://hookb.in/3O38ojNWzEUL6Jexagdo", newPerson));


    /*********************************************
     *              REQUESTS and RESPONSES
     ******************************************** */

    /*
     * TO DO TOGETHER: Now, let's see how we can use AJAX requests to communicate with an
     * API and get data back. Uncomment the line below.
     */

    // $.ajax("https://pokeapi.co/api/v2/pokemon").done(function(data){
    //     console.log(data);
    // });

    /*
     * TO DO: Look up the Star Wars API and make a similar request that would
     * return a list of all Star Wars films.
     */
    // $.ajax("https://swapi.co/api/films/").done(function (data) {
    //     console.log(data);
    // }).fail(function (jqXhr, status, error) {
    //     console.log("You've been Blocked");
    //     console.log(status);
    //     console.log(error);
    //     console.log(jqXhr);
    // }).always(function () {
    //     console.log("loading...")
    // });

    /*
     * That's fine and dandy, but what if we have a local JSON file and
     * want to request data from that? We can! The URL will be the path to
     * the JSON file.
     *
     * TO DO TOGETHER: Let's make a request to the books inventory we saved
      * previously.
     */
    // var myBooks = $.ajax("./data/books.json");
    // myBooks.done(function (data) {
    //     console.log(data);
    // });


    /*
     * TO DO TOGETHER: What if we want to display a message if this AJAX request
     * fails?
     */
    // myBooks.fail(function (status) {
    //     console.log("check you file path.")
    // });

    /*
     * TO DO TOGETHER: How about a function that always runs whether the request
     * fails or not?
     */
    // myBooks.always(function () {
    //     console.log("Looking for books...");
    // });

    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "Something wrong with your request..." if it fails.
     */
    // answer up above;
    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "...loading" whether the request fails or not.
     */
    // answer up above;
    /*
     * TO DO TOGETHER: Create a Star Wars API request that queries for "A
     * New Hope" and store this request in a variable.
     *
     * Take a look at the object that is being returned. Write a console log
      * that displays the director of the film.
     */
    // var myMovie = $.ajax("https://swapi.co/api/films/", {
    //     type: "GET",
    //     data: {
    //         "search": "A New Hope"
    //     }
    // });

    // myMovie.done(function (data) {
    //     console.log("the director of the move is "+ data.results[0].director);
    // });


    /*
     * TO DO: Create a new variable that makes a similar request. Search for
     * "The Force Awakens" and console log its release date.
     */
    // var myMovie2 = $.ajax("https://swapi.co/api/films/", {
    //     type: "GET",
    //     data: {
    //         "search": "The Force Awakens"
    //     }
    // });
    // console.log(myMovie2);

    // myMovie2.done(function (data) {
    //     console.log("Movie release date: "+ data.results[0].release_date);
    // });

    /*
     * TO DO: Make a request to books.json. Return the author of "The
     * Canterbury Tales."
     */
    // var myBooks = $.ajax("./data/books.json");
    //
    // myBooks.done(function (data) {
    //     // console.log(data[17].author);
    //     var theAuthor;
    //     for (var i = 0; i < data.length; i++){
    //         if (data[i].title === "The Canterbury Tales"){
    //             theAuthor = data[i].author;
    //         }
    //     }
    //     console.log(theAuthor);
    // });


    /*********************************************
     *              GET and POST SHORTHAND
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's take a look at our AJAX requests so far and see
     * how we can refactor them with the GET and POST shorthand.
     *
     * Remember, this isn't necessary. It's up to you to decide which
     * syntax to use. (: At the end of the day, what we are doing is making
     * a request to a server!
     */


    /*
     * TO DO TOGETHER: There's some additional refactoring we can do. We can
     * break up our callback methods on an AJAX request.
     *
     * We can also declare named functions to pass in to these methods.
     */

    /*********************************************
     *              AJAX and HTML
     ******************************************** */

    /*
     * TO DO TOGETHER: Make a request to books.json and append all book
     * titles to your html. You may need to create a div and assign a
     * class/id to target it.
     */
    function generateBook() {
        var requestBooks = $.ajax("./data/books.json");

        requestBooks.done(function (data) {
            // console.log(data);
            $.each(data, function (index, book) {
                // console.log(book.title);
                $(".main").append("<h2>" + book.title + "</h2>" + "<h4>" + book.author + "</h4>");
            })
        }).fail(function (data) {
            console.log("Error something went wrong.");
        });
    }

    generateBook();

    /*
     * TO DO: Add your favorite book to the end of books.json.
     */

    /*
     * Bonus: Create a button the refreshes the contents of your html
     * without refreshing the page.
     */
    $("#reload").click(function () {
        $('.main').html("");
        generateBook();
        // $(this).load(generateBook(), function () {
        //     console.log("reload commited");
        // });
    })


});