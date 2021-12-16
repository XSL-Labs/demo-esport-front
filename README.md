# demo-esport-front

## Screenshots

![alt text](https://i.ibb.co/L8HXr6v/Diapositive1.png)
![alt text](https://i.ibb.co/YZ59jxh/Diapositive2.png)
![alt text](https://i.ibb.co/CsG9Hh6/Diapositive3.png)
![alt text](https://i.ibb.co/VVv1ck4/Diapositive4.png)

## Usage

**Pull project in a dedicated folder**

Example :

```shell
git init
git remote add origin https://github.com/XSL-Labs/demo-esport-front.git
git pull origin main
```

<br/><br/>
**Install npm modules**

```shell
npm install
```

<br/><br/>
**Create _.env.production_ file in the root of project folder**
File should contain environment variables like below :

```shell
VUE_APP_BACKEND_URL=<YOUR_BACKEND_ENDPOINT>
```

> VUE_APP_BACKEND_URL : Back-end API endpoint for reaching back-end functionalities.
> *Example : https://api.gaming.xsl-labs.io/api/v1*

In development mode, use a file named _.env_ (instead of _.env.production_).

<br/><br/>
**Build Vue application**

```shell
npm run build
```

This creates a published directory named _dist_.
In development mode, use _npm run serve_ to directly run your Vue application on localhost (next step is not required in this case).

<br/><br/>
**Redirect your server toward published directory**

Published directory is under _dist_ folder, which contains HTML, CSS and Javascript elements.
