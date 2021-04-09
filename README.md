
1. `cd` to the directory on your machine where the code resides
2. Install dependencies: `npm install`
3. Start the application: `npm start`
4. Log in at https://open.epic.com/Launchpad/OAuth2Sso and update the settings: 
  - Launch URL: http://localhost:3000/launch
  - Redirect URL: http://localhost:3000/oauth-callback
5. Click Launch App to launch

  Or
  
4. Login to https://code.cerner.com/developer/smart-on-fhir/apps and create sandbox app and update settings.
  - Launch URL: http://localhost:3000/launch  
  - Redirect URL: http://localhost:3000/oauth-callback
5. Click on Begin testing
6. If all works correctly you should see data pulled from Epic's or Cerner's example DB for the patient context you selected
