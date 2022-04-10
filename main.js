const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            activeClass: true,
            alt: 'Green Socks',
            details: ['80% cotton', '20% polyester', '30% rayon'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', qty: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', qty: 8 }
            ],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index

        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].qty
        }
    }
})