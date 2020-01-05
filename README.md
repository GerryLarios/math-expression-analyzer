# Math Expressions Analizer

A basic calculator that analize a simple math expression and records the result.

## React JS

The calculator has been created with React JS to handle the events as the result and storage.

## Deploy

GitHub provides us a free hosting to host our static web apps.
Inside of the `package.json` was added the property `homepage`

```javascript
"homepage":"https://yourusername.github.io/repository-name"
```

Need to install `gh-pages` from npm

`npm install --save gh-pages`

Add the following commans in the `package.json` file

```javascript
"scripts":{
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build",
}
```
And run `npm run deploy`

Once you successfully deployed open your GitHub code repository and click on settings tab if you scroll down you can see a GitHub Pages then choose a branch to gh-pages.