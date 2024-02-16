# React Random User

[:point_right: Click here to see on browser](https://random-user-with-react-v1.netlify.app/)

![random user_with react](https://github.com/kaplanh/ReactRandomUser/assets/101884444/3ecc4597-20e1-4bbb-b326-7b50bdeec34f)

---

| **What's used in this app ?**                                                           | **How use third party libraries**          | **Author**                                                                       |
| -------------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------- |
| [useEffect() Hook](https://react.dev/reference/react/useEffect) |                 | [Take a look at my portfolio](https://kaplanh.github.io/Portfolio_with_CssFlex/) |
| [useState() Hook](https://react.dev/learn#using-hooks)                                  |                                 | [Visit me on Linkedin](https://www.linkedin.com/in/kaplan-h/)                    |
| [Optional chaining ?.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)                           |                                            |                    |
| [ECMAScript Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)                           |                                            |                    |
| [react-events](https://react.dev/learn#responding-to-events)                           |                                            |                    |
| [React-Conditional rendering &&,||,?:](https://react.dev/learn#conditional-rendering)            |                                            |     |                                      
| [React-Bootstrap](https://react-bootstrap.netlify.app/)                                 | npm i / yarn add react-bootstrap bootstrap |                                                                        |
| [Semantic-Commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) |                                            |                                                                        |
| [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) |                                            |                                                                        |
| Deploy with [Netlify](https://app.netlify.com/teams/kaplanh/sites)                                      |                                            |                                                       |
|API [randomuser.me](https://randomuser.me/api/)                                      |                                            |                                                       |

---

## How To Run This Project 🚀

<br/>

### 💻 Install React 👇

```bash
yarn create react-app .  or npx create-react-app .
```

### 💻 Install Sass 👇

```bash
yarn add sass  or npm i sass
```

## 🔴 Delete these files and delete the imports👇

    - App.test.js
    - reportWebVitals.js
    - setupTests.js
    - favicon.ico
    - logo192.png
    - logo512.png
    - manifest.json
    - robots.txt

### 💻 Start the project 👇

```bash
yarn start or npm start
```

OR

-   <strong>Clone the Repo</strong>

    ```sh
    git clone
    ```

-   <strong>Install NPM packages</strong>

    ```sh
    npm install or yarn
    ```

-   <strong>Run the project</strong>

    ```sh
    npm start or yarn start
    ```

-   <strong>Open the project on your browser</strong>

    ```sh
    http://localhost:3000/
    ```

-   ### <strong>Enjoy! 🎉</strong>

---

## Project Skeleton

```
 Appointment App (folder)
|
|----public (folder)
│     └── index.html
|----src (folder)
|    |--- components (folder)
│    │       ├── User.jsx
│    │
|    |--- assets (folder)
│    │       ├── email.svg
│    │       ├── location.svg
│    │       ├── phone.svg
│    │
│    ├--- App.js
│    |--- index.js
│
│
|-- .gitignore
|── package-lock.json
├── package.json
|── README.md
|── yarn.lock


```

---

### At the end of the project, the following topics are to be covered;

- useEffect() hook

 ```jsx
        // src/components/User.jsx

           const [loading, isLoading] = useState(true);
           const [userData, setUserData] = useState("");


    
             const getUser = () => {
            fetch("https://randomuser.me/api/")
                .then((res) => res.json())
                .then((data) => setUserData(data.results[0]))
                .catch((err) => console.log(err));
            isLoading(false);
        };
    
         useEffect(() => {
            getUser();
        }, []);

     <button onClick={getUser} className="btn btn-success">
                    New User
                </button>

```

- conditional rendering + cconditional Css

     ```jsx
      if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <h1 className="text-danger">
                    Loading...
                </h1>
            </div>
        );
    }

   return (
        <div>
      <div/>
      )
  ```

- Optional Chaining?.

```jsx
         {userData?.location?.city}- {userData?.location?.country}
```

- ECMAScript Internationalization API 
    ```jsx
       {new Date(userData?.dob?.date).toLocaleDateString("de-DE")}
    ```

- Semantic Commit Messages
    See how a minor change to your commit message style can make you a better programmer.

    Format: <type>(<scope>): <subject>

    <scope> is optional

    -   Example

 ```
                feat: add hat wobble
        ^--^  ^------------^
        |     |
        |     +-> Summary in present tense.
        |
        +-------> Type: chore, docs, feat, fix, refactor, style, or test.
    

 - More Examples:
    -   `feat`: (new feature for the user, not a new feature for build script)
    -   `fix`: (bug fix for the user, not a fix to a build script)
    -   `docs`: (changes to the documentation)
    -   `style`: (formatting, missing semi colons, etc; no production code change)
    -   `refactor`: (refactoring production code, eg. renaming a variable)
    -   `test`: (adding missing tests, refactoring tests; no production code change)
    -   `chore`: (updating grunt tasks etc; no production code change)
```

---

## Feedback and Collaboration

I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out.
I'm always open to collaboration and welcome the opportunity to work on exciting projects together.
Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!

<p align="center"> ⌛<strong> Happy Coding </strong> ✍ </p>
