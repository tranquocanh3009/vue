var app = new Vue({
    el: '#app',
    data: {
      image: './assets/images/1.png',
      name: 'Sneaker 001',
      inStock: true,
      details: [
        'Weight: 291g approx. (Men\'s size 9)', 
        'Offset: 9mm (Forefoot: 24mm, Heel: 33mm)',
        'Colour Shown: Black/Laser Orange/White/University Blue',
        'Style: CD4371-007',
        ],
      colors: ['red-blue', 'green-purple'],
      cartAmount: 1,
      price: 1900,
      totalPrice: 1900,
    },
    methods: {
      changColor: function(color) {
        this.image = (color === 'red-blue') ? './assets/images/1.png' : './assets/images/1-greenpurple.png'
      },
      amountChange: function(type) {
        this.cartAmount = (type) ? this.cartAmount + 1 : 
          (this.cartAmount === 1) ? 1 : this.cartAmount - 1;
        this.totalPrice = this.price * this.cartAmount;
      },
    }
});