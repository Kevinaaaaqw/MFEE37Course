document.getElementById('food-menu').addEventListener('click', function () {
  document.getElementById('arrow-down-sign').style.animationFillMode = `forwards`
  document.getElementById('arrow-down-sign').style.animationDuration = `.5s`
  document.getElementById('menu').style.animationFillMode = `forwards`
  document.getElementById('menu').style.animationDuration = `.5s`
  if (window.getComputedStyle(document.getElementById('arrow-down-sign')).animationName == 'none') {
    document.getElementById('arrow-down-sign').style.animationName = `change1`
  } else if (window.getComputedStyle(document.getElementById('arrow-down-sign')).animationName == 'change1') {
    document.getElementById('arrow-down-sign').style.animationName = `change0`
  } else {
    document.getElementById('arrow-down-sign').style.animationName = `change1`
  }
  console.log(document.getElementById('menu').style.height)
  if (document.getElementById('menu').style.height !== 'auto') {
    document.getElementById('menu').style.height = `auto`
    document.getElementById('menu').style.animationName = `open1`
  } else {
    document.getElementById('menu').style.height = `0px`
    document.getElementById('menu').style.animationName = `open0`
  }
})
document.getElementById('logoin-icon').addEventListener('click', function () {
  document.getElementById('logoin-menu').style.animationFillMode = `forwards`
  document.getElementById('logoin-menu').style.animationDuration = `.5s`
  console.log(window.getComputedStyle(document.getElementById('logoin-menu')).height)
  if (window.getComputedStyle(document.getElementById('logoin-menu')).height !== '150px') {
    document.getElementById('logoin-menu').style.animationName = `open2`
  } else {
    document.getElementById('logoin-menu').style.animationName = `open3`
  }
})
console.log()
// 非常艱難地做出類google登入介面input框架
document.getElementById('account-input').addEventListener('focus', function () {
  document.getElementById('account-lable').style.top = '-8px'
  document.getElementById('account-lable').style.fontSize = '12px'
})
document.getElementById('account-input').addEventListener('blur', function () {
  if (document.getElementById('account-input').value != '' & document.getElementById('account-input').value.replaceAll(' ', '') != '') {
    document.getElementById('account-lable').style.top = '-8px'
    document.getElementById('account-lable').style.fontSize = '12px'
  } else {
    document.getElementById('account-lable').style.top = '15%'
    document.getElementById('account-lable').style.fontSize = '16px'
  }
})
document.getElementById('account-input-1').addEventListener('focus', function () {
  document.getElementById('account-lable-1').style.top = '-8px'
  document.getElementById('account-lable-1').style.fontSize = '12px'
})
document.getElementById('account-input-1').addEventListener('blur', function () {
  if (document.getElementById('account-input-1').value != '' & document.getElementById('account-input').value.replaceAll(' ', '') != '') {
    document.getElementById('account-lable-1').style.top = '-8px'
    document.getElementById('account-lable-1').style.fontSize = '12px'
  } else {
    document.getElementById('account-lable-1').style.top = '15%'
    document.getElementById('account-lable-1').style.fontSize = '16px'
  }
})
document.getElementById('member-logoin-button').addEventListener('click', function () {
  document.getElementById('account-tip').innerHTML = ''
  document.getElementById('account-input').value = ''
  if (document.getElementById('account-input').value != '' & document.getElementById('account-input').value.replaceAll(' ', '') != '') {
    document.getElementById('account-lable').style.top = '-8px'
    document.getElementById('account-lable').style.fontSize = '12px'
  } else {
    document.getElementById('account-lable').style.top = '15%'
    document.getElementById('account-lable').style.fontSize = '16px'
  }
})
document.getElementById('member-logoin-button').addEventListener('click', function () {
  document.getElementById('account-tip').innerHTML = ''
  document.getElementById('account-input-1').value = ''
  if (document.getElementById('account-input-1').value != '' & document.getElementById('account-input').value.replaceAll(' ', '') != '') {
    document.getElementById('account-lable-1').style.top = '-8px'
    document.getElementById('account-lable-1').style.fontSize = '12px'
  } else {
    document.getElementById('account-lable-1').style.top = '15%'
    document.getElementById('account-lable-1').style.fontSize = '16px'
  }
})
// 倒數計時迴圈
var ikuiku = 0
var aheahe = 1
var counttime;
var banana;
var passwordtip = document.getElementById('password-tip')
document.getElementById('logoin-button').addEventListener('click', function () {
  if (ikuiku > 2) {
  } else if (document.getElementById('account-input').value == 'kevin' && document.getElementById('account-input-1').value == 'aaaa') {
    alert('登入成功')
    window.location.assign('./DoBest.html')
  } else if (document.getElementById('account-input').value != '' && document.getElementById('account-input').value.replaceAll(' ', '') != '' && document.getElementById('account-input-1').value == '' && document.getElementById('account-input-1').value.replaceAll(' ', '') == '') {
    document.getElementById('account-tip').innerHTML = ''
    passwordtip.innerHTML = '請輸入密碼'
  } else if (document.getElementById('account-input').value != '' || document.getElementById('account-input').value.replaceAll(' ', '') != '') {
    // 錯誤次數
    ikuiku++
    console.log(ikuiku)
    document.getElementById('account-tip').innerHTML = ''
    passwordtip.innerHTML = `帳號或密碼錯誤，還有${3 - ikuiku}次機會`
    if (ikuiku > 2) {
      // 懲罰時間(秒)
      banana = (10 * aheahe * aheahe)
      passwordtip.innerHTML = `數入錯誤三次，請${Math.floor(banana / 60)}分${banana % 60}秒後嘗試`

      window.setTimeout(countdown, 1000)


    }
  }
  else {
    switch (document.getElementById('account-input').value) {
      case '':
        passwordtip.innerHTML = ''
        document.getElementById('account-tip').innerHTML = '請輸入帳號和密碼'
        break;

      default:
        break;
    }
    switch (document.getElementById('account-input').value.replaceAll(' ', '')) {
      case '':
        passwordtip.innerHTML = ''
        document.getElementById('account-tip').innerHTML = '請輸入帳號和密碼'
        break;

      default:
        break;
    }
  }
})
function countdown() {
  banana--;
  passwordtip.innerHTML = `數入錯誤三次，請${Math.floor(banana / 60)}分${banana % 60}秒後嘗試`
  if (banana > 0) { window.setTimeout(countdown, 1000) } else {
    ikuiku = 0
    aheahe++
  }
}
document.getElementById('account-input').addEventListener('keypress', function (event) {
  if(event.key === "Enter"){
    if (ikuiku > 2) {
    } else if (document.getElementById('account-input').value == 'kevin' && document.getElementById('account-input-1').value == 'aaaa') {
      alert('登入成功')
      window.location.assign('./DoBest.html')
    } else if (document.getElementById('account-input').value != '' && document.getElementById('account-input').value.replaceAll(' ', '') != '' && document.getElementById('account-input-1').value == '' && document.getElementById('account-input-1').value.replaceAll(' ', '') == '') {
      document.getElementById('account-tip').innerHTML = ''
      passwordtip.innerHTML = '請輸入密碼'
    } else if (document.getElementById('account-input').value != '' || document.getElementById('account-input').value.replaceAll(' ', '') != '') {
      // 錯誤次數
      ikuiku++
      console.log(ikuiku)
      document.getElementById('account-tip').innerHTML = ''
      passwordtip.innerHTML = `帳號或密碼錯誤，還有${3 - ikuiku}次機會`
      if (ikuiku > 2) {
        // 懲罰時間(秒)
        banana = (10 * aheahe * aheahe)
        passwordtip.innerHTML = `數入錯誤三次，請${Math.floor(banana / 60)}分${banana % 60}秒後嘗試`
  
        window.setTimeout(countdown, 1000)
  
  
      }
    }
    else {
      switch (document.getElementById('account-input').value) {
        case '':
          passwordtip.innerHTML = ''
          document.getElementById('account-tip').innerHTML = '請輸入帳號和密碼'
          break;
  
        default:
          break;
      }
      switch (document.getElementById('account-input').value.replaceAll(' ', '')) {
        case '':
          passwordtip.innerHTML = ''
          document.getElementById('account-tip').innerHTML = '請輸入帳號和密碼'
          break;
  
        default:
          break;
      }
    }
  }
})
document.getElementById('account-input-1').addEventListener('keypress', function (event) {
  if(event.key === "Enter"){
    if (ikuiku > 2) {
    } else if (document.getElementById('account-input').value == 'kevin' && document.getElementById('account-input-1').value == 'aaaa') {
      alert('登入成功')
      window.location.assign('./DoBest.html')
    } else if (document.getElementById('account-input').value != '' && document.getElementById('account-input').value.replaceAll(' ', '') != '' && document.getElementById('account-input-1').value == '' && document.getElementById('account-input-1').value.replaceAll(' ', '') == '') {
      document.getElementById('account-tip').innerHTML = ''
      passwordtip.innerHTML = '請輸入密碼'
    } else if (document.getElementById('account-input').value != '' || document.getElementById('account-input').value.replaceAll(' ', '') != '') {
      // 錯誤次數
      ikuiku++
      console.log(ikuiku)
      document.getElementById('account-tip').innerHTML = ''
      passwordtip.innerHTML = `帳號或密碼錯誤，還有${3 - ikuiku}次機會`
      if (ikuiku > 2) {
        // 懲罰時間(秒)
        banana = (10 * aheahe * aheahe)
        passwordtip.innerHTML = `數入錯誤三次，請${Math.floor(banana / 60)}分${banana % 60}秒後嘗試`
  
        window.setTimeout(countdown, 1000)
  
  
      }
    }
    else {
      switch (document.getElementById('account-input').value) {
        case '':
          passwordtip.innerHTML = ''
          document.getElementById('account-tip').innerHTML = '請輸入帳號和密碼'
          break;
  
        default:
          break;
      }
      switch (document.getElementById('account-input').value.replaceAll(' ', '')) {
        case '':
          passwordtip.innerHTML = ''
          document.getElementById('account-tip').innerHTML = '請輸入帳號和密碼'
          break;
  
        default:
          break;
      }
    }
  }
})

