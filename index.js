const http = require('http');
const path = require("path");
const util = require("util");
const v8 = require("v8");
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer((request, response) => {
response.statusCode = 200;
response.setHeader('Content-Type', 'text/plain');
response.end('Hello, from node.js serwer !\n');
});
server.listen(port, hostname, () => {
util.log(v8.getHeapStatistics());
console.log(path.basename(__filename));
util.log(path.join(__dirname, 'uploads','images'));
console.log(`Server running at http://${hostname}:${port}/`);
});

/*Po podmienieniu zawartości pliku dostaliśmy poniższy output. Wnioskiem jest, że nodemon jest przydatny gdy na bieżąco chcemy analizować zmiany 
które zaszły po zmianie kodu bo nie trzeba ręcznie restartować servera, bo przy każdej zmianie automatycznie jest restartowany

Server running at http://127.0.0.1:8888/
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
14 Oct 10:49:27 - {
  total_heap_size: 4927488,
  total_heap_size_executable: 262144,
  total_physical_size: 4927488,      
  total_available_size: 2194292408,  
  used_heap_size: 4453104,
  heap_size_limit: 2197815296,       
  malloced_memory: 262264,
  peak_malloced_memory: 206880,      
  does_zap_garbage: 0,
  number_of_native_contexts: 2,      
  number_of_detached_contexts: 0,    
  total_global_handles_size: 8192,   
  used_global_handles_size: 2560,    
  external_memory: 1737097
}
index.js
14 Oct 10:49:27 - E:\Semestr5\Języki wysokiego poziomu w aplikacjach internetowych\WojciechMierzwa.github.io\uploads\images
Server running at http://127.0.0.1:8888/ */