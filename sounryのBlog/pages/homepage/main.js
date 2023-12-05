import {typeWriter, scrollTO,scrollTrigger} from "./demo.js";
import { clickEffect } from "../../components/utils.js";
var text1 = "在货币和语言中出卖一生";
var text2 = "这还不是人类的一切啊";
window.onload =function(){
 var  container= document.querySelector(".show_text");
 typeWriter(text1,text2,container);
    scrollTrigger('.cards_item');
    scrollTrigger('.aside_card');
}

clickEffect();
scrollTO();

