const comments = document.querySelector('#comments');
const commentsItem = Array.from(comments.children);
const btnNext = document.querySelector('.next_comm');
const btnPrev = document.querySelector('.prev_comm');
const userName = document.querySelector('.comm_name');
const userNameItem = Array.from(userName.children);
const profession = document.querySelector('.comm_proff');
const professionItems = Array.from(profession.children);
const imgSlider = document.querySelector('.img-slider');
const imgSliderItems = Array.from(imgSlider.children)

commentsItem.forEach(function(item, index) {

    if (index !== 0) item.classList.add('hidden');

    // Add index
    item.dataset.index = index;

    // Add dataAtribute "active"
    commentsItem[0].setAttribute('data-active', '');

    // Click on the comment (переключение по нажатию на комментарий)
    // item.addEventListener('click', function () {
    //     showNextComm('next');
    //     showNextName('next');
    //     showNextProffesion('next');
    // })
});

userNameItem.forEach(function(nameItems, indexUserName) {
    if (indexUserName !== 0) {
        nameItems.classList.add('hidden');
    }

    nameItems.dataset.indexUserName = indexUserName;

    userNameItem[0].setAttribute('name-active', '');
    
    
});

professionItems.forEach(function(professionItem, professionIndex) {
    if (professionIndex !== 0) professionItem.classList.add('hidden');
    
    professionItem.dataset.professionIndex = professionIndex;
    professionItems[0].setAttribute('profession-active', '');
})

imgSliderItems.forEach(function(imgItems, imgIndex) {
    if (imgIndex !== 0) imgItems.classList.add('comments_img_1');

    imgItems.dataset.imgIndex = imgIndex;
    imgSliderItems[0].setAttribute('img-active', '');
});

btnNext.onclick = function () {
    showNextComm('next');
    showNextName('next');
    showNextProffesion('next');
    showNextImg('next');
};

btnPrev.onclick = function () {
    showNextComm('prev');
    showNextName('prev');
    showNextProffesion('prev');
    showNextImg('prev');
};

function showNextComm(diraction) {

    const currentComm = comments.querySelector('[data-active]');
    const currentCommIndex = +currentComm.dataset.index;
    currentComm.classList.add('hidden');
    currentComm.removeAttribute('data-active');

    let nextCommIndex
    if (diraction === 'next') {
        nextCommIndex =  currentCommIndex + 1 === commentsItem.length ? 0 : currentCommIndex + 1;
    } else if (diraction === 'prev') {
        nextCommIndex = currentCommIndex === 0 ? commentsItem.length - 1 : currentCommIndex - 1;
    }
    const nextComm = comments.querySelector(`[data-index="${nextCommIndex}"]`);
    nextComm.classList.remove('hidden');
    nextComm.setAttribute('data-active', '');
};

function showNextName(diractionName) {

    const currentName = userName.querySelector('[name-active]');
    const currentNameIndex = +currentName.dataset.indexUserName;
    currentName.classList.add('hidden');
    currentName.removeAttribute('name-active');

    let nextNameIndex
    if (diractionName === 'next') {
        nextNameIndex =  currentNameIndex + 1 === userNameItem.length ? 0 : currentNameIndex + 1;
    } else if (diractionName === 'prev') {
        nextNameIndex = currentNameIndex === 0 ? userNameItem.length - 1 : currentNameIndex - 1;
    }
    const nextName = userName.querySelector(`[data-index-user-name="${nextNameIndex}"]`);
    nextName.classList.remove('hidden');
    nextName.setAttribute('name-active', '');
}

function showNextProffesion(diractionProffesion) {
    const currentProffesoin = profession.querySelector('[profession-active]');
    const currentProffesoinIndex = +currentProffesoin.dataset.professionIndex;
    currentProffesoin.classList.add('hidden');
    currentProffesoin.removeAttribute('profession-active');

    let nextProffesionIndex
    if (diractionProffesion === 'next') {
        nextProffesionIndex = currentProffesoinIndex + 1 === professionItems.length ? 0 : currentProffesoinIndex + 1;
    } else if (diractionProffesion === 'prev') {
        nextProffesionIndex = currentProffesoinIndex === 0 ? professionItems.length - 1 : currentProffesoinIndex - 1;
    }
    const nextProffesion = profession.querySelector(`[data-profession-index="${nextProffesionIndex}"]`);
    nextProffesion.classList.remove('hidden');
    nextProffesion.setAttribute('profession-active', '');
}

function showNextImg (diractionImg) {
    const currentImg = imgSlider.querySelector('[img-active]');
    const currentImgIndex = +currentImg.dataset.imgIndex;
    currentImg.classList.add('comments_img_1');
    currentImg.removeAttribute('img-active');

    let nextImgIndex
    if (diractionImg === 'next') {
        nextImgIndex = currentImgIndex + 1 === imgSliderItems.length ? 0 : currentImgIndex + 1;
    } else if (diractionImg === 'prev') {
        nextImgIndex = currentImgIndex === 0 ? imgSliderItems.length - 1 : currentImgIndex - 1;
    }
    const nextImg = imgSlider.querySelector(`[data-img-index="${nextImgIndex}"]`);
    nextImg.classList.remove('comments_img_1');
    nextImg.setAttribute('img-active', '');
}