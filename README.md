# material-ui course with react

https://www.udemy.com/course/implement-high-fidelity-designs-with-material-ui-and-reactjs/

## How to use

Download the example [or clone the repo](https://github.com/mui-org/material-ui):

```sh
curl https://codeload.github.com/mui-org/material-ui/tar.gz/master | tar -xz --strip=2  material-ui-master/examples/nextjs
cd nextjs
```

Install it and run:

```sh
npm install
npm run dev
```

## Fix issue
- replace justify= by justifyContent=  (Grid component props renaming)
- rename import { createMuiTheme } from "@material-ui/core/styles"; into import { createTheme } from "@material-ui/core/styles";

## Animation
- See https://www.udemy.com/course/implement-high-fidelity-designs-with-material-ui-and-reactjs/learn/lecture/16040860#overview
- use  "Adobe After Effects" with plugin "bodymovin" https://aescripts.com/bodymovin/ to design and generate Animation (using SVG is best for Responsive design) and export it in json format
  Donate (can be free..) to create a account and loggin
  Download bodymovin plugin from download page
  Download zxp installer https://aescripts.com/learn/zxp-installer/ and install the plugin ...
  ---> Use Adobe > "After Effect" to export Animation into json format : the extension "bodymovin" should be available from the 2 previous step
 see https://aescripts.com/after-effects/
 see https://www.adobe.com/uk/products/aftereffects.html
- use react-lottie package to import and use it
- use "ruler" chrome extenstion to measure a selected html web page elements dimension (height, width)

## Upgrade to mui V5
https://mui.com/guides/migration-v4/#update-mui-version

yarn upgrade --latest react react-dom react-lottie react-router-dom react-scripts axios lodash
--> upgrade Oct2021: yarn upgrade axios, react, react-dom, react-scripts

yarn add @mui/material @mui/styles @mui/icons-material
--> add mui v5 components 
    @material-ui/core -> @mui/material
    @material-ui/styles -> @mui/styles
    @material-ui/icons -> @mui/icons-material

yarn add @emotion/react @emotion/styled
--> add the new peer dependencies - emotion packages

yarn remove @material-ui/core @material-ui/styles @material-ui/icons
--> remove mui V4 component

npx @mui/codemod v5.0.0/preset-safe
--> update using most common transformer

Check following imports after using codemod 
- import { useTheme } from "@mui/material/styles"; 
- import { makeStyles } from '@mui/styles';
- import { ThemeProvider } from '@mui/material/styles';
- import { StyledEngineProvider } from '@mui/material/styles';

Check that main app is wrapped with StyledEngineProvider injectFirst
- <StyledEngineProvider injectFirst>

Check breakpoints
The default breakpoints were changed to better match the common use cases. They also better match the Material Design guidelines. Read more about the change
  {
    xs: 0,
    sm: 600,
  - md: 960,
  + md: 900,
  - lg: 1280,
  + lg: 1200,
  - xl: 1920,
  + xl: 1536,
  }

## Theming
- see material-ui doc on how use default theme and override it
- component/ui/Theme.js contains custom theme (like learn button and estimatebutton) and extends default theme as well (like primary secondary colors) and this extended theme is used in different components of our app
- apps links theme.js to the entire application using a provider hook
- for example in LandingPage.js, '...theme.x.x' is used to spread values from default theme or from Theme.js where we added common styles for estimate or learn into the components

## Mail Serverless function

- In Contact.jsx page, use Nodemailer.js with firebase cloud function that provide URL to trigger serverless function. Simple node application that impements nodemailer.js
  See video "Using Nodemailer" + "Sending the form values"

## Lodash to avoid mutating arrays used for state

- In Estimate.jsx page, use lodash library> cloneDeep function to clone an array object that is defined as component state
  See video "Question Navigation"
