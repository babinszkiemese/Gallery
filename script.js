let hauses = {
    photo: '\images/DSC_0062.jpg',
    title: 'Hauses',
    description: 'Colorful and beautiful hauses in Passau',
};
let twilight = {
    photo: '\images/DSC_0105.jpg',
    title: 'Twilight',
    description: 'Twiglight at the Inn',
};
let bridge = {
    photo: '\images/DSC_0155.jpg',
    title: 'Bridge',
    description: 'Bridge in Passau',
};
let love = {
    photo: '\images/DSC_0817.jpg',
    title: 'Love',
    description: 'My favorite picure from my trip in Passau',
};
let city = {
    photo: '\images/DSC_0886.jpg',
    title: 'City',
    description: 'View from the old city of Passau',
};
let pictures = [hauses, twilight, bridge, love, city]

let thumbnailsphoto = 0

let currentPhoto = 0

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', pictures[currentPhoto].photo);
    $('#photo-title').text(pictures[currentPhoto].title);
    $('#photo-description').text(pictures[currentPhoto].description)
}
 
loadPhoto(currentPhoto)

$('#right').click(() => {
   if (currentPhoto<=4) {
    currentPhoto++ 
    loadPhoto(currentPhoto)} else {
        currentPhoto = 0 
        loadPhoto(currentPhoto)
    }
})
 
 $('#left').click(() => {
   if (currentPhoto>=0) {
       currentPhoto-- 
       loadPhoto(currentPhoto)} else {
        currentPhoto = 4
        loadPhoto(currentPhoto)
    }
   })

   pictures.forEach((picture) => {
    $('.thumbnails').append(`<div class="nail"></div>`);
    $('.nail').append(`<img class="mini" src="${picture.photo}" alt="" width= "95%" height= "95%">`);
})