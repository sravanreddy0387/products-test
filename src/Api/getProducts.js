export default function getProducts(callback) {
    fetch("https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3")
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            callback(data);
        }).catch(function (err) {
            console.log('Error ', err);
        });
}

