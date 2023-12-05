var timer;
function typeWriter(text, text2, textContainer) {
    function typeText(index) {
        if (index < text.length) {
            textContainer.textContent += text.charAt(index);
            index++;
            timer =  setTimeout(() => {
                typeText(index);
            }, 150);
        } else {
            timer =  setTimeout(() => {
                deleteText(text.length);
            }, 1000);
        }
    }

    function deleteText(index) {
        if (index >= 0) {
            textContainer.textContent = text.substring(0, index);
            index--;
            timer =  setTimeout(() => {
                deleteText(index);
            }, 100);
        } else {
            timer =  setTimeout(() => {
                typeText2(0);
            }, 1000);
        }
    }

    function typeText2(index) {
        if (index < text2.length) {
            textContainer.textContent += text2.charAt(index);
            index++;
            timer = setTimeout(() => {
                typeText2(index);
            }, 150);
        } 
    }

    typeText(0);
}
function stopTypeWriter(textContainer) {
    // 清除timer，停止打字机效果
    clearTimeout(timer);
    // 清空textContainer，准备下一次调用
    textContainer.textContent = "";
}
function scrollTO() {
    const scrollButton = document.getElementsByClassName("scroll-button")[0];
    scrollButton.addEventListener("click", () => {
    const mainContent = document.getElementById("main-content");
    console.log("mainContent", mainContent);
    if (mainContent) {
        console.log("scrolling to main content");
        mainContent.scrollIntoView({ behavior: "smooth" });
    }
    });
    
}



const scrollTrigger = (item) => {
    const box = document.querySelectorAll(item);
    console.log(box);

    const handleScroll = () => {
        for (let i = 0; i < box.length; i++) {
            if (box[i].offsetTop <= window.scrollY + window.innerHeight * 0.8) {
                box[i].classList.add('active');
                console.log(box[i]);
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    // handleScroll();
};

export {
    typeWriter,
    stopTypeWriter,
    scrollTO,
    scrollTrigger
}




