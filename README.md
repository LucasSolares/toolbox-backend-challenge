# Toolbox Challenge

##### SSR DEVELOPER (NODE / REACT)

---

This project is an API to format some CSV files to JSON.

**Endpoints**
This project contains one base endpoint.
`/files`
**This endpoint contain two sub-endpoints**

---

`/files/data`
This endpoint will retrive the data from of the files that are listed in the external endpoint in the next format.

```
[
    {
        "file": "file.csv",
        "lines": [
            {
                "text": "lorem",
                "number": "1234",
                "hex": "123abc"
            }
            ...
        ]
    }
...
]
```

**This endpoint contain one query param**
`/files/data?fileName=xyz`
The functionality for this param will be basically a search, when the user sends something like `foo.csv` it will find every file that has this name, so this means for example if we have `foo1.csv`, `foo2.csv` and we send to the query param the value `foo` it will bring both documents.

---

`files/list`
This endpoint functionality is really simple, it will fetch the file names that are currently in the external api.

```
[
    "fileName.csv",
    ...
]
```

---

### How to run the program

First be sure to have NodeJS 14 you can use `nvm` for this since we have `.nvmrc` file.

**Optional** (If you have nvm)

```
nvm use
```

---

Install libraries with npm, we have express some libraries for testing and handle files.

```
npm install
```

Run the project.

```
npm run start
```

---

### Optional (If you want to run tests)

This code have some unit testings implemented if you want to run them please run the command.

```
npm run test
```

**_IMPORTANT NOTE_**
The project will be running locally in the `localhost` so to access any endpoint you will be able using the url `http://localhost:4000/`
