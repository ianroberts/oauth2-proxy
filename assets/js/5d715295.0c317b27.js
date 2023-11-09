"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[672],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2198:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"login_gov",title:"Login.gov"},s=void 0,p={unversionedId:"configuration/providers/login_gov",id:"configuration/providers/login_gov",title:"Login.gov",description:"login.gov is an OIDC provider for the US Government.",source:"@site/docs/configuration/providers/login_gov.md",sourceDirName:"configuration/providers",slug:"/configuration/providers/login_gov",permalink:"/oauth2-proxy/docs/next/configuration/providers/login_gov",draft:!1,editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/docs/configuration/providers/login_gov.md",tags:[],version:"current",frontMatter:{id:"login_gov",title:"Login.gov"},sidebar:"docs",previous:{title:"OpenID Connect",permalink:"/oauth2-proxy/docs/next/configuration/providers/openid_connect"},next:{title:"NextCloud",permalink:"/oauth2-proxy/docs/next/configuration/providers/nextcloud"}},c={},u=[{value:"Skip OIDC discovery",id:"skip-oidc-discovery",level:4}],d={toc:u},h="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)(h,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"login.gov is an OIDC provider for the US Government.\nIf you are a US Government agency, you can contact the login.gov team through the contact information\nthat you can find on ",(0,i.kt)("a",{parentName:"p",href:"https://login.gov/developers/"},"https://login.gov/developers/")," and work with them to understand how to get login.gov\naccounts for integration/test and production access."),(0,i.kt)("p",null,"A developer guide is available here: ",(0,i.kt)("a",{parentName:"p",href:"https://developers.login.gov/"},"https://developers.login.gov/"),", though this proxy handles everything\nbut the data you need to create to register your application in the login.gov dashboard."),(0,i.kt)("p",null,"As a demo, we will assume that you are running your application that you want to secure locally on\nhttp://localhost:3000/, that you will be starting your proxy up on http://localhost:4180/, and that\nyou have an agency integration account for testing."),(0,i.kt)("p",null,"First, register your application in the dashboard.  The important bits are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identity protocol:  make this ",(0,i.kt)("inlineCode",{parentName:"li"},"Openid connect")),(0,i.kt)("li",{parentName:"ul"},"Issuer:  do what they say for OpenID Connect.  We will refer to this string as ",(0,i.kt)("inlineCode",{parentName:"li"},"${LOGINGOV_ISSUER}"),"."),(0,i.kt)("li",{parentName:"ul"},"Public key:  This is a self-signed certificate in .pem format generated from a 2048-bit RSA private key.\nA quick way to do this is\n",(0,i.kt)("inlineCode",{parentName:"li"},"openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 3650 -nodes -subj '/C=US/ST=Washington/L=DC/O=GSA/OU=18F/CN=localhost'"),".\nThe contents of the ",(0,i.kt)("inlineCode",{parentName:"li"},"key.pem")," shall be referred to as ",(0,i.kt)("inlineCode",{parentName:"li"},"${OAUTH2_PROXY_JWT_KEY}"),"."),(0,i.kt)("li",{parentName:"ul"},"Return to App URL:  Make this be ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:4180/")),(0,i.kt)("li",{parentName:"ul"},"Redirect URIs:  Make this be ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:4180/oauth2/callback"),"."),(0,i.kt)("li",{parentName:"ul"},"Attribute Bundle:  Make sure that email is selected.")),(0,i.kt)("p",null,"Now start the proxy up with the following options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./oauth2-proxy -provider login.gov \\\n  -client-id=${LOGINGOV_ISSUER} \\\n  -redirect-url=http://localhost:4180/oauth2/callback \\\n  -oidc-issuer-url=https://idp.int.identitysandbox.gov/ \\\n  -cookie-secure=false \\\n  -email-domain=gsa.gov \\\n  -upstream=http://localhost:3000/ \\\n  -cookie-secret=somerandomstring12341234567890AB \\\n  -cookie-domain=localhost \\\n  -skip-provider-button=true \\\n  -pubjwk-url=https://idp.int.identitysandbox.gov/api/openid_connect/certs \\\n  -profile-url=https://idp.int.identitysandbox.gov/api/openid_connect/userinfo \\\n  -jwt-key="${OAUTH2_PROXY_JWT_KEY}"\n')),(0,i.kt)("p",null,"You can also set all these options with environment variables, for use in cloud/docker environments.\nOne tricky thing that you may encounter is that some cloud environments will pass in environment\nvariables in a docker env-file, which does not allow multiline variables like a PEM file.\nIf you encounter this, then you can create a ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt_signing_key.pem")," file in the top level\ndirectory of the repo which contains the key in PEM format and then do your docker build.\nThe docker build process will copy that file into your image which you can then access by\nsetting the ",(0,i.kt)("inlineCode",{parentName:"p"},"OAUTH2_PROXY_JWT_KEY_FILE=/etc/ssl/private/jwt_signing_key.pem"),"\nenvironment variable, or by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"--jwt-key-file=/etc/ssl/private/jwt_signing_key.pem")," on the commandline."),(0,i.kt)("p",null,"Once it is running, you should be able to go to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4180/")," in your browser,\nget authenticated by the login.gov integration server, and then get proxied on to your\napplication running on ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),".  In a real deployment, you would secure\nyour application with a firewall or something so that it was only accessible from the\nproxy, and you would use real hostnames everywhere."),(0,i.kt)("h4",{id:"skip-oidc-discovery"},"Skip OIDC discovery"),(0,i.kt)("p",null,"Some providers do not support OIDC discovery via their issuer URL, so oauth2-proxy cannot simply grab the authorization,\ntoken and jwks URI endpoints from the provider's metadata."),(0,i.kt)("p",null,"In this case, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"--skip-oidc-discovery")," option, and supply those required endpoints manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    -provider oidc\n    -client-id oauth2-proxy\n    -client-secret proxy\n    -redirect-url http://127.0.0.1:4180/oauth2/callback\n    -oidc-issuer-url http://127.0.0.1:5556\n    -skip-oidc-discovery\n    -login-url http://127.0.0.1:5556/authorize\n    -redeem-url http://127.0.0.1:5556/token\n    -oidc-jwks-url http://127.0.0.1:5556/keys\n    -cookie-secure=false\n    -email-domain example.com\n")))}g.isMDXComponent=!0}}]);