function openvideo(){
  var vide002=document.getElementById("vide002")
  var vide001=document.getElementById("vide001")
  document.getElementById("videobutton").addEventListener('click',function(){
    vide001.style.display='flex'
    vide002.innerHTML='<iframe   width="100%" height="800" src="https://streamable.com/e/shil2" title="YouTube video player" frameborder="0" allowfullscreen></iframe>'
  })
}
function openvideo001(){
  var vide002=document.getElementById("vide002")
  var vide001=document.getElementById("vide001")
  document.getElementById("videobutton001").addEventListener('click',function(){
    vide001.style.display='flex'
    vide002.innerHTML='<iframe width="100%" height="662" src="https://www.youtube.com/embed/Vl4Xgygfb68" title="2022麥當勞歡樂送_學生篇" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  })
}
function openvideo002(){
  var vide002=document.getElementById("vide002")
  var vide001=document.getElementById("vide001")
  document.getElementById("videobutton002").addEventListener('click',function(){
    vide001.style.display='flex'
    vide002.innerHTML='<iframe width="100%" height="600" src="https://www.youtube.com/embed/yWz4twybSOQ"title="《Resident Evil 4》動畫 - RE名作劇場：「不思議村子裡的里昂」 第三話" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen></iframe>'
  })
}

function closevideo(){
  var vide002=document.getElementById("vide002")
  var vide001=document.getElementById("vide001")
  document.getElementById("vide001").addEventListener('click',function(){
    vide001.style.display='none'
    vide002.innerHTML=''
  })
}