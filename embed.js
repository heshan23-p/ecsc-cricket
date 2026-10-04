// Rebuilds the built-in fallback copy of public/, admin/ and data.json inside server.js.
// Run after you change any frontend file:  node embed.js
const fs=require('fs'),path=require('path');
const files=['data.json'];
for(const d of ['public','admin'])for(const f of fs.readdirSync(path.join(__dirname,d)))files.push(d+'/'+f);
const o={};for(const f of files)o[f]=fs.readFileSync(path.join(__dirname,f)).toString('base64');
let s=fs.readFileSync(path.join(__dirname,'server.js'),'utf8');
const a=s.indexOf('/*EMBED_START*/'),b=s.indexOf('/*EMBED_END*/');
if(a<0||b<0)throw new Error('markers not found in server.js');
s=s.slice(0,a)+'/*EMBED_START*/'+JSON.stringify(o)+s.slice(b);
fs.writeFileSync(path.join(__dirname,'server.js'),s);
console.log('Embedded',files.length,'files ('+Math.round(s.length/1024)+' KB server.js)');
