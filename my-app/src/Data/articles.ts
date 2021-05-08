import {IArticle} from './../Types/IArticle';
//import panda from './crystalArt/panda.jpg';
import * as img from './crystalArt/index';

let lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde cumque, impedit dicta quos ea eveniet quisquam repudiandae debitis facilis voluptates quaerat dolorem enim harum, vero maiores repellendus omnis quam atque.';

let listArticles : IArticle[] = [
    {description : lorem, title : 'Licorne', collection : 'summer 2021', tag : [], price : 10, pathImg : img.licorne},
    {description : lorem, title : 'Wood', collection : 'summer 2021', tag : [],  price : 5, pathImg : img.panda},
    {description : lorem, title : 'Pim', collection : 'summer 2021', tag : [], price : 8, pathImg : img.pim},
    {description : lorem, title : 'Tiger', collection : 'summer 2021', tag : [], price : 8, pathImg : img.tiger},
    {description : lorem, title : 'Licorne', collection : 'summer 2021', tag : [], price : 10, pathImg : img.licorne},
    {description : lorem, title : 'Wood', collection : 'summer 2021', tag : [],  price : 5, pathImg : img.panda},
    {description : lorem, title : 'Pim', collection : 'summer 2021', tag : [], price : 8, pathImg : img.pim},
    {description : lorem, title : 'Tiger', collection : 'summer 2021', tag : [], price : 8, pathImg : img.tiger},
    {description : lorem, title : 'Licorne', collection : 'summer 2021', tag : [], price : 10, pathImg : img.licorne},
    {description : lorem, title : 'Wood', collection : 'summer 2021', tag : [],  price : 5, pathImg : img.panda},
    {description : lorem, title : 'Pim', collection : 'summer 2021', tag : [], price : 8, pathImg : img.pim},
    {description : lorem, title : 'Tiger', collection : 'summer 2021', tag : [], price : 8, pathImg : img.tiger}
];

export default listArticles;