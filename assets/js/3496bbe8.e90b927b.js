"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Using a non-root user"},i=void 0,s={unversionedId:"part-3/section-3",id:"part-3/section-3",title:"Using a non-root user",description:"Let's get back to the yt-dlp application, that we for last time worked with it Part 2.",source:"@site/docs/part-3/section-3.md",sourceDirName:"part-3",slug:"/part-3/section-3",permalink:"/part-3/section-3",draft:!1,editUrl:"https://github.com/docker-hy/docker-hy.github.io/blob/master/docs/part-3/section-3.md",tags:[],version:"current",frontMatter:{title:"Using a non-root user"},sidebar:"materialSidebar",previous:{title:"Deployment pipelines",permalink:"/part-3/section-2"},next:{title:"Optimizing the image size",permalink:"/part-3/section-4"}},p={},l=[{value:"Exercise 3.5",id:"exercise-35",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's get back to the yt-dlp application, that we for last time worked with it ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8000/part-2/1-migrating-to-docker-compose#volumes-in-docker-compose"},"Part 2"),"."),(0,a.kt)("p",null,"The application could, in theory, escape the container due to a bug in Docker or Linux kernel. To mitigate this security issue we will add a non-root user to our container and run our process with that user. Another option would be to map the root user to a high, non-existing user id on the host with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/security/userns-remap/"},"https://docs.docker.com/engine/security/userns-remap/"),", and can be used in case you must use root within the container."),(0,a.kt)("p",null,"The Dockerfile that we did in ",(0,a.kt)("a",{parentName:"p",href:"/part-1/section-4"},"Part 1")," was this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM ubuntu:22.04\n\nWORKDIR /mydir\n\nRUN apt-get update && apt-get install -y curl python3\nRUN curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp\nRUN chmod a+x /usr/local/bin/yt-dlp\n\nENTRYPOINT ["/usr/local/bin/yt-dlp"]\n')),(0,a.kt)("p",null,"We will add an user called ",(0,a.kt)("em",{parentName:"p"},"appuser")," with the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"RUN useradd -m appuser\n")),(0,a.kt)("p",null,"After that we change the user with the directive ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#user"},"USER")," - so all commands after this line will be executed as our new user, including the ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM ubuntu:22.04\n\nWORKDIR /mydir\n\nRUN apt-get update && apt-get install -y curl python3\nRUN curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp\nRUN chmod a+x /usr/local/bin/yt-dlp\n\nRUN useradd -m appuser\nUSER appuser\n\nENTRYPOINT ["/usr/local/bin/yt-dlp"]\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WORKDIR")," is renamed to /usr/videos since it makes more sense as the videos will be downloaded there. When we run this image without bind mounting our local directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ docker  run yt-dlp https://www.youtube.com/watch?v=XsqlHHTGQrw\n\n... \n\n[info] XsqlHHTGQrw: Downloading 1 format(s): 22\n[download] Unable to open file: [Errno 13] Permission denied: 'Master\u2019s Programme in Computer Science \uff5c University of Helsinki [XsqlHHTGQrw].mp4.part'. Retrying (1/3)...\n[download] Unable to open file: [Errno 13] Permission denied: 'Master\u2019s Programme in Computer Science \uff5c University of Helsinki [XsqlHHTGQrw].mp4.part'. Retrying (2/3)...\n[download] Unable to open file: [Errno 13] Permission denied: 'Master\u2019s Programme in Computer Science \uff5c University of Helsinki [XsqlHHTGQrw].mp4.part'. Retrying (3/3)...\n\nERROR: unable to open for writing: [Errno 13] Permission denied: 'Master\u2019s Programme in Computer Science \uff5c University of Helsinki [XsqlHHTGQrw].mp4.part'\n")),(0,a.kt)("p",null,"We'll see that our ",(0,a.kt)("inlineCode",{parentName:"p"},"appuser")," user has no access to write to the container filesystem. This can be fixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"chown")," or not fix it at all, if the intented usage is to always have a ",(0,a.kt)("inlineCode",{parentName:"p"},"/mydir")," mounted from the host. By mounting the directory the application works as intended."),(0,a.kt)("p",null,"If we want to give the ",(0,a.kt)("inlineCode",{parentName:"p"},"appuser")," permission to write inside the container, the permission change must be done when we are still executing as root, that is, before the directive ",(0,a.kt)("inlineCode",{parentName:"p"},"USER")," is used to change the user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM ubuntu:22.04\n\n# ...\n\nWORKDIR /mydir\n\n# create the appuser\nRUN useradd -m appuser\n\n# change the owner of current dir to appuser\nRUN chown appuser .\n\n# now we can change the user\nUSER appuser\n\nENTRYPOINT ["/usr/local/bin/yt-dlp"]\n')),(0,a.kt)("h2",{id:"exercise-35"},"Exercise 3.5"),(0,a.kt)("admonition",{title:"Mandatory Exercise 3.5",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"  In exercises ",(0,a.kt)("a",{parentName:"p",href:"/part-1/section-6#exercises-111-114"},"1.12")," and ",(0,a.kt)("a",{parentName:"p",href:"/part-1/section-6#exercises-111-114"},"1.13")," we created Dockerfiles for both ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker-hy/material-applications/tree/main/example-frontend"},"frontend")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker-hy/material-applications/tree/main/example-backend"},"backend"),"."),(0,a.kt)("p",{parentName:"admonition"},"  Security issues with the user being a root are serious for the example frontend and backend as the containers for web services are supposed to be accessible through the Internet."),(0,a.kt)("p",{parentName:"admonition"},"  Make sure the containers start their processes as non-root user."),(0,a.kt)("p",{parentName:"admonition"},"  The backend image is based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.alpinelinux.org/"},"Alpine Linux"),", which does not support the command ",(0,a.kt)("inlineCode",{parentName:"p"},"useradd"),". Google will surely help you a way to create a user in an ",(0,a.kt)("inlineCode",{parentName:"p"},"alpine")," based image."),(0,a.kt)("p",{parentName:"admonition"},"  Submit the Dockerfiles.")))}d.isMDXComponent=!0}}]);