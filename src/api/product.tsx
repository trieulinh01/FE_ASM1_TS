import instance from './instance';
export const list=()=>{
    const url="/products";
    return instance.get(url)
}
export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
// export const add = (product) => {
//     const url = `/products`;
//     return instance.post(url, product);
// }