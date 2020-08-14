## Steps:

* Create our first Hello World react component using class and then try to pass props from root component.
* Create Card component using function to add Image,Header,Paragraph.
* Add css to the Card divison using [tachyons](https://tachyons.io/docs/) library like background,padding,margin,grow,shdow,text center,inline display block (dib),border radius (br3).
* Add image url to randomly generate image using [RoboHash](https://robohash.org/).
* Add dummy robots.js data and then create 4 Card and pass data using props to each Card compoenent.
* Add CardList component and create a array of Card Component and then wrap it as CardList component so we can have all robots dynamically.
* Add heading form Robofriends.
* Add new SearchBox component with css Border(ba),padding(pa{x}),background color (bg-{shade}-{color}),border (b--{style}).
* Add new App component containing all heading,SearchBox,CardList components.
* Create a state at the root level by createing the state object in the constructor of App.
* Create onSearchChange method pass its reference to SearchBox component and assign that reference to onChange of search input.
* Use setState from State Management to change state searchfield to search field target value which triggers the render of the component and then in render we can filter the robots based on this.state.searchfield value before passing it to CardList component.
* Add new SEGA FONT LOGO for our heading in App.css from [cufonfonts](http://www.cufonfonts.com) and add to heading css.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



