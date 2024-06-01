import axios from "axios"
import Swiper from "swiper";
import {Navigation, Keyboard, Mousewheel} from 'swiper/modules';
import 'swiper/css'
const reviewsList = document.querySelector(".reviews-list")


async function fetchReviews() {
    const url = "https://portfolio-js.b.goit.study/api/reviews"
    try {
        const response = await axios.get(url)
        console.log(response.data)
        const reviewData = response.data
        return reviewData
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error; 
    }
}

fetchReviews()
async function renderReviews() {
    const reviewsData = await fetchReviews();
    const markup = reviewsData.map((reviewDatum) => `<li class="reviews-list-item swiper-slide">
        <p class="reviews-text">${reviewDatum.review}</p>
        <div class="author-information">
            <img class="author-image" src="${reviewDatum.avatar_url}" alt="review from ${reviewDatum.author}" alt = "review from ${reviewDatum.author}"
            width = "40
            height = "40"
            loading = "lazy">
            <p class="name-text">${reviewDatum.author}</p> 
        </div>             
        </li>`).join("")
    console.log(markup)
reviewsList.insertAdjacentHTML('beforeend', markup)  
}
renderReviews()
const swiper = new Swiper('.reviews .swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    mousewheel: {
    enabled: true,
    invert: true,
    },
    keyboard: {
    enabled: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
     breakpoints: {
    320: {
             slidesPerView: 1,
        slidesPerGroup: 1,
    },
    768: {
        slidesPerView: 1,
      
    },
    1280: {
        slidesPerView: 2,
        spaceBetween: 32,
    }
    },
    
}
);