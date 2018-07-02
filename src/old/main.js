require.config({
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        "test": 'bundle'
    }
});
// require(["old/old.module"], function(oldModule) {
//     console.log("RequireJs loaded old module", oldModule);
// });