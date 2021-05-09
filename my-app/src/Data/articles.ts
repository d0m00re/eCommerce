import {IArticle, makeIArticle} from './../Types/IArticle';
//import panda from './crystalArt/panda.jpg';
import * as img from './crystalArt/index';

let lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde cumque, impedit dicta quos ea eveniet quisquam repudiandae debitis facilis voluptates quaerat dolorem enim harum, vero maiores repellendus omnis quam atque.';


let listArticles : IArticle[] = [
    makeIArticle('Licorne', lorem, 5, img.licorne),
    makeIArticle('Wood', lorem, 10, img.hippo),
    makeIArticle('Pim', lorem, 25, img.pim),
    makeIArticle('Tiger', lorem, 30, img.tiger),

    makeIArticle('Fairy', lorem, 49, img.fairy),

    makeIArticle('Deer', lorem, 51, img.deer),

    makeIArticle('Cat', lorem, 53, img.cat),

    makeIArticle('Pim', lorem, 54, img.pim),



    makeIArticle('Licorne', lorem, 55, img.licorne),
    makeIArticle('Wood', lorem, 58, img.hippo),
    makeIArticle('Pim', lorem, 65, img.pim),
    makeIArticle('Tiger', lorem, 75, img.tiger),

    makeIArticle('Pim', lorem, 86, img.pim),


    makeIArticle('Licorne', lorem, 96, img.licorne),
    makeIArticle('Wood', lorem, 142, img.hippo),
    makeIArticle('Pim', lorem, 242, img.pim),
    makeIArticle('Tiger', lorem, 342, img.tiger),

   
];

export default listArticles;