import { v5 as uuidv5 } from 'uuid';

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
        _uuid: uuidv5(title + price, uuidv5.URL) // ⇨ 'c106a26a-21bb-5538-8bf2-57095d1976c1'
    }
}

// --------------------------------------------------------------------------------------------
// use buy the reducer
// store article and price of it
export interface IArticleBasket {
    article: IArticle;
    count: number;
};