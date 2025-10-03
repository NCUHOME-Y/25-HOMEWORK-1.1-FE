async function myfetch() {
    const res1 = await fetch('./baseInfo.json');
    const data1 = await res1.json();
    console.log("response:", res1);
    console.log("ok:", res1.ok);
    if (data1.ok === false) {
      throw new Error('请求失败,状态码:' + data1.status);
    }
    document.getElementById('name').textContent = data1.name;
    document.getElementById('phone').textContent = data1.phone;
    document.getElementById('number').textContent = data1.number;
    document.getElementById('qq').textContent = data1.qq;
    document.getElementById('email').textContent = data1.email;
 const basicInfoID=data1.id
console.log('basicInfoID:',basicInfoID)

  if(Math.random()<.3){
const err=new Error("i'm a teapot")
err.status=418
document.getElementById('list').innerHTML="......"
document.getElementById('skill').innerHTML="i'm a tea pot"
}else{
    const res2 = await fetch('./skill.json');
    const data2 = await res2.json();
    console.log("response:", res2);
    console.log("ok:", res2.ok);
    document.getElementById('skill').innerHTML= ''
Object.entries(data2).forEach(([skillname, value]) => {
    if (value === true) {
        const li = document.createElement('li');
        li.textContent = skillname;
        li.className = 'info';
        document.getElementById('skill').appendChild(li);
    }
})};


if(basicInfoID===1){
const res3= await fetch('./selfIntroductionid=1.json')
const data3=await res3.json()
console.log("response:", res3);
    console.log("ok:", res3.ok);
document.getElementById('words').textContent=data3.words
}
if(basicInfoID===''){
  document.getElementById('words').textContent="400:id无效"
  }
if(basicInfoID!==1&&basicInfoID!==''){
  document.getElementById('words').textContent="404:未找到该用户"
}
}
myfetch()
