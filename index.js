var recipes = {}

function updateObjectWithKeyAndValue (object, key, value){
    return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
    return Object.assign(object, { [key]: value })
}

function deleteFromObjectByKey(object,key){
//    return delete object.key
  var deleteObject = Object.assign({}, object)
   delete deleteObject.key
    return deleteObject
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object.key
}
