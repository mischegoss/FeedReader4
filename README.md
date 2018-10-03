# Project Overview

This is the 4th Project of the Udacity FEND program.

In this project, I was given starter code for a web-based application that reads RSS feeds. It already included [Jasmine](http://jasmine.github.io/) as well as an incomplete first test suite. The project was to write the remaining test suites.

## Accessing the project

To access the project, do the following:

* Clone this repository and open the `index.html` in the browser of your choosing.
* You can also download the project as a zip file, unzip the folder and open the `index.html` file of your choosing.


## Resources

* Grow With Google Nanodegree Student Forum
* Matthew Cranford's Project 4 [walkthrough](https://matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/)
* JavaScript Testing [course](https://www.udacity.com/course/ud549)


## How was the project completed?

Here is the rubric used: [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. I took the the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. I downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. I wrote a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
4. I wrote a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
5. I wrote a new test suite named `"The menu"`.
6. I wrote a test that ensures the menu element is hidden by default.
7. I wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
8. I wrote a test suite named `"Initial Entries"`.
9. I wrote a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
10. I wrote a test suite named `"New Feed Selection"`.
11. I wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
12. I made sure test should be dependent on the results of another.
13. I wrote a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.
