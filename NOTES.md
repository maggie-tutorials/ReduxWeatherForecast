NOTES
======

*SearchBar*: component or container?  
Needs to modify the state of the application by dispatching actions, needs to call an ActionCreator. It needs to talk to Redux, so it will be a *Container*. A Container has the ability to talk to Redux, whereas a normal component doesn't.
