<template>
  <header class="h-20 w-full flex items-center justify-between bg-white">
  <div class="navbar-left pl-10">
    <p id="logo">
      <img src="./assets/logo/imglogo-b.png" alt="logo" width="300" height="60">
    </p>
  </div>
  <div class="navbar-right flex items-center pr-10">
    <ul class="list-none flex space-x-10">
      <li class="SITEMAP">SITEMAP</li>
      <li class="QUICKACCESS">
        <i class="fas fa-key"></i> QUICK ACCESS
      </li>
      <li class="relative group">
        <a href="#">
          <img src="./assets/header/globe.png" alt="other icon" width="19" height="19">
        </a>
            <div
                class="hidden absolute right-0 mt-0 w-6 bg-white shadow-lg group-hover:block">
                <ul class="divide-y divide-gray-200">
                  <li class="group hover:bg-gray-100 p-1 cursor-pointer">
                        <a href="#" class="flex items-center">
                            <img src="./assets/header/Indonesia.png" alt="Indonesia" class="w-6 h-4 mr-2">
                        </a>
                    </li>
                    <li class="group hover:bg-gray-100 p-1 cursor-pointer">
                        <a href="#" class="flex items-center">
                            <img src="./assets/header/English.png" alt="English" class="w-6 h-4 mr-2">
                        </a>
                    </li>
                </ul>
            </div>
        </li>
      <li class="SEARCH_ICON">
        <a href="#">
          <img src="./assets/header/search.png" alt="search" width="19" height="19">
        </a>
      </li>
    </ul>
  </div>
</header>


  <div>
    <nav style="background-color: #7E0404;">
      <ul class="list-none text-xs flex justify-center items-center space-x-5 p-2 ">
        <div class="items-start self-stretch flex justify-between gap-1">
          <a href="#" class="text-white">BERANDA</a>
        </div>
        <div class="items-start self-stretch flex justify-between gap-1">
          <a href="#" class="text-white">PROFIL</a>
          <img loading="lazy" src="./assets/footer/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class="items-start self-stretch flex justify-between gap-1">
          <a href="#" class="text-white">AKADEMIK</a>
          <img loading="lazy" src="./assets/footer/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class="items-start self-stretch flex justify-between gap-1">
          <a href="#" class="text-white">SUMBER DAYA</a>
          <img loading="lazy" src="./assets/footer/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class="items-start self-stretch flex justify-between gap-1">
          <a href="#" class="text-white">K3</a>
          <img loading="lazy" src="./assets/footer/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class="items-start self-stretch flex justify-between gap-1">
          <a href="#" class="text-white">KEMAHASISWAAN</a>
          <img loading="lazy" src="./assets/footer/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class="items-start self-stretch flex justify-between gap-1">
          <a href="#" class="text-white">RISET DAN INOVASI</a>
          <img loading="lazy" src="./assets/footer/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class="items-start self-stretch flex justify-between gap-1">
          <a href="#" class="text-white">KEMITRAAN</a>
          <img loading="lazy" src="./assets/footer/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class="items-start self-stretch flex justify-between gap-1">
          <a href="#" class="text-white">DPM-PR</a>
          <img loading="lazy" src="./assets/footer/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class="items-start self-stretch flex justify-between gap-1">
          <a href="#" class="text-white">COT</a>
          <img loading="lazy" src="./assets/footer/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class="items-start self-stretch flex justify-between gap-1">
          <a href="#" class="text-white">DHARMA WANITA</a>
          <img loading="lazy" src="./assets/footer/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
      </ul>
    </nav>
  </div>


  

  <div class="container relative w-full h-480 overflow-hidden" @mouseover="stopAutoplay" @mouseout="startAutoplay">
<span class="next absolute top-1/2 transform -translate-y-1/2 px-4 py-3 text-white font-bold text-2xl transition duration-500 rounded-md select-none cursor-pointer z-20 right-10 hover:bg-gray-300 hover:opacity-80 hover:text-gray-700" @click="nextSlide">&#10095;</span>
<span class="prev absolute top-1/2 transform -translate-y-1/2 px-4 py-3 text-white font-bold text-2xl transition duration-500 rounded-md select-none cursor-pointer z-20 left-10 hover:bg-gray-300 hover:opacity-80 hover:text-gray-700" @click="prevSlide">&#10094;</span>

