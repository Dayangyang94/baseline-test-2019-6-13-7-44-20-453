'use strict';

function collectSameElements(collectionA, objectB) {
  var c=new Array();
  var collB=objectB.value;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<collB.length;j++){
      if(collectionA[i]==collB[j]){
        c.push(collectionA[i]);
        break;
      }
    }
  } 
  return c;

}
