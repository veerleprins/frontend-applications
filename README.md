## Frontend Applications

<img width="1624" alt="Screenshot of the page with the visualizations." src="https://user-images.githubusercontent.com/35265583/104816885-454efe00-581e-11eb-8c93-da6a5e05cfeb.png">

## Table of contents:

- [Description](#black_nib-description)
- [Feature](#small_orange_diamond-feature)
- [Datasets](#link-datasets)
- [Install](#arrow_down-install)
- [Deploy](#globe_with_meridians-deploy)
- [Sources](#books-sources)

## :black_nib: Description

For the Frontend Application course within the Information Design semester (@cmda-tt) we learn about frameworks and libraries in JavaScript.

This repository shows a data visualization with React and D3 using datasets provided by the RDW. This visualization will visualize the following main question:

**How about parking an electric car in the Netherlands?**

In order to be able to visualize this main question, several sub questions have been created. You can find these in my [wiki - Concept](https://github.com/veerleprins/frontend-applications)

## :small_orange_diamond: Feature

Various visualisations have been made on the interactive website. Below I have named these with the sources I used for the code:

- [Pie chart](https://medium.com/stationfive/how-to-create-a-pie-chart-with-d3-js-and-react-hooks-part-1-81bcd7f39b32)
- [Bar chart](https://www.youtube.com/watch?v=ZpBPLpgIvu8&list=PL9yYRbwpkykuK6LSMLH3bAaPpXaDUXcLV&index=22&ab_channel=CurranKelleher)
- [Map](https://www.youtube.com/watch?v=mzZ1fCXq-uo&list=PL9yYRbwpkykuK6LSMLH3bAaPpXaDUXcLV&index=30&ab_channel=CurranKelleher)

## :link: Datasets

The dataset that was used is the datasets supplied by the RDW on behalf of _De Volkskrant_. These are public datasets and can be found at the links below:

- [Specifications parking area in the Netherlands](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s)
- [Location of parking garages in the Netherlands](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34)
- [Alleen Personenauto's](https://opendata.rdw.nl/Voertuigen/Alleen-Personenauto-s/dy9u-ian4)
- [Elektrische voertuigen](https://opendata.rdw.nl/Voertuigen/Elektrische-voertuigen/w4rt-e856)

## :arrow_down: Install

### 1. Install npm :computer:

Before getting started, you need to install nvm. nvm can be installed by typing the following line of code in terminal and pressing enter:

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh `

If nvm has been successfully installed, you can check the version by typing the following line of code in the terminal and pressing enter:

`nvm --version`

### 2. :open_file_folder: Clone folder

Then you need to download this project and open it with your code editor. To do this, open your terminal with the correct path in which you want this repository. **Example**:

`cd/Desktop/Repos`

Then type the following line of code into your terminal:

`git clone https://github.com/veerleprins/frontend-applications.git`

With this line of code, you've successfully downloaded the repository to your desired location.

### 3. Install all the packages :bookmark_tabs:

Then type the code below into your terminal:

`npm install`

With this line of code, you download all the packages you need for this repo.

### 4. :white_check_mark: Start and run the code

Go to the repository in the terminal and add the following line of code below:

` npm start`

Now React opens http://localhost:300/ automatically in your browser to view the visualization! :raised_hands:

## :globe_with_meridians: Deploy

My visualizations can be found at the link below:  
https://frontend-applications-veerleprins.netlify.app/

## :books: Sources

<!-- https://www.youtube.com/watch?v=Uo_1zgaB2qM -->

- Unkown, E. & StackOverflow. (2018, 6 december). How do I center an SVG in a div? Stack Overflow. https://stackoverflow.com/questions/8639383/how-do-i-center-an-svg-in-a-div
<!-- For centering SVG like the piechart -->
- Cho, K. & Medium. (2019, 31 januari). How to create a pie chart with D3.js and React Hooks (Part 1). Medium. https://medium.com/stationfive/how-to-create-a-pie-chart-with-d3-js-and-react-hooks-part-1-81bcd7f39b32
<!-- For fixing the error 'Warning: Invalid value for prop `d` on <path> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM.'  -->
- Holtz, Y. & D3.js Graph Gallery. (2018). Basic pie chart in d3.js. D3.js Graph Gallery. https://www.d3-graph-gallery.com/graph/pie_basic.html
<!-- For first time creating pie chart with D3.js -->
- Bobi, M., StackOverflow, & Crowder, T. J. (2011, 20 april). How to format numbers? Stack Overflow. https://stackoverflow.com/questions/5731193/how-to-format-numbers
<!-- For fixing the readability of the large million number of the number of cars. -->
- W3Schools.com. (z.d.). Colors Gradient. Geraadpleegd op 21 december 2020, van https://www.w3schools.com/colors/colors_gradient.asp
<!-- For creating a linear gradient background. -->
- Unkown, A. & StackOverflow. (2016, 12 oktober). How do I reference a local image in React? Stack Overflow. https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
<!-- For adding the car PNG file with import within React. -->
- Code Drip by Aaron Jack. (2019, December 18). Learn REACT JS in just 5 MINUTES (2020) [Video]. YouTube. https://www.youtube.com/watch?v=MRIMT0xPXFI&ab_channel=CodeDripbyAaronJack
- Frost, B. (2020, August 31). Atomic Design. Brad Frost. https://bradfrost.com/blog/post/atomic-web-design/
- Shakil. (2019, August 9). Manifest: Line: 1, column: 1, Syntax error on Chrome browser [Comment on the article “Manifest: Line: 1, column: 1, Syntax error on Chrome browser”]. Stack Overflow. https://stackoverflow.com/questions/57423244/manifest-line-1-column-1-syntax-error-on-chrome-browser
- Gowtham, S. (2019, December 20). How to Fetch Data using React hooks. Reactgo. https://reactgo.com/fetch-data-react-hooks/
- Stenius, M. (2019, June 19). How to get started with D3 and React. FreeCodeCamp.Org. https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/
- Cho, K. (2019, 31 januari). How to create a pie chart with D3.js and React Hooks (Part 1). Medium. https://medium.com/stationfive/how-to-create-a-pie-chart-with-d3-js-and-react-hooks-part-1-81bcd7f39b32
- Colt Steele. (2020, May 7). Beginner’s Guide to React w/ Hooks (2020) Free Course [Video]. YouTube. https://www.youtube.com/watch?v=9U3IhLAnSxM&ab_channel=ColtSteele
- Gowtham, S. (2019, December 20). How to Fetch Data using React hooks. Reactgo. https://reactgo.com/fetch-data-react-hooks/
- Traversy Media. (2019, November 22). React Suspense Introduction (Data Fetching) [Video]. YouTube. https://www.youtube.com/watch?v=NTDJ-NQ32_E&ab_channel=TraversyMedia
- Shakil. (2019, August 9). Manifest: Line: 1, column: 1, Syntax error on Chrome browser [Manifest error]. Stack Overflow. https://stackoverflow.com/questions/57423244/manifest-line-1-column-1-syntax-error-on-chrome-browser
- Code Drip by Aaron Jack. (2019, December 18). Learn REACT JS in just 5 MINUTES (2020) [Video]. YouTube. https://www.youtube.com/watch?v=MRIMT0xPXFI&ab_channel=CodeDripbyAaronJack
- Ben Awad. (2018, October 28). Fetching Data from an API with React Hooks useEffect [Video]. YouTube. https://www.youtube.com/watch?v=k0WnY0Hqe5c&ab_channel=BenAwad
- Pop, A. (2020, November 13). Correctly handling async/await in React components. DEV Community. https://dev.to/alexandrudanpop/correctly-handling-async-await-in-react-components-4h74
- FrontendTips. (2020, August 12). Pie chart using d3 library #d3js [Video]. YouTube. https://www.youtube.com/watch?v=lnXf1mpFGb8&ab_channel=FrontendTips
- GeeksforGeeks. (2020, August 31). D3.js arc.centroid() Function. https://www.geeksforgeeks.org/d3-js-arc-centroid-function/
- Holtz, Y. (n.d.). Pie chart with annotation in d3.js. D3.Js Graph Gallery. Retrieved 23 December 2020, from https://www.d3-graph-gallery.com/graph/pie_annotation.html
- CurranKelleher. (2020, September 22). Datavis 2020 Episode 31 - Scatter Plot with Menus [Video]. YouTube. https://www.youtube.com/watch?v=j4VI47GlmGA&t=784s&ab_channel=CurranKelleher
- TutorialsTeacher. (n.d.). Piecharts with D3. Retrieved 23 December 2020, from https://www.tutorialsteacher.com/d3js/create-pie-chart-using-d3js
- Dib, F. (n.d.). Online regex tester and debugger: PHP, PCRE, Python, Golang and JavaScript. Regular Expressions 101. Retrieved 30 November 2020, from https://regex101.com/
- Awad, B. (2018, October 18). benawad/react-hooks-examples. GitHub. https://github.com/benawad/react-hooks-examples/blob/2_api_useEffect/src/App.js
- Kantor, I. (n.d.). Conditional branching: if, ‘?’ Javascript.Info. Retrieved 30 November 2020, from https://javascript.info/ifelse
- Isiaka, A. (2020, November 19). A Thoughtful Way To Use React’s useRef() Hook. Smashing Magazine. https://www.smashingmagazine.com/2020/11/react-useref-hook/

## :lock: License

This repo is licensed as [MIT](https://github.com/veerleprins/frontend-applications/blob/main/LICENSE) by :copyright: [Veerle Prins](https://github.com/veerleprins), 2020
