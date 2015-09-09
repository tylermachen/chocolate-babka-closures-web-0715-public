function counterCreator(num){
  return function(){
    return num += 1;
  }
}

function countAnnouncer(type, count){
  return function(){
    return "Now serving " + type + " number " + count() + "!";
  }
}
