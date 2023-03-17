BrewDog Carbon Calculator Web Application 

[TOC]

## Installation

To install this application, please do the following steps in order:

- Install 'Git' from https://git-scm.com/downloads, making sure to download the correct version for your Operating System.
- Install 'Python' from https://www.python.org/downloads/release/python-3110/, making sure to download the correct version for your Operating System.
- Install 'Node JS' from https://nodejs.org/en/download/, making sure to download the correct version for your Operating System.
- Open Command Prompt, and navigate to the folder you want to clone the files to, using the command `cd`. E.g. if installation is in C:\Users\*User*\brewdog_project then copy the path and write `cd brewdog_project`
- Next, clone the repo using `git clone https://github.com/NHutch2002/BrewdogProject`.
- Open the project files on Command Prompt using `cd sh15-main`.
- Install the requirements for the Python based Django backend using `pip install -r requirements.txt`.
- Open the frontend folder using `cd brewdog_project/frontend`.
- Install the requirements for the Node based React frontend using `npm install` (This may take a few minutes).

## Local Deployment

To deploy the application locally, please do the following steps in order:

- Open two Command Prompt windows
- On the first window, navigate to the frontend folder using `cd *folder_name*/sh15-main/brewdog_project/frontend`, where *folder_name* is the name of the folder of installation defined in Installation step 4
- Then, run `npm run build` in order to build the frontend of the project automatically (This may take a few minutes).
- On the second window, navigate to the backend folder using `cd *folder_name*/sh15-main/brewdog_project`, where *folder_name* is the name of the folder of installation defined in Installation step 4
- To build the database, run `python manage.py makemigrations brewdog_api`
- Then `python manage.py migrate brewdog_api`
- Then `python manage.py makemigrations`
- And finally `python manage.py migrate`
- Now to run the project, in the same Command Prompt window run `python manage.py runserver`
- On your web browser, enter the address '127.0.0.1:8000' and the website should be up and running locally.

## Calculator Constant Entry on Local Deployment

To add the multiplying factors for the calculator to work, please do the following steps in order:

- On your web browser, navigate to '127.0.0.1:8000/brewdog/calculatorconstants', it should open a page titled 'Django REST Framework'
- Scroll down and enter the respective multiplying factors in each of the boxes
- Finally hit POST, and you should see you numbers reflected in the database at the top of the page
- Navigate back to '127.0.0.1:8000' and once an account has been made, you can enter the calculator and save your results

## Testing

To test the web application, the testing can be ran automatically using the testing suites provided

### Testing Backend

To test the backend of the web application, run these steps in order:

- Open a Command Prompt window.
- Run `cd *folder_name*/sh15-main/brewdog_project` where folder_name is the name of the directory in which the project is located.
- Then finally run `python manage.py test` to test the Django backend of the project.

### Testing Frontend

To test the frontend of the web application, run these steps in order:

- Open a Command Prompt window.
- Run `cd *folder_name*/sh15-main/brewdog_project/frontend` where folder_name is the name of the directory in which the project is located.
- Run `npm run test` to launch the Jest testing suite for the React frontend of the project.

## Linting

To lint the web application, the linting can be ran automatically with the linting setup

### Linting Backend

To lint the backend of the web application, run these steps in order:
- Open a Command Prompt window.
- Run `cd *folder_name*/sh15-main/brewdog_project` where folder_name is the name of the directory in which the project is located.
- Run `pylint brewdog_api` for linting of the brewdog_api folder.
- Run `pylint brewdog_project` for linting of the brewdog_project folder.


### Linting Frontend

To lint the frontend of the web application, run these steps in order:

- Open a Command Prompt window.
- Run `cd *folder_name*/sh15-main/brewdog_project/frontend` where folder_name is the name of the directory in which the project is located.
- Run `npx eslint "src/components/**.js" --fix`
