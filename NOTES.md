NOTES
======

**SearchBar**: component or container?  
Needs to modify the state of the application by dispatching actions, needs to call an ActionCreator. It needs to talk to Redux, so it will be a **Container**. A Container has the ability to talk to Redux, whereas a normal component doesn't.

**Middleware** are functions that intercept Actions and manipulate them (or do things with them) before they hit the Reducer.  
`redux-promise` is a Middleware that helps handle Ajax requests.

A **Promise** is a data structure that doesn't yet contain any data.  
Redux Promise is a Middleware, and has the ability to stop or manipulate Actions before they hit any Reducer whatsoever.

Redux never manipulates State directly. Whenever you're inside a reducer you don't mutate the State, but return a new updated state.
