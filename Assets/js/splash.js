const splash = () => {
    var intro = document.querySelector('.intro');
var header = document.querySelector('.logo-header');
var logo = document.querySelector('.logo');
var desc = document.querySelector('.desc');
var names = document.querySelector('.name');
var desc_name = document.querySelector('.desc_name');
var name_m = document.querySelector('.name_m');
var desc_name_m = document.querySelector('.desc_names');
var logo_media = document.querySelectorAll('.logo_media a');
// console.log(logo_media);

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        setTimeout(()=>{
            logo.classList.add('active');
            desc.classList.add('active');
        }, 400)
       
        setTimeout(()=>{
            setTimeout(()=>{
                logo.classList.remove('active');
                logo.classList.remove('active');
                desc.classList.add('fade');
                desc.classList.add('fade');
            }, 50)
        },2000)
        window.location.href = '#home'
        setTimeout(()=>{
            intro.style.top = "-100vh";
            setTimeout(()=>{
                names.classList.add('active');
                name_m.classList.add('active');
            }, 1000)
            setTimeout(()=>{
                desc_name.classList.add('active');
                desc_name_m.classList.add('active');
            }, 2000)
            setTimeout(()=>{
                logo_media.forEach((node, index)=>{
                    // console.log(node);
                    setTimeout(()=>{
                    node.classList.add('active');
                }, (index+1)*500)
                })
            }, 3000)
        },3000)
    },);
})
    return true;
}

export default splash;