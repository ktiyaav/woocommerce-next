export const data = [
    {
        component: 'ShopCategory',
        data: '',
        type: 'rounded',
        width: 192,
        height: 192
    },
    {
        component: 'BannerSlider',
        banners: [
            {
              name:'Banner',
              image: {
                src: '/assets/images/slider/1.jpg'
              }
            },
            {
              name:'Banner',
              image: {
                src: '/assets/images/slider/2.jpg'
              }
            },
        ],
        width: 500,
        height: 340,
        boxed: true
    },
    {
        component: 'Banner',
        layout: 'three',
        items: [
            {
              name:'Banner',
              image: {
                src: '/assets/images/features/1.png'
              }
            },
            {
              name:'Banner',
              image: {
                src: '/assets/images/features/features2.png'
              }
            },
            {
              name:'Banner',
              image: {
                src: '/assets/images/features/features3.png'
              }
            },
            {
              name:'Banner',
              image: {
                src: '/assets/images/features/features4.png'
              }
            },
            {
              name:'Banner',
              image: {
                src: '/assets/images/features/features5.png'
              }
            },
            {
              name:'Banner',
              image: {
                src: '/assets/images/features/features7.png'
              }
            }
        ],
        width: 200,
        height: 340,
        boxed: true
    },
    {
        component: 'spacer',
        space: 10
    }
]