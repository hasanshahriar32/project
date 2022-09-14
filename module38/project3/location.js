//object_model === window.object_model
//object_model.location === window.location
//they are the same object and the same reference

function newLocation() {
    var newLocation = window.location;
    newLocation.href = "http://www.google.com";
    // newLocation.reload();
}
