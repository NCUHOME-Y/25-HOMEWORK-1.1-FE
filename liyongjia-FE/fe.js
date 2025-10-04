const URL = "https://teaching.ncuos.com"

// fetch 默认是 GET 方法，POST 等方法请看上面的文档 或者问 AI
const response = await fetch(URL + '/baseInfo');
const skill = await fetch(URL + '/skillList');

// 获取元素
const nameElement = document.getElementById('name');
const phoneElement = document.getElementById('phone');
const emailElement = document.getElementById('email');
const skillElement = document.getElementById('skill');


// 解析JSON数据
const data = await response.json();
console.log("data: ",data);
console.log("data id: ",data.id);
console.log("data.name: ",data.name);

const skillData = await skill.json();
console.log("skillData: ",skillData);

// 检查请求是否成功
console.log("response: ",response);
console.log("response ok: ",response.ok);
// if (!response.ok) {         
//     throw new Error(`网络请求失败，状态码: ${response.status}`);       
// }

console.log("skill: ",skill);
console.log("skill ok: ",skill.ok);
// if (!skill.ok) {
//     skillElement.innerHTML = "技能列表获取失败 我可能是一个茶壶 🫖";         
//     throw new Error(`网络请求失败，状态码:418`);
// }

// 下面的添加技能列表为AI帮助

//1.筛选出值为 true 的技能名称
const skillDataTure = [];
for (const skillName in skillData){
    if (skillData[skillName] === true ) {
        skillDataTure.push(skillName);
    }  
}
if (skillDataTure.length > 0) {
    // 2. 初始化 HTML 字符串，创建一个无序列表 <ul>
    let skillHtml = '<ul class="skills-list">';
    
    // 3. 遍历筛选后的技能数组，为每个技能创建 <li> 标签
    skillDataTure.forEach(skill => {
        skillHtml += `<li>${skill}</li>`; // 拼接：<li>技能名</li>
    });
    
    // 4. 闭合无序列表标签
    skillHtml += '</ul>';
    
    // 5. 将生成的 HTML 插入到页面元素中
    skillElement.innerHTML = skillHtml;
} else {
    // 6. 如果没有符合条件的技能，显示提示文本
    skillElement.innerHTML = "暂无已掌握的技能";
}

// 将数据插入到 HTML 元素中
nameElement.innerHTML = data.name;
phoneElement.innerHTML = "电话:" + data.phone;
emailElement.innerHTML = "邮箱:" + data.email;

// 根据 ID 获取详细信息
const selfIntroduction = await fetch(URL + '/selfIntroduction?id=' + data.id);
const selfIntroductionData = await selfIntroduction.json();
console.log("selfIntroductionData: ",selfIntroductionData);
console.log("selfIntroductionData: ",selfIntroductionData.ok);
const self = document.getElementById('self');
self.innerHTML = selfIntroductionData.selfIntroduction

