Personal website for learning micro-frontends


Project initialised using the module federation npx creation tool


Start each react project seperately with npm start,
The nest server can be started using `npm run start:dev`


deploy to use
single-spa
bit.dev

npx create-mf-app
> called 'micro-site' this will be the host on 8080.

npx create-mf-app
> called 'remote' will be the example remote on 3000.

Resources:
https://module-federation.myshopify.com/products/practical-module-federation
https://www.youtube.com/watch?v=s_Fs4AXsTnA

## Uploaded backend as zip to aws lambda and attached a api gateway (adding / as an integration)
https://jsud7r2xnk.execute-api.ap-southeast-2.amazonaws.com/
https://jsud7r2xnk.execute-api.ap-southeast-2.amazonaws.com/

d-18ib1vdmw4.execute-api.ap-southeast-2.amazonaws.com
TODO rename
micro-site to product-display-page
and
remote to home 

Home page is the remote.
pdp page is the host, it is hosting the 'header' that is remote to it.

TODO
Need to move the app-layout to remote(home).