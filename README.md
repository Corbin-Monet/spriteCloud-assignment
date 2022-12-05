# The spriteCloud-assignment

## Whats the objective of the project

This is a Cypress Automation project covering both Web-App and API features, this is a framework for e2e testing. The framework is using "mocha-awesome" to generate RICH html reporting, to ensure viewers of the results can easily understand and make their calculated decisions!

![image](https://user-images.githubusercontent.com/100212111/205438447-ec08b9a5-60b6-4557-be8c-030c5b074f93.png)


## General Info on this project

The project is setup mainly for "local" change to "Dev" push CI | CD. This will ensure high velocity and is, in my opinion, perfect for a "Start-Up" business, as the product is still finding itself and in this quest is changing rapidly. This approach ensures that the product can change rapidly BUT still ensure that there are no breaking changes introduced to Dev. This would not suite a more mature product / business, in my opinion, as there should be more structured CI | CD pipeline. I.E: Integration tests live in AWS / AZURE at the end of the building and deploying, UNIT tests living in the GIT build CI | CD and run locally before code hits Dev branch (As an example)

## How to run these tests

**Setup Local**

1. Clone this repo
2. Make sure you are "root"
3. On the command line and type ```yarn``` (ubuntu) or ```npm i```

**Git actions Pipeline**

1. Make your local changes to the prodject
2. Add , merge your tests - Local branch
3. Ensure your local endPoint / App is started / Running
4. Ensure that the Cypress BaseURL's are pointing to the local server
    - Change these settings in the cypress.config.ts file
    - Example for API:

![image](https://user-images.githubusercontent.com/100212111/205438853-8c151cce-f34d-4f97-9f45-edd3788108ee.png)

5. "git push" and the cypress tests will start and run

![image](https://user-images.githubusercontent.com/100212111/205438661-9a8a1f6f-49ee-474b-8836-e4b7a0f520c3.png)

**Run all the tests on your system**

1. Ensure you are root
2. run: ```npx cypress run```

![image](https://user-images.githubusercontent.com/100212111/205439034-7d2b70a2-0a1f-4ee8-8005-6475b8198ee5.png)

**Run an individual test on your system**

1. Ensure you are root
2. run: ```npx cypress run --spec "Path TO File"```
    - Example for this project: ```npx cypress run --spec "cypress/e2e/createUserswagAPI.spec.js"```

![image](https://user-images.githubusercontent.com/100212111/205439115-746b7fc3-540b-4da7-ad00-41b87f0e4883.png)


**Assignment Section**
1. link to results on Calliope.pro: https://app.calliope.pro/reports/160467
2. One improvement for Calliope.pro
    - As a returning user, hitting the home page for https://www.calliope.pro/ im faced with this page:

![image](https://user-images.githubusercontent.com/100212111/205439421-f869a42c-2bf3-4d1f-b3e6-1f9e52e19167.png)

      The above makes it incredibly hard to login, I find myself having to hit the "Sign up" button and then hit the "Back to log in" 
      
![image](https://user-images.githubusercontent.com/100212111/205439468-6cf1ef74-f2c0-4232-9fed-030420121835.png)

      To be able to log in again. I would add a "Login" button on the Top Nav bar, next to the "Sign up" button!

3. One new feature for Calliope.pro (I know this could be achieved with API BUT im talking more APP wizard setup, make it seamless)
    - An Integration with "GitHub", there are some cool things that could be done. For instance, I could send the "mocha-test" results directly to Calliope.pro and           then send those results to a "slack integration". This is very apealing to me, I generally am in favor of kicking off a build and not having to watch it the      entire time and or do manual things to get my results! Kick off the CI | CD and then go for a coffee - This is what I aim for 😜

4. I used my experience to select the scenarios I wanted to cover in my automation first.
    - I want to be able to use re-usable code. So I immediately looked for any page that had a "Sign Up' or "Log in" feature, this hits my criteria of being "re-   usable", 
    - This will give me an return on my Investment (ROI) a lot sooner than lets say a feature where a user "Updates an email" as this should happen maybe once or twice in a year (If that) so the risk is less. 
    - My main objective is to get a regression suite established as soon as possible, to allow me to focus on the more intricate parts of the application / profuct / feature.
    - I assess the application first "What am I dealing with" then make assumptions (Experience) on the risk factors. If a user cant login and or signup, this normally equates to monetary losses. I normally use "AC" acceptance criteria for testing scenarios, these are normally givent to me by a product team or a Business analyst etc.

5. Why are the scenarios the most important:
    - They hold the most risk.
    - They will give me a higher as well as faster ROI.
    - They establish the foundations to the framework, im able to re-use the code.
    - They form part of a regression suite, which should be re-runable and run frequently. This helps with "breaking changes" detection.

6. Next steps to the project:
    - Increase coverage! The application for this example is very basic, but the assumption if I were inbedded in a dev team thats working on the product, is to increate the coverage of testing. Get as much into the regression suite as possible.
    - Ensure there is no flaky tests. If the regression suite is too be trusted, tests need to be dynamic and be able to run on isolation.
    - The CI | CD pipeline is very basic. Would want to increase performance and Integrations to other products I.E: Azure or AWS.
    - Would implement "Percy" UI testing for free basically!
    - There are many many things that can be done!
    - I would seperate the UI tests from the API tests, would use Postman / Newman for API testing as its my preference!
