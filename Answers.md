1.  Explain the differences between `client-side routing` and `server-side routing`.

--> Server side routing occurs when the browser makes a request to a server to get the details of a page a user clicked. here since a new request is being made when a user clicks on a link the page is always reloaded. Any time a user makes a get request, a new page document is being displayed, the server treats it like a new request.

--> With client side rendering, the website or web application is being mounted once. When a user makes a request, the url changes but there is no request being made to the server, instead the urls are handled by state. When a Link is clicked, the url changes, state changes which will cause a different data to be displayed. sometimes requests are made to the server, other times its components that are being displayed, but the page does not reload.

1.  What does HTTP stand for?

--> HyperText Transfer Protocol

1.  What does CRUD stand for?

--> CRUD : C -> Create
           R -> Read
           U -> Update
           D -> Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

-->     Create  --  POST 
        Read    --  GET
        Update  --  PUT, PATCH
        Delete  --  DELETE

1.  Mention three tools we can use to make AJAX requests

--> Fetch(Javascript built-in method), Jquery, Axios