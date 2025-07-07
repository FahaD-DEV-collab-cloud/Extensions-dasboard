
let ex_store_container = document.getElementById('ex_store_container')

document.addEventListener('DOMContentLoaded', () => {
    var ex_data = JSON.parse(localStorage.getItem('store_data')) || [];
    var get_store_data = [...ex_data]
    console.log(get_store_data)
    show_store_data(get_store_data);
    showmainstorecardsfunction();


})

const show_store_data = (getstoredata) => {
   
        if (getstoredata.length > 0) {
             ex_store_container.innerHTML = getstoredata.map(set => {
            return `
    
  
 <div class="px-2 py-6 bg-gray-800 sm:w-88 h-56  sm:h-52 w-[320px] rounded-xl  flex flex-col mt-14 gap-10">
<div class="flex items-start gap-5">
  <div>
      <img class="h-10 w-20" src="${set.img}" alt="">
  </div>
  <div class="flex flex-col ">
    <h2 class="text-lg text-white font-semibold">${set.heading}</h2>
    <p class="text-sm text-gray-400">handy ipsum dolor sit amet consectetur adipisicing elit. At qui minima alias in iusto aut</p>
  </div>
</div>

  <div class="flex justify-center ">
<div>
    <button data-id="${set.id}" class="text-base seprate_add_btn bg-gray-500 cursor-pointer text-white          py-1 px-8 hover:bg-orange-500 transition duration-300 font-semibold font-sans rounded-2xl">Add</button>
</div>
  </div>
</div>
    
    `
       }) } 
       else {
            ex_store_container.innerHTML =  `
         <p class="text-red-500 text-2xl mt-20 font-bold text-center"> Extations trash empty ! </p>
         `
        }
        
        only_mnst_crt_btns(getstoredata)
        }
    

    










// Main add buttons

const only_mnst_crt_btns = (getstoredata) => {
    let seprate_add_btn = document.querySelectorAll('.seprate_add_btn');

    seprate_add_btn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            setTimeout(() => {
                location.reload()
            }, 1000);
            let id = Number(e.target.getAttribute('data-id'));
            let item = getstoredata.findIndex(item2 => item2.id === id);
            if (item !== -1) {

                let cut_cart = getstoredata.splice(item, 1)[0];

                localStorage.setItem('store_data', JSON.stringify(getstoredata));

                let main_storage = JSON.parse(localStorage.getItem('main_cards')) || []
                console.log(main_storage)
                main_storage.push(cut_cart);
                localStorage.setItem('main_cards', JSON.stringify(main_storage));

                show_store_data();
                getstoredata = [...ex_data];

            }


        })
    })

}