## Introduction to React JS

### Necessary things
1. Visual Studio Code
2. Install [Node.JS](https://nodejs.org/en/) (LTS/Stable) version.


### Node Installation For linux
1. Update your system
```bash
apt-get update
```
2. Download Curl
```bash
sudo apt install curl
```
3. Install Node with bash
```bash
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```
4. Your Node is successfully installed check your version now
```bash
node --version
```

## Create your First React Application

We are going to create a CRM.
1. LogIn
2. Customer Request Page
3. Home Page
4. Services
5. About

```bash
npx create-react-app crm
```

### Run your First Project
```bash
npm start
``` 

## Directory Structure

1. Node Modules
    a. All of the installed packages are available here
2. public
    a. Index.html 
        1. Main File
        2. All files we need to make public
3. src
    a. React Application
    b. We do all of the work in soruce [components/store]
4. package-lock.json
    a. Tree of all of the dependencies, e.g our 1 library is dependent on some other library
    in this file we have all of the tree structure.
5. package.json
    a. All of the libraries with versions we installed in our system.


## Why React? 
React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012.
 
React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.
 
React.js properties includes the following
1. React.js is declarative
2. React.js is simple
3. React.js is component based
4. React.js supports server side
5. React.js is extensive
6. React.js is fast 
7. React.js is easy to learn 
[Learn More here](https://www.c-sharpcorner.com/article/what-and-why-reactjs/)

## Flow of React Application

1. Main file = src/index.js
```
const root = ReactDOM.createRoot(document.getElementById('root'));
```

2. Index.js File to load application
We render all of the our component in this part of code.

```
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

src/App.js file to write our Application logic
```
function App() {
  return (
    <div className="App">
      
    </div>
  );
}
```