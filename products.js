db.products.insert({
    name: "Microsoft Surface",
    category: "electronics",
    model: "7g5-00001",
    sku: "4654879",
    img: "http://somewebsite.come/someimage.jpg",
    price: 189.90,
    pickup_available: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus hic nobis odio ullam! At doloremque eum molestias perferendis perspiciatis sapiente?",
    release_date: ISODate('2015-09-01'),
    specification: {
        height: "7.35 Inches",
        width: "10.35 Inches",
        wight: "21.92 ounces",
        battery_life: "10 hours",
        display_tpe: "LCD",
        touch_screen: true,
        memory: "2gb",
        processor: "Intel",
    },
    reviews: [
        {
            subject: "Great Tablet!",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus",
            rating: "4.5",
            user: "someuser01",
            date: ISODate("2015-09-02"),
            would_recommend: true
        },
        {
            subject: "Great Tablet!",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus",
            rating: "4.0",
            user: "someuser02",
            date: ISODate("2015-09-03"),
            would_recommend: false
        },
        {
            subject: "Great Tablet!",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus",
            rating: "4.5",
            user: "someuser03",
            date: ISODate("2015-09-02"),
            would_recommend: true
        },
    ],
    protection_services: [
        'damage', 'battery', 'power'
    ]
});