<section class="slides-row flex h-full w-full z-0">
  <div class="slide w-full h-full relative" v-show="currentIndex === 0">
    <img src="./assets/banner/banner1.png" class="w-full h-full object-cover">
    <div class="overlay absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
  </div>
  <div class="slide w-full relative" v-show="currentIndex === 1">
    <img src="./assets/banner/banner10.jpg" class="w-full h-full object-cover">
    <div class="overlay absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
  </div>
  <div class="slide w-full h-full relative" v-show="currentIndex === 2">
    <img src="./assets/banner/banner3.png" class="w-full h-full object-cover">
    <div class="overlay absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
  </div>
  <div class="slide w-full h-full relative" v-show="currentIndex === 3">
    <img src="./assets/banner/banner2.png" class="w-full h-full object-cover">
    <div class="overlay absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
  </div>
</section>

<section class="relative z-50 flex justify-center bottom-12">
  <div v-for="(dot, index) in dots" :key="index" class="h-3 w-3 mx-1 rounded-full border-2 border-white" :style="{ 'background-color': index === currentIndex ? 'red' : '' }" @click="goToSlide(index)"></div>
</section>
</div>

<div class="sambutan-container flex bg-abu mt-12 mb-12 justify-center items-center">
<div class="sambutan-kiri flex justify-center items-center w-2/5 h-4/5 pl-10 pr-20">
  <div class="w-1/5"></div>
  <div class="dekan-kontainer w-4/5 pt-10 pb-10">
    <img src="./assets/sambutan/Group 195.png" class="foto">
  </div>
</div>
<div class="sambutan-kanan flex flex-col justify-center items-start w-3/5 h-full pt-10 pb-10 pr-20 pl-10">
  <div class="sambutan-kanan-top mb-0.5">
    <p id="title" class="text-19 font-bold text-merahdesain">DEKAN FAKULTAS TEKNIK</p>
  </div>
  <div class="sambutan-kanan-mid mb-0.5">
    <p id="nama" class="text-12 text-abunama font-medium">Prof. Dr. Eng. Ir. Muhammad Isran Ramli, S.T., M.T., IPM., ASEAN Eng</p>
  </div>
  <hr class="my-4 w-3/4 border-1 border-abunama mb-10 mt-1.5">
  <div class="sambutan-kanan-bottom text-justify pr-10">
    <span id="quote" class="text-12 text-tulisan text-abusambutan">Kami dari semua civitas akademika Fakultas Teknik dengan semua dukungan komponen perguruan tinggi yang ada akan terus meningkatkan pencapaian menuju terwujudnya visi dan misi yang telah dicanangkan dalam rencana strategis fakultas. Semoga informasi yang diberikan lewat layanan website ini dapat memberikan gambaran situasi dan kondisi Fakultas Teknik kepada semua lapisan masyarakat.</span>
  </div>
</div>
</div>



<div id="app" class="max-w-screen-xl mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear">
  <div class="judul text-black text-2xl font-semibold mb-10">GALERI</div>
  <div class="relative">
    <div class="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
      <div class="slideim aspect-[4/3] h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img class="w-full h-full object-cover" src="./assets/galeri/foto1.jpg" alt="mountain_image">
      </div>
      <div class="slideim aspect-[4/3] h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img class="w-full h-full object-cover" src="./assets/galeri/foto2.jpg" alt="mountain_image">
      </div>
      <div class="slideim aspect-[4/3] h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img class="w-full h-full object-cover" src="./assets/galeri/foto3.jpg" alt="mountain_image">
      </div>
      <div class="slideim aspect-[4/3] h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img class="w-full h-full object-cover" src="./assets/galeri/foto4.jpg" alt="mountain_image">
      </div>
      <div class="slideim aspect-[4/3] h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img class="w-full h-full object-cover" src="./assets/galeri/foto5.jpg" alt="mountain_image">
      </div>
      <div class="slideim aspect-[4/3] h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img class="w-full h-full object-cover" src="./assets/galeri/foto6.jpg" alt="mountain_image">
      </div>
      <div class="slideim aspect-[4/3] h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img class="w-full h-full object-cover" src="./assets/galeri/foto7.jpg" alt="mountain_image">
      </div>
      <div class="slideim aspect-[4/3] h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img class="w-full h-full object-cover" src="./assets/galeri/foto1.jpg" alt="mountain_image">
      </div>
      <div class="slideim aspect-[4/3] h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img class="w-full h-full object-cover" src="./assets/galeri/foto2.jpg" alt="mountain_image">
      </div>
      <div class="slideim aspect-[4/3] h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img class="w-full h-full object-cover" src="./assets/galeri/foto1.jpg" alt="mountain_image">
      </div>

    </div>

    <div class="absolute top-0 -left-4 h-full items-center hidden md:flex">
      <button role="button" class="prev2 px-2 py-2 rounded-full bg-abu text-black group" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>

      </button>
    </div>
    <div class="absolute top-0 -right-4 h-full items-center hidden md:flex">
      <button role="button" class="next2 px-2 py-2 rounded-full bg-abu text-black group" aria-label="next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>
