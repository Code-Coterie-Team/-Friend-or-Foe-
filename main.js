function friend(friends){
    let result=[];
  friends.forEach(element=>{
    if(element.length===4){
      result.push(element)
    }
       })
   return result;
}