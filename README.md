# Friend-Finder a compatibility-based (dating) app. This full-stack site will take in results of a users' survey, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

Used express, body-parser and path npm packages to handle routing. Deployed to Heroku - please visit - https://bestfriend-finder.herokuapp.com/

A survey of 10 questions on a scale of 1 to 5 based on how much the user agrees or disagrees with a question. The results will be compared to the difference between the current user's scores and those from other users, question by question. The closest match will be the user with the least amount of difference. Once the current user's most compatible friend is found, he/she will be displayed as a modal pop-up.

html.js file includes two routes: A GET route to /survey which displays the survey page, and a default USE route that displays the home page.

apiRoutes.js file contains two routes: A GET route with the url /api/friends (displays a JSON of all possible friends), A POST routes /api/friends (handles incoming survey results and compatibility logic).
