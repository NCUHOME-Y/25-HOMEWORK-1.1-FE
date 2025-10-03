const URL = "https://teaching.ncuos.com"

// fetch 默认是 GET 方法，POST 等方法请看上面的文档 或者问 AI
const response = await fetch(URL + '/baseInfo');
const skill = await fetch(URL + '/skillList');


// 获取元素
const nameElement = document.getElementById('name');
const photoElement = document.getElementById('photo');
const emailElement = document.getElementById('email');
const skillElement = document.getElementById('skill');


// 解析JSON数据
const data = await response.json();
console.log("data: ",data);
console.log("data.name: ",data.name);

const skillData = await skill.json();
console.log("skillData: ",skillData);

// 检查请求是否成功
console.log("response: ",response);
console.log("response ok: ",response.ok);
if (!response.ok) {         
    throw new Error(`网络请求失败，状态码: ${response.status}`);       
}

console.log("skill: ",skill);
console.log("skill ok: ",skill.ok);
if (!skill.ok) {
    skillElement.innerHTML = "技能列表获取失败 我可能是一个茶壶 🫖";         
    throw new Error(`网络请求失败，状态码:418`);
}


// 将数据插入到 HTML 元素中
nameElement.innerHTML = data.name;
photoElement.innerHTML = "电话:" + data.phone;
emailElement.innerHTML = "邮箱:" + data.email;
skillElement.innerHTML = skillData
