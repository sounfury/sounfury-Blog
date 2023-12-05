const music = new Audio('');
window.onload = function(){

const songs =[
    {
        id:"1",songName:`I Really Want to Stay at Your House <br> <div class="subtitle">Samuel Kim</div>`,poster:"likeimg/1.jpg"
    },
    {
        id:"2",songName:`Mystery of Love <br> <div class="subtitle">Sufjan Stevens</div>`,poster:"likeimg/2.jpg"
    },
    {
        id:"3",songName:`Visions of Gideon <br> <div class="subtitle">Sufjan Stevens</div>`,poster:"likeimg/3.jpg"
    },
    {
        id:"4",songName:`golden hour <br> <div class="subtitle">JVKE</div>`,poster:"likeimg/4.jpg"
    },
    {
        id:"5",songName:`moon and back <br> <div class="subtitle">JVKE</div>`,poster:"likeimg/5.jpg"
    },
    {
        id:"6",songName:`Die For You <br> <div class="subtitle">Joji</div>`,poster:"likeimg/6.jpg"
    },
    {
        id:"7",songName:`Afterthought <br> <div class="subtitle">Joji</div>`,poster:"likeimg/7.jpg"
    },
    {
        id:"8",songName:`Ticking Away <br> <div class="subtitle">VOLORANT</div>`,poster:"likeimg/8.jpg"
    },
    {
        id:"9",songName:`Take Yourself Home <br> <div class="subtitle">Troye Sivan</div>`,poster:"likeimg/9.jpg"
    },
    {
        id:"10",songName:`Easy <br> <div class="subtitle">Troye Sivan</div>`,poster:"likeimg/10.jpg"
    },
    {
        id:"11",songName:`Sick Of You <br> <div class="subtitle">Sub Urban</div>`,poster:"likeimg/11.jpg"
    },
    {
        id:"12",songName:`Cradles <br> <div class="subtitle">Sub Urban</div>`,poster:"likeimg/12.jpg"
    },
    {
        id:"13",songName:`Heat Waves <br> <div class="subtitle">Glass Animals</div>`,poster:"likeimg/13.jpg"
    },
    {
        id:"14",songName:`The Other Side Of Paradise <br> <div class="subtitle">Glass Animals</div>`,poster:"likeimg/14.jpg"
    },
    {
        id:"15",songName:`Episode 33 <br> <div class="subtitle">She Her Her Hers</div>`,poster:"likeimg/15.jpg"
    },
    {
        id:"16",songName:`Liability <br> <div class="subtitle">Lorde</div>`,poster:"likeimg/16.jpg"
    },
]

// 上方列表获取歌曲名字和封面
Array.from(document.getElementsByClassName("songItem")).forEach((e,i)=>{
    e.getElementsByTagName("img")[0].src = songs[i].poster;
    e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
})

//使按钮复原
const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName("playListPlay")).forEach((e)=>{
        e.classList.add("bi-play-circle-fill");
        e.classList.remove("bi-pause-circle-fill");
    })
}
//使背景复原
const makeAllBackgrounds = ()=>{
    
    Array.from(document.getElementsByClassName("songItem")).forEach((e)=>{
        e.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let main_poster = document.getElementById("main_poster");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playListPlay")).forEach((e)=>{
    e.addEventListener("click",(e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove("bi-play-circle-fill");
        e.target.classList.add("bi-pause-circle-fill");
        music.src = `like/${index}.mp3`;
        poster_master_play.src = `likeimg/${index}.jpg`;
        main_poster.src = `likeimg/${index}.jpg`;
        document.getElementById("main_poster").classList.add("poster_active")
        music.play();
        let song_title = songs.filter((e)=>{
            return e.id == index;
        })
        song_title.forEach(e =>{
            let {songName} = e;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        wave.classList.add("active2");
        music.addEventListener("ended",()=>{
            masterPlay.classList.add("bi-play-fill");
            masterPlay.classList.remove("bi-pause-fill");
            wave.classList.remove("active2")
            document.getElementById("main_poster").classList.remove("poster_active")
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName("songItem"))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})

// 播放按钮
let masterPlay = document.getElementById("masterPlay");
let wave =document.getElementsByClassName("wave")[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();   
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        wave.classList.add("active2");
        document.getElementById("main_poster").classList.add("poster_active")
    } else {
        music.pause();
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
        wave.classList.remove("active2");
        document.getElementById("main_poster").classList.remove("poster_active")
    }
})


//进度条
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];


music.addEventListener("timeupdate",()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if(sec < 10){
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if(sec1 < 10){
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener("change",()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener("ended",()=>{
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
    wave.classList.remove("active2");
    document.getElementById("main_poster").classList.remove("poster_active")
})


// 音量条
let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol_dot");
let vol_bar = document.getElementsByClassName("vol_bar")[0];

vol.addEventListener("change",()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
    }
    if (vol.value > 0) {
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
    }
    if (vol.value > 50) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-up-fill");
    }
    let vol_a =vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

var delect = function(e){
    document.getElementById(e).classList.remove("bi-play-fill");
}
let back = document.getElementById("back")
let next = document.getElementById("next")
back.addEventListener("click",()=>{
    index -= 1;
    if(index <1){
        index = Array.from(document.getElementsByClassName("songItem")).length;
    }
    music.src = `like/${index}.mp3`;
    poster_master_play.src = `likeimg/${index}.jpg`;
    main_poster.src = `likeimg/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    let song_title = songs.filter((e)=>{
        return e.id == index;
    })
    song_title.forEach(e =>{
        let {songName} = e;
        title.innerHTML = songName;
    })
    makeAllPlays();
    document.getElementById(`${index}`).classList.remove("bi-play-circle-fill");
    document.getElementById(`${index}`).classList.add("bi-pause-circle-fill");
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})
next.addEventListener("click",()=>{
    index -=0;
    index += 1;
    if(index >Array.from(document.getElementsByClassName("songItem")).length){
        index = 1;
    }
    music.src = `like/${index}.mp3`;
        poster_master_play.src = `likeimg/${index}.jpg`;
        main_poster.src = `likeimg/${index}.jpg`;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        wave.classList.add("active2");
        let song_title = songs.filter((e)=>{
            return e.id == index;
        })
        song_title.forEach(e =>{
            let {songName} = e;
            title.innerHTML = songName;
        })
        makeAllPlays();
        document.getElementById(`${index}`).classList.remove("bi-play-circle-fill");
        document.getElementById(`${index}`).classList.add("bi-pause-circle-fill");
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName("songItem"))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})
// 回车传值
var keywordInput = document.getElementById('keyword')
document.addEventListener("keyup", (e)=>{
	if (e.key == "Enter") {
    	var value = keywordInput.value
        renderSearchList(value)
       
	}
})

}



// ajax请求

var xhr =new XMLHttpRequest()

// get函数封装

var get = function (url, data, callback) {
    var xhr = new XMLHttpRequest()
    var param = '?'
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            param += key + '=' + data[key] + '&'
        }
    }
    param = param.slice(0, param.length - 1)
    xhr.open('GET', url + param, true)
    xhr.send()
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            if (callback) {
                callback(JSON.parse(xhr.response))
            }
        }
    }
}

// 二层封装

var search = function (keywords, callback) {
    get('http://localhost:3000/search', {
        keywords: keywords,
        limit : 10 
    }, function (res) {
        if (callback) {
            callback(res.result.songs)
            // clickli()
        }
    })
}
var getSongUrl = function (id) {
    return new Promise(function (resolve, reject) {
        get('http://localhost:3000/song/url', { id: id }, function (res) {
            // Check if the request was successful
            if (res.code === 200 && res.data && res.data.length > 0 && res.data[0].url) {
                resolve(res.data[0].url);
            } else {
                reject(new Error('Failed to fetch song URL'));
            }
        });
    });
};
var getLrc = function (id) {
    return new Promise(function (resolve) {
    get('http://localhost:3000/lyric', {id: id}, function (res) {
        // console.log(res)
        resolve(res.lrc.lyric)
    })
    })
}
var albumpic = function (id) {
    return new Promise(function (resolve) {
        get('http://localhost:3000/album', { id: id }, function (res) {
            resolve(res.album.blurPicUrl);
        });
    });
};

let searchList =document.getElementsByClassName("search_list")[0]
var closeSearchList = function () {
    searchList.className = 'search_list'
}
var openSearchList = function () {
    searchList.className = 'search_listactive'
}


var resultList = document.getElementById('result_list')
var  renderSearchList = function (key) {
    search(key, async function (res) {
        var tpl = '<li class="songs" data-id="{--id--}">' +
            '<img src="{--albumpic--}"></img>' +
            '<h3>{--name--}</h3>' +
            '<h5><span>{--geshou--}</span> - 专辑：<span>{--zhuanji--}</span></h5>' +
            '</li>';
        var html = '';

        for (var i = 0; i < res.length; i++) {
            var id2 = res[i].album.id;
            
            var album_pic = await albumpic(id2);
            html += tpl.replace('{--name--}', res[i].name)
                .replace('{--geshou--}', res[i].artists[0].name)
                .replace('{--zhuanji--}', res[i].album.name)
                .replace("{--id--}", res[i].id)
                .replace("{--albumpic--}", album_pic);
        }
        

        resultList.innerHTML = html;
        openSearchList()
        clickli()
    });
};




// 做一个li点击事件方法
var clickli = function () {
    var songs = document.getElementsByClassName('songs')
    for (var i = 0; i < songs.length; i++) {
        songs[i].addEventListener('click', async function (e) {
            li=e.currentTarget;
            img_src=li.getElementsByTagName("img")[0]
            h3=li.getElementsByTagName("h3")[0]
            span=li.getElementsByTagName("span")[0]
            poster_master_play.src = img_src.src
            main_poster.src = img_src.src
            title.innerHTML = h3.innerText 
            let subtitle = document.querySelector(".master_play .subtitle")
            subtitle.innerHTML = span.innerText
            // getAttribute
            var id = this.getAttribute('data-id')
             // 展示歌词
    
             Promise.all([getLrc(id), getSongUrl(id)])
             .then(function ([lrc, url]) {
                 lrc = parseLrc(lrc);
                 fillLrc(lrc);
                 console.log(url);
                 music.src = url;
                 music.play();
                 document.getElementById("main_poster").classList.add("poster_active")
                 closeSearchList()
                 let wave = document.getElementsByClassName("wave")[0];
                 masterPlay.classList.remove("bi-play-fill");
                 masterPlay.classList.add("bi-pause-fill");
                 wave.classList.add("active2");
             })
             .catch(function (error) {
                 console.error('获取歌词或歌曲URL时发生错误：', error);
             });

            // // 展示歌词
            // getLrc(id, function (res) {
            //     var lrc = parseLrc(res)
            //     fillLrc(lrc)
            // })
            // 清空歌词
            var lrcWarp = document.getElementById('lrc-warp')
            if(lrcWarp){
                lrcWarp.innerHTML=''
            }
            //更改masterplay
            // title.innerTex

        })
    }
}
// clickli()
// 歌词   // [03:06.466]晚星就像你的眼睛杀人又放火\n
var parseLrc = function (lrcString) {
    // 将时间字符串类型转化为number类型 做函数
    var parseTime = function (timeString) {
        // 切割分钟和秒 会分为俩项
        var timeStringArr = timeString.split(':') //["01","51.73"]
        var min = parseInt(timeStringArr[0]) //01
        var s = parseFloat(timeStringArr[1]) //51.73
        var totalTime = (min * 60 + s) * 1000
        return parseInt(totalTime)
    }
 
    var lrcArr = []
    // 通过split()方法来用'\n'分割歌词
    lrcArr = lrcString.split('\n')
    //把每一行存储时间和内容
    var lrcObjArr = []
    // 遍历 通过split()方法来用']'分割歌词内容与事件
    for (var i = 0; i < lrcArr.length; i++) {
        var lines = lrcArr[i].split(']')
        //提取时间，通过把 [03:06.466 的  [  用slice()给切割  得到03:06.466   slice(1,lines[0].length从1开始切(保留)到length最后 仍掉数组[0]
        var time = parseTime(lines[0].slice(1, lines[0].length))
        // 内容
        var content = lines[1]
        // console.log(time, content)
        // console.log(lines,time)
        //错误处理 如果某一行解析不对直接跳过这一行     //continue在foreach()里用不了
        if (content == undefined || isNaN(time)) {
            continue
        }
        lrcObjArr.push({
            // 因为要把字符串时间转化为数组类型，所以在这里就处理了
            time: time,
            content: content
        })
    };
    // console.log(lrcObjArr)
    return lrcObjArr
}

// 模板
var tpl = '<li class="lrc-item">{--content--}</li>'
// 歌词填充
var lrcWarp = document.getElementById('lrc-warp')
var fillLrc = function (lrcObjArr) {
    var html = ''
    for (var i = 0; i < lrcObjArr.length; i++) {
        html += tpl.replace('{--content--}', lrcObjArr[i].content)
    }
    lrcWarp.innerHTML = html
    nowLrcObject = lrcObjArr
}
// 歌词滚动
var index = 0
// 初始距离
var marginTop=39
var nowLrcObject = []
// 对比歌词
function compareLrc() {
    var lrcItem = document.getElementsByClassName('lrc-item');
    if (nowLrcObject[index].time - music.currentTime * 1000 < 100) {
        lrcItem[index].style.color = '#36e2ec';
        marginTop -= 21;
        lrcWarp.style.marginTop = marginTop + 'px';
        lrcItem[index].style.fontSize = '1.2em';

        if (index - 1 > -1) {
            lrcItem[index - 1].style.color = '';
            lrcItem[index - 1].style.fontSize = '';
        }
        index++;
    }

    requestAnimationFrame(compareLrc);
}

music.addEventListener('timeupdate', compareLrc);





const faulttext = {
    player: {},
    texts: [],
    init() {
        this.texts = [...document.getElementsByClassName('faulttext')];
    },
    fault() {
        clearInterval(this.player);
        setTimeout(() => {
            clearInterval(this.player);
            this.texts.forEach((text) => {
                text.classList.remove("faulttext_fault");
                text.style.transform = '';
                text.style.clipPath = '';
            });
        }, 1000)
        this.player = setInterval(() => {
            this.texts.forEach((text) => {
                text.classList.add("faulttext_fault");
                text.style.transform = `translate(${Math.random() * 60 - 30}%,${Math.random() * 60 - 30}%)`;
                let x = Math.random() * 100;
                let y = Math.random() * 100;
                let h = Math.random() * 50 + 50;
                let w = Math.random() * 40 + 10;
                text.style.clipPath = `polygon(${x}% ${y}%, ${x + w}% ${y}%, ${x + w}% ${y + h}%, ${x}% ${y + h}%)`
            })
        }, 30);
    }
};
faulttext.init();