</div>

<div class = "dharmawarnita mt-30 flex mb-30 bg-abu">
<div class="foto w-2/5 h-1/4">
  <div class="foto-dharma w-full h-full">
    <img src="./assets/sambutan/Group 205200.png" class="foto">
  </div>
</div>
<div class="dharma-kanan flex flex-col justify-center w-3/5 pr-20">
<div class="dharma-kanan-top mb-0.5 pl-20 pr-10">
  <p id="title" class="text-19 font-bold text-merahdesain">DHARMA WANITA</p>
</div>
<div class="dharma-kanan-top mb-0.5 pl-20 pr-10">
  <p id="title" class="text-19 font-bold text-merahdesain">PERSATUAN FAKULTAS TEKNIK</p>
</div>
<hr class="my-4 w-3/5 border-1 border-abunama mb-7 mt-1.5 ml-20 mr-10">
<div class="dharma-kanan-bottom text-justify pl-20 pr-10">
  <span id="desc" class="text-12 text-tulisan text-abusambutan">Dharma Wanita Persatuan Fakultas Teknik Unhas yang diketuai oleh Ny. Muralia Isran Ramli, aktif melakukan berbagai macam kegiatan seperti amaliah ramadhan, arisan di kapal, kegiatan BKMT dan DPW Unhas.</span>
</div>
<div class="tombol ml-auto pr-10">
  <button class="bg-merahdesain text-white text-14 py-2 px-4 rounded-none">
    Selengkapnya
  </button>
</div>
</div>

