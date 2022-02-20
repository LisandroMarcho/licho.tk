
# licho.tk - url shortener

A URL shortener powered by Netlify's redirects and written in TypeScript


[![Netlify Status](https://api.netlify.com/api/v1/badges/fc8ba18b-a982-44a0-89d9-4b37791eea67/deploy-status)](https://app.netlify.com/sites/wizardly-dubinsky-7ed104/deploys)
## Deployment

First, you will need to clone or fork this repository. After that, you can create a Netlify site and use that repository as source.


## Installation

For development, first clone the repository. Then run:
```bash
  yarn install
  # or
  yarn
  # or
  npm install
```
    
To create new urls, create a JSON file inside of `/src/links` with the following content:
```json
{
	"from":"short-url",
	"to": "https://very-long-url-messed-up.com",
    "status": 301 // this parameter is optional
}
```

When pushing changes to the repository, Netlify automatically will build the site and your short url will be live.