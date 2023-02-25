let api = "https://63fa1723473885d837d8427f.mockapi.io/product2";


async function getProducts(data) {
    try {
        let res = await fetch(api);
        res = await res.json();
        console.log(res.data);
    } catch (error) {
        console.log("Error getting")
    }
}
getProducts()