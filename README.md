# Nest.js + Next.js + Firebase

An example or boilerplate for combining 3 technologies together Next.js, Nest.js and Firebase functions and hosting.

### Packages

- [Nest.js](https://github.com/nestjs/nest) (server-side)
- [Next.js](https://github.com/zeit/next.js) (server-side render for react)
- [React.js](https://github.com/facebook/react) (do i have to tell you about it? :P)
- [nest-next](https://github.com/kyle-mccarthy/nest-next) (An easy bridge between Nest.js and Next.js)
- [Firebase functions](https://firebase.google.com/docs/functions) (Nest.js and Next.js runs on the Firebase Cloud functions)
- [Firebase Hosting](https://firebase.google.com/docs/hosting) (Next.js static bundle will be delivered from Firebase CDN, learn more about it [here](https://youtu.be/ZYUWsjUxxUQ?t=620))

### Usage

- For Local development, go to app folder run `npm i` or `yarn` and `npm run dev` will launch development server.
- Hot module replacement for Next.js and incremental build for Nest.js.
- For Production, run `npm run build`, this will create `.next`, `dist` and will copy static bundle to `public` folder for instant deploy.
- You can check and test this production build in local by running `npm run firebase:local` to emulate how you app will run in Firebase functions and hosting.
- Finally, to deploy it to Firebase functions and hosting run `npm run firebase:deploy`.

> Before deploy or firebase serve, change the project ID in .firebaserc file to your firebase project ID or else the build will get failed.

> This app is fork of [nest-next package example](https://github.com/kyle-mccarthy/nest-next/tree/master/example) and modified it to work with firebase functions and hosting.
