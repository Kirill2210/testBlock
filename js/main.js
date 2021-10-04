const swiper = new Swiper('.swiper-product', {
  direction: 'horizontal',
  loop: false,
  slidesPerGroup: 1,
  slidesPerView: 1,

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const productReduce = document.querySelector('.product__reduce')
const productAdd = document.querySelector('.product__add')
const productQuantity = document.querySelector('.product__quantity')
const productPrice = document.querySelector('.product__price')
let productQuantityDef = 1
let productPriceDef = 4990

productReduce.addEventListener('click', function() {
  if (productQuantityDef === 1) {
    return
  }
  --productQuantityDef
  productQuantity.innerHTML = productQuantityDef
  productPrice.innerHTML = productPriceDef * productQuantityDef + ' Р'
})

productAdd.addEventListener('click', function() {
  ++productQuantityDef
  productQuantity.innerHTML = productQuantityDef
  productPrice.innerHTML = productPriceDef * productQuantityDef + ' Р'
})

const colourBtn = document.querySelectorAll('.colour__btn')

colourBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    clearActiveClassColour()
    btn.classList.add('active')
  })
})

function clearActiveClassColour() {
  colourBtn.forEach((btn) => {
    btn.classList.remove('active')
  })
}

const sizeBtn = document.querySelectorAll('.size__btn')

for (const btn of sizeBtn) {
  btn.addEventListener('click', () => {
    clearActiveClassSize()
    btn.classList.add('active')
  })
}

function clearActiveClassSize() {
  for (const btn of sizeBtn) {
    btn.classList.remove('active')
  }
}