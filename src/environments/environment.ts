// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  production: false,

  SubscriptionKey: 'octo-gen-fms-dev',
  TenantKey: '007f673f-0cd3-43b4-99d3-3dafefa9f75f',
  UserId: 'test',
  firebase:{
    apiKey: "***************************************",
    authDomain: "************************",
    projectId: "***********************************",
    storageBucket: "************************",
    messagingSenderId: "*********************",
    appId: "*******************************************",
    measurementId: "*********************"
  },
  httpInterceptor: {
    allowedList: [
      {
        uri: 'https://localhost:44447/*',
        tokenOptions: {
          audience: 'https://localhost:44447'
        }
      }
    ],
  },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
