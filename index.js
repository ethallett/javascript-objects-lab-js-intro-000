function updateObjectWithKeyAndValue(object, key, value){
  var object = {[key] : 'value' };
  return Object.assign({[key] : 'new value' }, object);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.prop2 = 2
  return object
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object)
  return delete newObject.object
}

function destructivelyDeleteFromObjectByKey(object, key){
   return delete object.prop

}
