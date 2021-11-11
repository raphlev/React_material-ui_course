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

## Theming
- see material-ui doc on how use default theme and override it
- component/ui/Theme.js contains custom theme (like learn button and estimatebutton) and extends default theme as well (like primary secondary colors) and this extended theme is used in different components of our app
- apps links theme.js to the entire application using a provider hook
- for example in LandingPage.js, '...theme.x.x' is used to spread values from default theme or from Theme.js where we added common styles for estimate or learn into the components

## Back-end
- Google Cloud Firebase Functions
  . store node server app with nodemailer.js account to receive the emails from contact form
  . receive the estimates ..
  . 
