
import timeline from "./data/timeline.js";
const nodetimeline = () => {
        var time_md = document.querySelector('.time-md');
        var time_sm = document.querySelector('.time-sm');
        timeline.forEach((el,index)=> {
            // md here
            if((index + 1) % 2 == 1){
                time_md.innerHTML += '<div class="mb-8 flex mx-auto justify-between items-center right-timeline">'+
        '<div class="order-1 w-5/12"></div>'+
        '<div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">'+
            '<h1 class="mx-auto font-semibold text-lg text-white">'+(index+1)+'</h1>'+
        '</div>'+
       ' <div class="order-1 bg-zinc-400 rounded-lg shadow-xl w-5/12 px-6 py-4 aos-init aos-animate"'+
            'data-aos="fade-up">'+
            '<h3 class="font-bold text-white text-xl">'+el.judul+'</h3>'+
           ' <time class="mb-2 block  text-sm font-normal leading-none text-white  mt-1">'+el.tanggal+'</time>'+
            '<hr class="my-2">'+
           ' <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">'+el.deskripsi+'</p>'+
      '  </div>'+
    '</div>';
            }else if((index + 1) % 2 == 0){
                time_md.innerHTML += '<!-- left timeline -->'+
            '<div class="mb-8 flex mx-auto justify-between flex-row-reverse items-center w-full left-timeline">'+
               ' <div class="order-1 w-5/12"></div>'+
                '<div class="z-20 flex items-center order-1 bg-gray-700 shadow-xl w-8 h-8 rounded-full">'+
                    '<h1 class="mx-auto text-white font-semibold text-lg">'+(index+1)+'</h1>'+
                '</div>'+
                '<div class="order-1  bg-zinc-700 rounded-lg shadow-xl w-5/12 px-6 py-4 aos-init aos-animate" data-aos="fade-up">'+
                    '<h3 class="font-bold text-white text-xl">'+el.judul+'</h3>'+
                    '<time class="mb-2 block  text-sm font-normal leading-none text-white  mt-1">'+el.tanggal+'</time>'+
                    '<hr class="my-2">'+
                    '<p class="text-lg font-medium leading-snug tracking-wide text-white text-opacity-100">'+el.deskripsi+'</p>'+
                '</div>'+
            ' </div>';
            }
            // end md
            time_sm.innerHTML += '<li class="mb-10 ml-6 aos-init aos-animate" data-aos="fade-up">'+
            '<span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-zinc-200 rounded-full ring-8 ring-white ">'+
'                <svg aria-hidden="true" class="w-3 h-3 text-zinc-600"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">'+
                   ' <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>'+
                '</svg>'+
            '</span>'+
            '<h3 class="mb-1 text-lg font-semibold text-gray-900  ml-6">'+el.judul+'</h3>'+
            '<time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">'+el.tanggal+'</time>'+
           ' <p class="text-base font-normal text-gray-500 ">'+el.deskripsi+'</p></li>';
        })
}

export default nodetimeline;