/*
given 2 lists shopping list and cart, write a 
function that only has whay I still need to buy
*/

function whatIStillNeed(shoppingList, cart) {
    let newList = []
    for (let i = 0; i < shoppingList.length; i++ ){
        let itemFound = false
        for (let j = 0; j < cart.length; j++){
            if (cart[j] === shoppingList[i]){
                itemFound = false
                break
            }
        }
        if (!itemFound) newList.push(shoppingList[i])
    }
    return newList
}

const newList2 = shoppingList2.filter(item => {
    return !cart.includes(item)
})