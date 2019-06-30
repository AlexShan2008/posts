app.title = '前端招聘要求-（资深&专家）';

option = {
    title: {
        text: '前端招聘要求-（资深&专家）',
        subtext: '数据来自拉勾招聘-2019-06-27--38个招聘岗位（月薪25K-60K）'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['前端招聘要求']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ["英语水平", "Web安全", "前端测试", "系统重构", "技术分享", "HTTP", "抗压性",
        "浏览器兼容性", "开源技术产品", "代码风格", "组件化、模块化", "算法", "CSS3", "Git",
        "Angular/Angular.js", "产品思维", "浏览器工作原理", "数据结构", "Python", "微信小程序", 
        "分析和解决问题的能力", "用户体验", "数据可视化", "WebApp & HyBrid App", "Vue", 
        "React Native", "大型项目", "Node.js", "性能优化", "合作精神", "沟通能力",
        "架构能力", "React", "Webpack"]
    },
    series: [
        {
            name: '前端招聘要求',
            type: 'bar',
            data: [2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6, 6, 8, 9, 13, 14, 14, 14, 14, 15, 16, 18]
        }
    ]
};
