const bdy = document.getElementById("bdy");

const arrEy = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Shri_Ratan_Naval_Tata.jpg/960px-Shri_Ratan_Naval_Tata.jpg",
    name: "Piyush Goyal",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Shri_Ratan_Naval_Tata.jpg/960px-Shri_Ratan_Naval_Tata.jpg",
    desc: "Ratan Naval Tata was an Indian industrialist and philanthropist. He served as the chairman of Tata Group and Tata Sons from 1991 to 2012 and he held the position of interim chairman from October 2016 to February 2017.",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mIBTZf0VwfYIX3O7PLZqAV5IXiq35yUFow&s",
    name: "samarthingnational.co.in",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQA9Szs4h8eI0DdqQNa6TVq3wMiV7LTjg8zg&s",
    desc: "Jio Smart Phone : 300MP Camera with 7500mAh battery at ₹9,500",
  },
  {
    logo: "https://i.pinimg.com/736x/55/9d/10/559d1007bef256398d67810cb0f338cf.jpg",
    name: "Cristiano Ronaldo",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxIkI7tSXjIA9lfx-H-E69UQdhQsRjk6Ceg&s",
    desc: "Cristiano Ronaldo Dos Santos Aveiro - History and honours | Official website Real Madrid C.F.",
  },
];

let content = "";
arrEy.forEach((value) => {
  content += ` <div class="mb-6">
        <div class="nav flex items-center justify-between">
          <div class="flex items-center">
            <img src="${value.logo}" class="h-8 rounded-full mr-3" />
            <h3 class="text-sm">${value.name}</h3>
          </div>

          <div class="flex items-center">
            <button class="border p-1 text-xs rounded-xl cursor-pointer">
              Follow
            </button>
            <img src="dot.png" class="h-5 ml-2" />
          </div>
          <!-- img -->
        </div>
        <img src="${value.img}" class="mt-3" />
        <div>
          <p>
           ${value.desc}
          </p>
          <div class="flex items-center justify-between mt-2">
            <h1>2d</h1>
            <div class="flex gap-5">
              <img src="like.png" class="h-5" />
              <img src="share.png" alt="" class="h-5 opacity-50" />
            </div>
          </div>
        </div>
      </div>`;
});

bdy.innerHTML = content;
