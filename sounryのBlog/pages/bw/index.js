window.onload = function() {
    var left = document.getElementById('left');
    var md = window.markdownit({
        html: true, //可以识别html
        linkify: true,//自动检测像链接的文本
        breaks: true,//回车换行
    })
    .use(window.markdownItAnchor, {
        permalink: false,
        permalinkBefore: false,
        permalinkSymbol: '#'
    })
    .use(window.markdownItTocDoneRight, {
        containerClass: 'toc',
        containerId: 'toc',
        listType: 'ul',
        listClass: 'listClass',
        itemClass: 'itemClass',
        linkClass: 'linkClass',
        callback: function (html, ast) {
        //把目录单独列出来
            left.innerHTML = html;
        }
    });
    fetch('css.md')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch CSS file');
            }
            return response.text();
        })
        .then(text => {
            document.getElementById('output').innerHTML = md.render(text);
        })
        .catch(error => {
            console.error('Error fetching CSS file:', error);
            // 可以添加一些处理失败情况的代码，例如显示错误信息给用户
        });
       

        // var newDiv = document.createElement('div');
        // var textNode = document.createTextNode('目录');
        // newDiv.appendChild(textNode);
        // newDiv.setAttribute('class', 'headline');
        // var container = document.getElementById('left');
        // console.log(container);
        // container.appendChild(newDiv);
        // console.log(container);



}
