function updateObjectWithKeyAndValue(object, key, value){
   Object.assign(object, {[key] : value})
   return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.prop2 = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object)
  return delete newObject.object
}

function destructivelyDeleteFromObjectByKey(object, key){
   return delete object.prop

}
