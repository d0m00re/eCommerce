import {IArticle, makeIArticle} from './../Types/IArticle';
//import panda from './crystalArt/panda.jpg';
import * as img from './crystalArt/index';

let lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde cumque, impedit dicta quos ea eveniet quisquam repudiandae debitis facilis voluptates quaerat dolorem enim harum, vero maiores repellendus omnis quam atque.';


let listArticles : IArticle[] = [
    makeIArticle('Licorne', lorem, 42, img.licorne),
    makeIArticle('Wood', lorem, 42, img.hippo),
    makeIArticle('Pim', lorem, 42, img.pim),
    makeIArticle('Tiger', lorem, 42, img.tiger),

    makeIArticle('Pim', lorem, 42, img.pim),


    makeIArticle('Licorne', lorem, 42, img.licorne),
    makeIArticle('Wood', lorem, 42, img.hippo),
    makeIArticle('Pim', lorem, 42, img.pim),
    makeIArticle('Tiger', lorem, 42, img.tiger),

    makeIArticle('Pim', lorem, 42, img.pim),


    makeIArticle('Licorne', lorem, 42, img.licorne),
    makeIArticle('Wood', lorem, 42, img.hippo),
    makeIArticle('Pim', lorem, 42, img.pim),
    makeIArticle('Tiger', lorem, 42, img.tiger),

   
];

export default listArticles;