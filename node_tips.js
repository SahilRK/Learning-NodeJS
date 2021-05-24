//1) The window equivalent object of the browser in node is called "global"
//2) window is the global object of the browser and document is the main DOM object. These are available only in the browser.
//3) Similarly, global and process objects are the respective equivalents of window and document. global contains all the properties and methods that are available on the global object. The process object contains various properties and methods for the node process that is running.
//4) NodeJS uses an event-driven,non-blocking I/O that makes it lightweight and efficient. Non-blocking I/O means that the user can interact with the browser even when there is an I/O process happening in the background.
//5) To run a simple node script, open the terminal and type node <the js file name>
console.log(`Hey welcome to nodejs`);