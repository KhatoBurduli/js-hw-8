// Exercise 1: Deep Copy Async
function deepCopyAsync(obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj !== 'object' || obj === null) {
            reject(new Error('Argument must be an object'));
        } else {
            const copiedObj = { ...obj };
            resolve(copiedObj);
        }
    });
}

const objToCopy = { a: 1, b: { c: 2 } };

deepCopyAsync(objToCopy)
    .then(copiedObj => {
        console.log('Deep copy successful:', copiedObj);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Exercise 2: Fetch Data from URL and Output to DOM
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(posts => {
        const postList = document.getElementById('post-list');
        posts.forEach(post => {
            const postItem = document.createElement('li');
            postItem.textContent = `${post.id}: ${post.title}`;
            postList.appendChild(postItem);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Exercise 3: Power Function
function expo(digit, power, callback) {
    if (power === 0) {
        callback(1);
    } else {
        expo(digit, power - 1, function(result) {
            callback(result * digit);
        });
    }
}

const digit = 5;
const power = 3;

expo(digit, power, function(result) {
    console.log(`${digit} to the power of ${power} is ${result}`);
});
