import {typeWriter, stopTypeWriter} from "../homepage/demo.js";
const book_container=[
    {
        title:"《挪威的森林》",
        cut:"每个人都有属于自己的一片森林，也许我们从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。"
       },
    {
        title:"《罪与罚》",
        cut:"只是为了生存而活下去吗?但是他以前曾有无数次准备为一个理想一个希望甚至为一个幻想而献出自己的生命。对于他来说，仅仅是活下去是不够的：他总希望有更大的生活目的。",
        content:"。",
    },
    {
        title:"《雪国》",
        cut:"生存本身就是一种徒劳。",
        content:"",
    },
    {
        title:"《黄金时代》",
        cut:"那一年我二十一岁，在我一生的黄金时代，我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。",
        content:""
    },
    {
        title:"《局外人》",
        cut:"我体验到这个世界如此像我，如此友爱融洽，觉得自己过去曾经是幸福的，现在仍然是幸福的。为了善始善终，功德圆满，为了不感到自己属于异类，我期望处决我的那天，有很多人前来看热闹，他们都向我发出仇恨的叫喊声。”",
        content:""
    },
    {
        title:"《百年孤独》",
        cut:"What matters in life is not what happens to you but what you remember and how you remember it. 生命中真正重要的不是你遭遇了什么，而是你记住了哪些事，又是如何铭记的。",
        content:""
    }
]
window.onload =function(){
    var  container= document.querySelector("#content");
    var books=document.querySelector(".book");
        for(var i = 0; i < 6; i ++ ){
        var book=books.children[i];
        book.addEventListener('click',async (e)=>{
            stopTypeWriter(container);
            
           var lid=e.target.getAttribute("name")-1;
     
         typeWriter(book_container[lid].title, book_container[lid].cut, container);
        });   
    };
    
    
}