</div> 

  
<div class="Berita ml-8 mr-8 mb-5">
    <div class="judul text-black text-2xl font-semibold">BERITA</div>
    <div class="berita1">
      <div class="berita-content flex pt-4 pb-4 items-center justify-center">
        <a href="#" class="berita-item w-64 h-65 bg-slate-100 mr-10">
          <div class="relative w-64 h-40">
            <img class="w-full h-full" src="./assets/berita/imgb1.jpg" alt="News Image 1" />
            <div class="absolute top-0 left-0 w-full h-full bg-red-600 opacity-30 hover:bg-blue-400"></div>
          </div>
          <div class="judul-berita m-3 relative w-50 h-20 hover:bg-blue-100">
            <p class="text-neutral-700 text-xs font-medium line-clamp-3">
              Fakultas Teknik Sukses Gelar Konferensi Internasional 2023
            </p>
            <div class="absolute bottom-0 left-0">
              <p class="text-neutral-700 text-xs font-normal">
                13 Oktober 2023
              </p>
            </div>
          </div>
        </a>

        <a href="#" class="berita-item w-64 h-65 bg-slate-100 mr-10">
          <div class="relative w-64 h-40">
            <img class="w-full h-full" src="./assets/berita/imgb2.jpg" alt="News Image 2" />
            <div class="absolute top-0 left-0 w-full h-full bg-red-600 opacity-30 hover:bg-blue-400"></div>
          </div>
          <div class="judul-berita m-3 relative w-50 h-20 hover:bg-blue-100">
            <p class="text-neutral-700 text-xs font-medium line-clamp-3">
              Fakultas Teknik Universitas Hasanuddin Gelar Rapat Koordinasi
              Ex-Post Evaluasi Project JICA.
            </p>
            <div class="absolute bottom-0 left-0">
              <p class="text-neutral-700 text-xs font-normal">
                13 Oktober 2023
              </p>
            </div>
          </div>
        </a>

        <a href="#" class="berita-item w-64 h-65 bg-slate-100 mr-10">
          <div class="relative w-64 h-40">
            <img class="w-full h-full" src="./assets/berita/imgb3.jpg" alt="News Image 3" />
            <div class="absolute top-0 left-0 w-full h-full bg-red-600 opacity-30 hover:bg-blue-400"></div>
          </div>
          <div class="judul-berita m-3 relative w-50 h-20 hover:bg-blue-100">
            <p class="text-neutral-700 text-xs font-medium line-clamp-3">
              Kedatangan Profesor Dari Jepang, Departemen Teknik Industri Fakultas Teknik Universitas Hasanuddin Laksanakan International Guest Lecturer
            </p>
            <div class="absolute bottom-0 left-0">
              <p class="text-neutral-700 text-xs font-normal">
                11 Oktober 2023
              </p>
            </div>
          </div>
        </a>

        <a href="#" class="berita-item w-64 h-65 bg-slate-100 mr-12">
          <div class="relative w-64 h-40">
            <img class="w-full h-full" src="./assets/berita/imgb4.jpg" alt="News Image 4" />
            <div class="absolute top-0 left-0 w-full h-full bg-red-600 opacity-30 hover:bg-blue-400"></div>
          </div>
          <div class="judul-berita m-3 relative w-50 h-20 hover:bg-blue-100">
            <p class="text-neutral-700 text-xs font-medium line-clamp-3 ">
              Fakultas Teknik Universitas Hasanuddin Jadi Tuan Rumah Temu Ilmiah Ikatan Peneliti Lingkungan Binaan Indonesia ke - 11
            </p>
            <div class="absolute bottom-0 left-0">
              <p class="text-neutral-700 text-xs font-normal">
                11 Oktober 2023
              </p>
            </div>
          </div>
        </a>
      </div>
      <a href="#" class="flex justify-end">
        <p class="text-black text-xs font-light inline-block w-auto h-auto ml-auto">
          <span class="text-xs font-light hover:text-blue-600">LIHAT BERITA LAIN ></span>
        </p>
      </a>
    </div>
  </div>

  <div class="informasi bg-zinc-100 pt-3 pb-5">
    <div class="judul text-black text-[26px] ml-7 mr-8 mt-4 mb-4 font-semibold">
      INFORMASI
    </div>

    <div class="info-content flex-col items-center justify-center ml-8 mr-8">
      <div class="info-item1 bg-white w-128 h-20 mr-30 mb-5 drop-shadow hover:bg-slate-100">
        <a href="#" class="flex">
          <div class="item1-top">
            <div class="item1-left">
              <div class="item1-date-contaainer bg-red-700 flex flex-col justify-center items-center w-30 h-20">
                <p class="pt-1 pr-3 pl-3 text-2xl font-bold text-white">
                  23
                </p>
                <p class="pb-3 pr-3 pl-2.5 text-xs text-white">SEP 2019</p>
              </div>
            </div>
          </div>
          <div class="item1-right items-center justify-items-center flex">
            <p class=" text-black text-l pt-3 pl-3 pb-3">
              THE 3RD EPI INTERNATIONAL CONFERENCE ON SCIENCE AND ENGINEERING
              2019
            </p>
          </div>
          <div class="panah flex items-center justify-center mr-10 ml-auto relative">
            <img src="./assets/informasi/panah.png" class="w-15 h-12 inset-0" />
          </div>
        </a>
      </div>

      <div class="info-item2 bg-white w-128 h-20 mr-30 mb-5 drop-shadow hover:bg-slate-100">
        <a href="#" class="flex">
          <div class="item2">
            <div class="item2-left bg-black">
              <div class="item2-date-container bg-red-700 flex flex-col justify-center items-center w-30 h-20">
                <p class="pt-1 pr-3 pl-3 text-2xl font-bold text-white">
                  06
                </p>
                <p class="pb-3 pr-2 pl-2.5 text-xs text-white">AGU 2019</p>
              </div>
            </div>
          </div>
          <div class="item2-right items-center justify-items-center flex">
            <p class=" text-black text-l pt-3 pl-3 pb-3">
              WORKSHOP & SIMPOSIUM NASIONAL GEOMEKANIKA 5 2019
            </p>
          </div>
          <div class="panah flex items-center justify-center mr-10 ml-auto relative">
            <img src="./assets/informasi/panah.png" class="w-15 h-12 inset-0" />
          </div>
        </a>
      </div>

      <div class="info-item3 bg-white w-128 h-20 mr-30 mb-5 drop-shadow hover:bg-slate-100">
        <a href="#" class="flex">
          <div class="item3">
            <div class="item3-left">
              <div class="item1-date-container bg-red-700 flex flex-col justify-center items-center w-30 h-20">
                <p class="pt-1 pr-3 pl-3 text-2xl font-bold text-white">
                  09
                </p>
                <p class="pb-3 pr-3 pl-3 text-xs text-white">JUL 2019</p>
              </div>
            </div>
          </div>
          <div class="item3-right items-center justify-items-center flex">
            <p class=" text-black text-l pt-3 pl-3 pb-3">
              Pengembangan Karakter Mahasiswa Baru 2019 Fakultas Teknik Unhas
            </p>
          </div>
          <div class="panah flex items-center justify-center mr-10 ml-auto relative">
            <img src="./assets/informasi/panah.png" class="w-15 h-12 inset-0" />
          </div>
        </a>
      </div>

      <div class="info-item4 bg-white w-128 h-20 mr-30 mb-5 drop-shadow hover:bg-slate-100">
        <a href="#" class="flex">
          <div class="item4">
            <div class="item4-left">
              <div class="item1-date-container bg-red-700 flex flex-col justify-center items-center w-30 h-20">
                <p class="pt-1 pr-3 pl-3 text-2xl font-bold text-white">
                  25
                </p>
                <p class="pb-3 pr-3 pl-2.5 text-xs text-white">JUN 2019</p>
              </div>
            </div>
          </div>
          <div class="item4-right items-center justify-items-center flex">
            <p class=" text-black text-l pt-3 pl-3 pb-3">
              International Guest Lecture on Journal Article
            </p>
          </div>
          <div class="panah flex items-center justify-center mr-10 ml-auto relative">
            <img src="./assets/informasi/panah.png" class="w-15 h-12 inset-0" />
          </div>
        </a>
      </div>

      <a href="#" class="flex justify-end">
        <p class="text-black text-xs font-light inline-block w-auto h-auto ml-auto">
          <span class="text-xs font-light hover:text-blue-600">LIHAT INFORMASI LAIN ></span>
        </p>
      </a>
    </div>
  </div>

  <div class="tour mt-5 ml-8 mr-8 mb-10">
    <div class="judul text-black text-[26px] mb-4 font-semibold">TOUR 360°</div>
    <section class="tourft">
      <div class="container">
        <div class="row">
          <!-- <div class="col-xl-12" style="text-align:center;">
					<div class="section-title mb-md-0">
						<iframe style="height: 350px; width: 700px;" src="https://www.youtube.com/embed/YZE7Kn84nV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div> -->
          <div class="col-xl-12">
            <div class="section-title mb-md-0">
              <iframe loading="lazy" style="height: 400px; width: 100%"
                src="https://unhas.ac.id/petakampus/virtualtour/index.php?scene=outdoortheater#outdoortheater"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  <footer class="flex items-center justify-between bg-merahgelap relative">
  <img class="absolute inset-0 w-1/2 h-1/2 mx-auto my-auto bg-cover bg-center" src=".\assets\footer/footer-bg.png" alt="Background Image" />
  <div class="footer-left flex flex-col justify-between pl-20 pt-20 pb-20">
    <div class="footer-left-top">
      <div class="logo-unhas">
        <img src="./assets/logo/Group 168.png" alt="logo" width="386" height="72">
      </div>
      <p class="text-white mt-10 font-bold mb-2">Alamat</p>
      <div class="alamat flex ml-0 mt-0 mb-10">
        <div class="alamat-icon">
          <img src="./assets/logo/icons8-location-50.png" class="mr-3" width="20" height="20">
        </div>
        <div class="alamat-text">
          <a href="https://www.google.com/maps?q=Jl.+Poros+Malino+Km.+6+Bontomarannu+92171+Gowa,+South+Sulawesi+Indonesia" target="_blank" rel="noopener noreferrer" class="text-white">
              Jl. Poros Malino Km. 6 Bontomarannu 92171 Gowa, South Sulawesi Indonesia
          </a>
        </div>

      </div>
      <p class="text-white mt-10 font-bold mb-2">Kontak</p>
      <div class="kontak flex flex-col">
      <div class="kontak-top flex">
        <div class="kontak-top-left">
            <a href="https://api.whatsapp.com/send?phone=6285299999958" target="_blank" rel="noopener noreferrer">
                <img src="./assets/logo/icons8-phone-30.png" alt="logo" class="mr-3" width="20" height="20">
            </a>
        </div>
        <div class="kontak-top-right">
            <a href="mailto:teknik@unhas.ac.id" class="text-white">
                +62 852-9999-9958
            </a>
        </div>
      </div>
      <div class="kontak-bottom flex">
        <div class="kontak-bottom-left">
            <a href="mailto:teknik@unhas.ac.id" class="text-white">
                <img src="./assets/logo/icons8-mail-24.png" alt="logo" class="mr-3" width="20" height="20">
            </a>
        </div>
        <div class="kontak-bottom-right">
            <a href="mailto:teknik@unhas.ac.id" class="text-white">
                teknik@unhas.ac.id
            </a>
        </div>
      </div>
    </div>

    </div>
    <p class="text-white mt-10 font-bold mb-2">Sosial Media</p>
    <div class="footer-left-bottom flex">
      <a href="https://m.facebook.com/profile.php?id=156018367789017" target="_blank" rel="noopener noreferrer" class="mr-2">
        <img src="./assets/logo/icons8-facebook-50.png" alt="logo" width="20" height="20">
      </a>
      <a href="https://www.instagram.com/teknik.unhas/" target="_blank" rel="noopener noreferrer" class="mr-2">
        <img src="./assets/logo/icons8-instagram-24.png" alt="logo" width="20" height="20">
      </a>
      <a href="https://www.youtube.com/channel/UC82mgDdDj_TC13JEMN5cJfQ" target="_blank" rel="noopener noreferrer">
        <img src="./assets/logo/icons8-youtube-50.png" alt="logo" width="20" height="20">
      </a>
    </div>

  </div>
  <div class="footer-right pr-40 flex flex-col justify-center"> <!-- Gunakan flex dan justify-center untuk footer-right -->
    <p class="text-white font-bold mb-2">Visitor</p>
    <div class="footer-right-top">
      <a href="https://info.flagcounter.com/vhwc">
        <img alt="flag-counter" src="https://s11.flagcounter.com/count2/vhwc/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/">
      </a>
    </div>
    <p class="text-white mt-10 font-bold mb-2">Didukung Oleh</p>
    <div class="footer-right-bottom flex" >
      <img src="./assets/logo/Group 182.jpg" alt="logo" class="mr-2" width="70" height="70">
      <img src="./assets/logo/Group 183.jpg" alt="logo" class="mr-2" width="70" height="70">
    </div>
  </div>
