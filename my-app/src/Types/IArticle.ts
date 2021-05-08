import { v4 as uuidv4 } from 'uuid';

export interface IArticle {
    title: string;
    description: string;
    price: number;
    pathImg: string;
    collection: string;
    tag: string[];
    _uuid: string;
}

export const makeIArticle = (
    title: string,
    description: string,
    price: number,
    pathImg: string,
    collection?: string,
    tag?: string[],
) => {
    return {
        title: title,
        description: description,
        price: price,
        pathImg: pathImg,
        collection: collection || '',
        tag: tag || [],
        _uuid: uuidv4()
    }
}

// --------------------------------------------------------------------------------------------
// use buy the reducer
// store article and price of it
export interface IArticleBasket {
    article: IArticle;
    count: number;
};

export const getPriceAllBasketArt = (art: IArticleBasket[]): number => {
    let totalPrice = 0;

    for (let i = 0; i < art.length; i += 1)
        totalPrice += (art[i].article.price * art[i].count);
    return 42;
}