function show(){
  let sexv = document.getElementById("sex").value
  let agev = document.getElementById("age").value
  let timev = document.getElementById("time").value
  let wartzv = document.getElementById("wartz").value
  let typev = document.getElementById("type").value
  let areav = document.getElementById("area").value

  if(sexv==''||agev==''||timev==''||wartzv==''||typev==''||areav=='')
    return M.toast({html: 'Please Enter all the values'})

  let object_to_predict = {
    sex: sexv,
    age: agev,
    time: timev,
    wartz: wartzv,
    type: typev,
    area: areav
  }
  const output = net.run(object_to_predict).Result_of_Treatment;
  const final_result = ((output)*100).toFixed(2)
  const toastHTML = '<span>Success Rate: '+final_result+' %</span>'
  return M.toast({html: toastHTML})
}
