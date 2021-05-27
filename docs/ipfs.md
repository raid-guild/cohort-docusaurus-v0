---
sidebar_position: 8
---

# IPFS

![](http://catplanet.org/wp-content/uploads/2014/11/Pizza-space-cat.jpg)

### What is it?
Is a peer-to-peer hypermedia protocol
designed to make the web faster, safer, and more open.

### What is this important?
It allows us to deliver content with low latency at high use rates,
also it will allow content to be safe from censorship.

### How do we deploy?
We view React and Docusaurus as "static" content. 
therefore we can use ipfs-deploy to:
> Upload static website to IPFS pinning services and optionally update DNS.

### Exact steps to take
Install IPFS-Deploy globally:
```bash
$ npm install -g ipfs-deploy
```
or
```bash
$ yarn global add ipfs-deploy
```
you can also not install it:
```bash
$ npx ipfs-deploy 
```

Using services using the -p name flag
Configure env vars according to https://github.com/ipfs-shipyard/ipfs-deploy#supported-pinning-services

```bash
$ ipfs-deploy build/
```

aaand it should be up, domain hosting and linking will be in a different doc