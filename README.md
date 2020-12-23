## Frontend Applications

## Table of contents:
* [Description](#black_nib-description)
* [Feature](#small_orange_diamond-feature)
* [Datasets](#link-datasets)
* [Install](#arrow_down-install)
* [Deploy](#globe_with_meridians-deploy)
* [Sources](#books-sources)

## :black_nib: Description
For the Frontend Application course within the Information Design semester (@cmda-tt) we learn about frameworks and libraries in JavaScript.

This repository shows a data visualization with React and D3 using datasets provided by the RDW. This visualization will visualize the following main question:

**How about parking an electric car in the Netherlands?**

In order to be able to visualize this main question, several sub questions have been created. You can find these in my [wiki - Concept](https://github.com/veerleprins/frontend-applications)

## :small_orange_diamond: Feature


## :link: Datasets
The dataset that was used is the datasets supplied by the RDW on behalf of *De Volkskrant*. These are public datasets and can be found at the links below:
* [Specifications parking area in the Netherlands](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s)
* [Location of parking garages in the Netherlands](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34)

## :arrow_down: Install
### 1. Install npm :computer:
Before getting started, you need to install nvm. nvm can be installed by typing the following line of code in terminal and pressing enter:

```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh ```

If nvm has been successfully installed, you can check the version by typing the following line of code in the terminal and pressing enter:

```nvm --version```

### 2. :open_file_folder: Clone folder
Then you need to download this project and open it with your code editor. To do this, open your terminal with the correct path in which you want this repository. **Example**:

```cd/Desktop/Repos```

Then type the following line of code into your terminal:

```git clone https://github.com/veerleprins/frontend-applications.git```

With this line of code, you've successfully downloaded the repository to your desired location.

### 3. Install all the packages :bookmark_tabs:
Then type the code below into your terminal:

``` npm install ```

With this line of code, you download all the packages you need for this repo.

### 4. :white_check_mark: Start and run the code
Go to the repository in the terminal and add the following line of code below:

``` npm start```

Now React opens http://localhost:300/ automatically in your browser to view the visualization! :raised_hands:

## :globe_with_meridians: Deploy


## :books: Sources
<!-- https://bradfrost.com/blog/post/atomic-web-design/ -->
<!-- https://reactjs.org/ -->
<!-- https://www.youtube.com/watch?v=Uo_1zgaB2qM -->

* Unkown, E. & StackOverflow. (2018, 6 december). How do I center an SVG in a div? Stack Overflow. https://stackoverflow.com/questions/8639383/how-do-i-center-an-svg-in-a-div 
<!-- For centering SVG like the piechart -->
* Cho, K. & Medium. (2019, 31 januari). How to create a pie chart with D3.js and React Hooks (Part 1). Medium. https://medium.com/stationfive/how-to-create-a-pie-chart-with-d3-js-and-react-hooks-part-1-81bcd7f39b32
<!-- For fixing the error 'Warning: Invalid value for prop `d` on <path> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM.'  -->
* Holtz, Y. & D3.js Graph Gallery. (2018). Basic pie chart in d3.js. D3.js Graph Gallery. https://www.d3-graph-gallery.com/graph/pie_basic.html
<!-- For first time creating pie chart with D3.js -->
* Bobi, M., StackOverflow, & Crowder, T. J. (2011, 20 april). How to format numbers? Stack Overflow. https://stackoverflow.com/questions/5731193/how-to-format-numbers
<!-- For fixing the readability of the large million number of the number of cars. -->
* W3Schools.com. (z.d.). Colors Gradient. Geraadpleegd op 21 december 2020, van https://www.w3schools.com/colors/colors_gradient.asp
<!-- For creating a linear gradient background. -->
* Unkown, A. & StackOverflow. (2016, 12 oktober). How do I reference a local image in React? Stack Overflow. https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
<!-- For adding the car PNG file with import within React. -->


## :lock: License
This repo is licensed as [MIT](https://github.com/veerleprins/frontend-applications/blob/main/LICENSE) by :copyright: [Veerle Prins](https://github.com/veerleprins), 2020



<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
