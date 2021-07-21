//Add Gallery
const myWork = document.querySelector('.grid');
console.log(myWork);
for(let i = 1; i <= 6; i++) {
    const item = document.createElement('DIV');
    item.classList.add('item');
    item.dataset.category = `${i}`;
    const gallery = document.createElement('DIV');
    gallery.classList.add('item-content');
    gallery.classList.add(`item${i}`);
    const a = document.createElement('A');
    a.classList.add(`link${i}`);
    const img = document.createElement('IMG');
    img.src = `img/${i}.png`;
    if(item.dataset.category === '1' || item.dataset.category === '3' || item.dataset.category === '5' || item.dataset.category === '6') {
        item.dataset.category = 'Websites';
    } else if(item.dataset.category === '2') {
        item.dataset.category = 'Apps';
    } else {
        item.dataset.category = 'Games';
    }
    img.alt = `${i}`;
    img.classList.add(`image${i}`);
    //img.style.width = '100%';
    //img.style.height = '95%';
    a.append(img);
    gallery.append(a);
    item.append(gallery);
    myWork.append(item);
}
//Using Muuri
const grid = new Muuri('.grid', {
    layout: {
        rounding: true,
      },
});
//Transitions Muuri
//Add Listeners for filter categories
window.addEventListener('load', () => {
    grid.refreshItems().layout();
    const id = document.getElementById('grid');
    id.classList.add('loaded-images');  
    const links = document.querySelectorAll('#categories a'); 
    links.forEach(element => {
        console.log(element);
        element.addEventListener('click', e => {
            e.preventDefault();
            const target = e.target;
            console.log(target);
            links.forEach(link => link.classList.remove('active'));
            target.classList.add('active');
            const category = target.innerHTML;
            console.log(category);
            grid.filter(`[data-category = "${category}"]`);
            if(category === 'All') {
                grid.filter('[data-category]');
            }
        })
    }); 
    //Filter with Search Bar
    const searching = document.getElementById('bar');
    searching.addEventListener('input', e => {
        const option = e.target.value; 
        console.log(option);
        grid.filter(item => item.getElement().dataset.category.includes(option));
    });  
});
//Autocomplete Search Bar
const links = document.querySelectorAll('#categories a');
const maps = [...links];
const list = maps.map(e => e.textContent);
console.log(list);
$(function() {
    list;
    $('#bar').autocomplete({
        source: list
    })
});
//href to my work
const link1 = document.querySelector('.link1');
link1.target = '_blank';
link1.href = 'https://estadosycapitalesdevenezuelamanuelmoralesangstromico.netlify.app';
const link2 = document.querySelector('.link2');
link2.target = '_blank';
link2.href = 'https://cambiafondos.netlify.app';
const link3 = document.querySelector('.link3');
link3.target = '_blank';
link3.href = 'https://xenodochial-agnesi-7dc5d6.netlify.app/';
const link4 = document.querySelector('.link4');
link4.target = '_blank';
link4.href = 'https://rompebloques-manuel.netlify.app';
const link5 = document.querySelector('.link5');
link5.target = '_blank';
link5.href = 'https://blogelectronica.netlify.app/';
const link6 = document.querySelector('.link6');
link6.target = '_blank';
link6.href = 'https://firstprojectmanuelfreelance.netlify.app';