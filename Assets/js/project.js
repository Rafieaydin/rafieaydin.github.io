import project from './data/project.js'

const nodeproject = () => {
    var content = document.querySelector('.content_project');
    console.log(project);
    project.forEach((e,i)=>{
        content.innerHTML +=  '<div class="group relative  aos-init aos-animate " data-aos="fade-up">'+
        '<div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 shadow">'+
          '  <img src="../../Assets/image/'+e.image+'" class="w-full h-full object-center object-cover">'+
       ' </div>'+
        '<h3 class="mt-3 text-sm text-gray-500">'+
            '<a href="'+e.links+'">'+
                '<span class="absolute inset-0"></span>'+
                e.kategori +
            '</a>'+
        '</h3>'+
        '<p class="text-base font-semibold text-gray-900 mb-5">'+e.judul+'</p></div>';
    })
   
}

export default nodeproject;