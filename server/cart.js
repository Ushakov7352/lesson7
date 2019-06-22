let add = (cart, req) => {
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};
//добавил удаление
let del=(cart, req)=> {
    let find =cart.contents.delete(el=> el.id_product === +req.param.id );
    return JSON.stringify(cart, null, 4);

}
module.exports = {
    add,
    change,
    del // добавил удаление
}