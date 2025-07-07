
let data_array = [

    {
        id: 1,
        img: "assets/ai online grammar checker.png",
        heading: "AI online grammar checker",
        complete: false

    },
    {
        id: 2,
        img: "assets/chatgpt for gmai.png",
        heading: "ChatGPT for Gmai",
        complete: false

    },
    {
        id: 3,
        img: "assets/deepl translate and write with ai.png",
        heading: "DeepL translate and write with AI",
        complete: false

    },
    {
        id: 4,
        img: "assets/email signature generator.png",
        heading: "Email Signature Generator",
        complete: false

    },
    {
        id: 5,
        img: "assets/email tracker by mailtrack®.png",
        heading: "Email Tracker by Mailtrack®",
        complete: false
    },
    {
        id: 6,
        img: "assets/fathom ai note taker.png",
        heading: "Fathom AI Note Taker",
        complete: false
    },
    {
        id: 7,
        img: "assets/Insert and Send html.png",
        heading: "Insert and Send HTML",
        complete: false
    },
    {
        id: 8,
        img: "assets/Intouchapp Phone contacts.png",
        heading: "InTouchApp Phone Contacts",
        complete: false
    },
    {
        id: 9,
        img: "assets/json formatter.png",
        heading: "JSON Formatter",
        complete: false
    },


]



let all_btn = document.getElementById('all_btn');
let active_btn = document.getElementById('active_btn');
let inactive_btn = document.getElementById('inactive_btn');
let data_show_container = document.getElementById('data_show_container');
let filter_btns = document.querySelectorAll('.filter_btns')
let copyarr = [...data_array];

const showdata = () => {
    data_show_container.innerHTML = "";

    copyarr.forEach(() => {
        data_show_container.innerHTML = copyarr.map((set) => {
            return `
 <div class="px-2 py-6 bg-gray-800 sm:w-88 h-56 sm:h-52 w-full rounded-xl  flex flex-col mt-14 gap-12">
<div class="flex items-start gap-5">
  <div>
      <img class="h-10 w-20" src="${set.img}" alt="">
  </div>
  <div class="flex flex-col ">
    <h2 class="text-lg text-white font-semibold">${set.heading}</h2>
    <p class="text-sm text-gray-400">handy ipsum dolor sit amet consectetur adipisicing elit. At qui minima alias in iusto aut</p>
  </div>
</div>

  <div class="flex justify-between ">
<div>
    <button data-id="${set.id}" class="text-base remove_btns bg-gray-500 hover:border-2 text-white         border-[#03022b] py-1 px-3 hover:bg-[#03022b] transition duration-300 font-semibold font-sans rounded-2xl">Remove</button>
</div>
<div class="" >
    <!-- From Uiverse.io by Javierrocadev --> 
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" ${set.complete === true ? 'checked' : ""} data-id=${set.id} value="" class="sr-only    toggle_btn_filter peer">
  <div class="group peer ring-0 bg-gray-500  rounded-full outline-none duration-300 after:duration-300 w-16 font-semibold h-7 shadow-md peer-checked:bg-orange-400  peer-focus:outline-none          after:content-['off']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-7 after:w-8    after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-checked:after:content-['on'] peer-hover:after:scale-95">
  </div>
</label>
</div>
  </div>
</div>
    
    `
        }).join("")

    })
    togglefunction()
    pust_ex_store_fun()




}




document.addEventListener('DOMContentLoaded', () => {
    showdata()
})
// all btn
all_btn.addEventListener('click', (e) => {
    filter_btns.forEach(e => {
        e.classList.remove('bg-orange-500');
    })

    all_btn.classList.add('bg-orange-500');
    all_btn.classList.add('transition', 'duration-300');
    // filter the data
    copyarr = [...data_array]
    showdata()

})


// inactive  btn
inactive_btn.addEventListener('click', () => {
    filter_btns.forEach(e => {
        e.classList.remove('bg-orange-500');
    })

    inactive_btn.classList.add('bg-orange-500');
    inactive_btn.classList.add('transition', 'duration-300');
    copyarr = data_array.filter(ele => {
        return ele.complete === false
    })
    showdata()
})




// active btn
active_btn.addEventListener('click', (e) => {
    e.preventDefault()
    filter_btns.forEach(e => {
        e.classList.remove('bg-orange-500');
    })

    active_btn.classList.add('bg-orange-500');
    active_btn.classList.add('transition', 'duration-300');
    // filter the data
    copyarr = data_array.filter(data => {
        return data.complete === true
    })
    showdata()

})



const togglefunction = () => {
    let toggle_btn_filter = document.querySelectorAll('.toggle_btn_filter');
    toggle_btn_filter.forEach(ele => {
        ele.addEventListener('click', (e) => {
            e.preventDefault()
            let id = Number(e.target.getAttribute("data-id"));
            let item = data_array.find(item2 => item2.id === id)
            if (item.complete === false) {
                item.complete = true
            }
            else if (item.complete === true) {
                item.complete = false
            }
            else {
                item.complete = false
            }

            showdata()



        })
    })

}
// Push the card in ex store







const pust_ex_store_fun = () => {
    let remove_btns = document.querySelectorAll('.remove_btns');
    remove_btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let id = Number(e.target.getAttribute('data-id'));
            let item = data_array.findIndex(item2 => item2.id === id);

            if (item !== -1) {
                let move_data = data_array.splice(item, 1)[0];

                localStorage.setItem('main_cards', JSON.stringify(data_array));

                let storedata = JSON.parse(localStorage.getItem('store_data')) || []
                storedata.push(move_data);
                localStorage.setItem('store_data', JSON.stringify(storedata));

                copyarr = [...data_array]
                showdata()
            }


        })
    })
}
document.addEventListener('DOMContentLoaded', () => {

    let mainstore = JSON.parse(localStorage.getItem('main_cards')) || [];
    if (!mainstore || mainstore.length === 0) {
     
        localStorage.setItem('main_cards', JSON.stringify(data_array));
        mainstore = [...data_array];
    }

      data_array = [...mainstore];
    copyarr = [...mainstore]
    showdata()

})

