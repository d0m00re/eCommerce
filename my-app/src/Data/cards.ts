import {IArticle, makeIArticle} from '../Types/IArticle';
//import panda from './crystalArt/panda.jpg';
import * as img from './card/index';

let lorem = 'Lorem ipsum dolor sit ametdolo, consectetur adipiscing eli. Unde cumque, impedit dicta quos ea eveniet quisquam repudiandae debitis facilis voluptates quaerat dolorem enim harum, vero maiores repellendus omnis quam atque.';


let listArticles : IArticle[] = [
    makeIArticle('Crystal Card 1', lorem, 2500, img.card1),
    makeIArticle('Crystal Card 2', lorem, 3000, img.card2),
    makeIArticle('Crystal Card 3', lorem, 25000, img.card3),   
];

export default listArticles;