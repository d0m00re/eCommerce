import {IArticle, makeIArticle} from '../Types/IArticle';
//import panda from './crystalArt/panda.jpg';
import * as img from './card/index';

let lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde cumque, impedit dicta quos ea eveniet quisquam repudiandae debitis facilis voluptates quaerat dolorem enim harum, vero maiores repellendus omnis quam atque.';


let listArticles : IArticle[] = [
    makeIArticle('Card 1', lorem, 500, img.card1),
    makeIArticle('Card 2', lorem, 1000, img.card2),
    makeIArticle('Card 3', lorem, 25000, img.card3),   
];

export default listArticles;