import { Product } from '../model/product.model';

const mobile = '../assets/mobile.jpg';
const laptop = '../assets/laptop.jpg';
const camera = '../assets/camera.png';
const denim = '../assets/denim.jpg';
const shoes = '../assets/shoes.jpg';
const bag = '../assets/bag.jpg';

export const products: Product[] = [
    {
        id: 1,
        title: "Mobile",
        description: "A mobile phone (or cellphone) is a portable telephone that can make and receive calls over a radio frequency.",
        productImage: mobile,
        category: 'Communication',
        likes: 5
    },
    {
        id: 2,
        title: "laptop",
        description: "Most laptops are designed to have all of the functionality of a desktop computer, which means they can generally run the same software and open the same types of files.",
        productImage: laptop,
        category: 'office',
        likes: 3
    },
    {
        id: 3,
        title: "camera",
        description: "This device for recording an image of an object on a light-sensitive surface",
        productImage: camera,
        category: 'digital',
        likes: 1
    },
    {
        id: 4,
        title: "denim",
        description: "This is a type of woven twill fabric, which is made from cotton.",
        productImage: denim,
        category: 'cloths',
        likes: 0
    },
    {
        id: 5,
        title: "shoes",
        description: "This is an item of footwear intended to protect and comfort the human foot.",
        productImage: shoes,
        category: 'cloths',
        likes: 7
    },
    {
        id: 6,
        title: "bag",
        description: "This is a kind of soft container. It can hold or carry things",
        productImage: bag,
        category:'Jewelry',
        likes: 3
    }
];