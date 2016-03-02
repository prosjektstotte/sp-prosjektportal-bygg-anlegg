(function () {
    // ceremony 
    var deferred = GT.jQuery.Deferred();
    GT.Project.Setup.CustomStep.promise = deferred.promise();
    deferred.resolve("custom step - all done");

})();