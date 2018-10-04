/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    describe("RSS Feeds", function() {
      // This is the provided first test suite
      it("are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* This test loops through each feed
 * in allFeeds and ensures each has a URL and
 * URL is not empty.
* Uses .forEach() method as suggested in Student Forum */

      it("URL defined and not empty", function() {
        allFeeds.forEach(function(feed) {
          expect(feed.url).toBeDefined; // Uses same method as provided test above
          expect(feed.url.length).not.toBe(0); //uses same method as provided test above
        });
      });

      /* This test is the same as above.
         * The only difference is that name is being tested.
         * Used same method as above to implement.
         */
      it("name defined and not empty", function() {
        allFeeds.forEach(function(feed) {
          expect(feed.name).toBeDefined; // Uses same method as provided test above
          expect(feed.name.length).not.toBe(0); //uses same method as provided test above
        });
      });
    });

    /*This is the second test suite. As required named 'The menu' */

    describe("The Menu", function() {
      const body = document.querySelector('body');
      /* The menu element is hidden by default. In the HTML/CSS
         * This is controlled by the 'menu-hidden' class. This
         * test checks that as a default the 'menu-hidden' class
         * is present. */

      it("menu is hidden by default", function() {
        // moved const body to top because it is used in more than one test
        expect(body.classList).toContain('menu-hidden');
      });

      /* This uses .click method described in Cranford's blog */

      it("menu displays when icon clicked and hides when clicked again", function() {
        const menuIcon = document.querySelector('.menu-icon-link');

        menuIcon.click();
        expect(body.classList).not.toContain('menu-hidden'); // This is just the same method as used in last test

        menuIcon.click();
        expect(body.classList).toContain('menu-hidden'); // This is just the same method as above
      });
    });

    /* This test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * This was configured using Cranford's .children method to get
     * the results needed and Jasmine tutorial for callbacks  */
    describe("Initial Entries", function() {
      const feeder = document.querySelector('.feed');

      beforeEach(function(done) {
        //Method provided in instruction
        loadFeed(0);
        loadFeed(1, done); //Jasmine will pass a function to be invoked when asynchronous work has been completed.
      });

      it("at least single entry in feed container", function() {
        expect(feeder.children.length).not.toBe(0);
      });
    });
    /* This test ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.This uses
     * method similar to Cranford blog */

    describe("New Feed Selection", function() {
      let firstFeed; // Defined below
      let secondFeed; //Defined below

      beforeEach(function(done) {
        loadFeed(0, function() {
          firstFeed = document.querySelector('.entry').textContent; // Grabs title for comparison
          console.log(firstFeed); //prints grabbed title to console

          loadFeed(1, function() {
            secondFeed = document.querySelector('.entry').textContent; // Grabs title for comparison
            console.log(secondFeed); //prints grabbed title to console

            done();
          });
        });
      });
      //Comparison
      it("content changes when loaded", function() {
        expect(firstFeed === secondFeed).not.toBe(true); // This is exact match and not.toBe method from above
      });
    });
  })()
);
