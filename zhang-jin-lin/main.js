async function myfetch() {
    const res1 = await fetch('./baseInfo.json');
    const data1 = await res1.json();
    console.log("文本内容:",data1)
    console.log("response:", res1);
    console.log("ok:", res1.ok);

    if (res1.ok === false) {
      throw new Error('请求失败,状态码:' + res1.status);
    }
    document.getElementById('name').textContent = data1.name;
    document.getElementById('phone').textContent = data1.phone;
    document.getElementById('number').textContent = data1.number;
    document.getElementById('qq').textContent = data1.qq;
    document.getElementById('email').textContent = data1.email;
 localStorage.setItem('id', data1.id)
 const basicInfoID=localStorage.getItem('id')
console.log('basicInfoID:',basicInfoID)

 const res2 = await fetch('./skill.json');
    const data2 = await res2.json();
  if(Math.random()<0.3){
const err=new Error("i'm a teapot")
err.status=418
document.getElementById('list').innerHTML="......"
document.getElementById('skill').innerHTML="i'm a tea pot"
}else{
    console.log("response:", res2);
    console.log("ok:", res2.ok);
    if (res2.ok === false) {
      throw new Error('请求失败,状态码:' + res2.status);
    }
    document.getElementById('skill').innerHTML= ''
Object.entries(data2).forEach(([skillname, value]) => {
    if (value === true) {
        const li = document.createElement('li');
        li.textContent = skillname;
        li.className = 'info';
        document.getElementById('skill').appendChild(li);
    }
})};


if(basicInfoID==='1'){
const res3= await fetch('./selfIntroduction-1.json');
const data3=await res3.json()
console.log("response:", res3);
console.log("ok:", res3.ok);
document.getElementById('words').textContent=data3.words
}
if(basicInfoID===''){
  document.getElementById('words').textContent="400:id无效"
  }
if(basicInfoID!=='1'&&basicInfoID!==''){
  document.getElementById('words').textContent="404:未找到该用户"
}
/*本地搭建的静态文件似乎无法实现post请求......
又看了一遍文档才发现，是我理解错了，不要求返回特定的个人信息，只需
向学长示例里的网站发起请求就行。（就是这一点让我纠结了好久，一方面
我想返回自定义信息，另一方面我又想公共网址发起请求，最终理解错为
在本地模拟请求，可是模拟的过程也很奇怪，一个是做不到拼接id参数进行查询
另一个是根本实现不了post请求，还有各种状态码的返回也模拟不全，等我
意识到的时候感觉已经失去所有手段和力量了。哭）*/
}
myfetch()
