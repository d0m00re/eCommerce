import {IArticle, makeIArticle} from './../Types/IArticle';
//import panda from './crystalArt/panda.jpg';
import * as img from './crystalArt/index';

let lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde cumque, impedit dicta quos ea eveniet quisquam repudiandae debitis facilis voluptates quaerat dolorem enim harum, vero maiores repellendus omnis quam atque.';


let listArticles : IArticle[] = [
    makeIArticle('Licorne', lorem, 5, img.licorne),
    makeIArticle('Hyppocampus 3', lorem, 10, img.hippo),
    makeIArticle('Pim', lorem, 25, img.pim),
    makeIArticle('Tiger', lorem, 30, img.tiger),

    makeIArticle('Fairy', lorem, 49, img.fairy),

    makeIArticle('Deer', lorem, 51, img.deer),

    makeIArticle('Cat', lorem, 53, img.cat),

    makeIArticle('Lion', lorem, 54, img.lion),



    makeIArticle('Unicorn', lorem, 55, img.licorne),
    makeIArticle('Hyppocampus', lorem, 58, img.hippo),
    makeIArticle('Boat', lorem, 65, img.boat),
    makeIArticle('Tiger', lorem, 75, img.tiger),

    makeIArticle('Wolf', lorem, 86, img.wolf),


    makeIArticle('Licorne', lorem, 96, img.licorne),
    makeIArticle('Hyppocampus 2', lorem, 142, img.hippo),
    makeIArticle('Pim', lorem, 242, img.pim),
    makeIArticle('Tiger', lorem, 342, img.tiger),

   
];

export default listArticles;