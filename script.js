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


let currentPhoto = 0

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', pictures[currentPhoto].photo);
    $('#photo-title').text(pictures[currentPhoto].title);
    $('#photo-description').text(pictures[currentPhoto].description)
}
 

$('#right').click(() => {
   if (currentPhoto<5) {
    currentPhoto++ 
    loadPhoto(currentPhoto)} else {
        currentPhoto = 0 
        loadPhoto(currentPhoto)
    }
})
 
 $('#left').click(() => {
   if (currentPhoto>0) {
       currentPhoto-- 
       loadPhoto(currentPhoto)} else {
        currentPhoto = 5
        loadPhoto(currentPhoto)
    }
   })