</footer>
  
</template>

<script>
export default {
data() {
  return {
    currentIndex: 0,
    autoplayInterval: null,
    slideCount: 4, // Jumlah slide
  };
},
computed: {
  dots() {
    return new Array(this.slideCount).fill(null);
  },
},
methods: {
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slideCount;
  },
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
  },
  goToSlide(index) {
    this.currentIndex = index;
  },
  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  },
  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  },
},
created() {
  this.startAutoplay();
},

  mounted() {
    const slidesContainer = document.querySelector(".slides-container");
    const slideWidth = slidesContainer.querySelector(".slideim").clientWidth;
    const prevButton = document.querySelector(".prev2");
    const nextButton = document.querySelector(".next2");

    let currentSlideIndex = 0;
    const slides = slidesContainer.querySelectorAll(".slideim");

    const changeSlide = (nomor) => {
      slidesContainer.scrollLeft = nomor * slideWidth;
      currentSlideIndex = nomor;
    };

    nextButton.addEventListener("click", () => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      changeSlide(currentSlideIndex);

      // Check if the current slide is the third from the end
      if (currentSlideIndex === slides.length - 2) {
        // If it is, set the current slide to the first slide
        currentSlideIndex = 0;
        changeSlide(currentSlideIndex);
      }
    });

    prevButton.addEventListener("click", () => {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      changeSlide(currentSlideIndex);

      if (currentSlideIndex === slides.length - 2) {
        // If it is, set the current slide to the first slide
        currentSlideIndex= currentSlideIndex-2;
        changeSlide(currentSlideIndex);
      }
    });

    // Autoplay
    let autoplayInter;
    const startAuto = () => {
      autoplayInter = setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        changeSlide(currentSlideIndex);

        // Check if the current slide is the third from the end
        if (currentSlideIndex === slides.length - 2) {
          // If it is, set the current slide to the first slide
          currentSlideIndex = 0;
          changeSlide(currentSlideIndex);
        }
      }, 3000);
    };

    startAuto();

    // Pause autoplay when clicking prev or next button
    nextButton.addEventListener("click", () => {
      clearInterval(autoplayInter);
      startAuto();
    });

    prevButton.addEventListener("click", () => {
      clearInterval(autoplayInter);
      startAuto();
    });
  },
};

</script>





<style>
@import url("https://fonts.googleapis.com/css2?family=Inter"); html, *{
  font-family: "Inter", sans-serif;
}


</style>



