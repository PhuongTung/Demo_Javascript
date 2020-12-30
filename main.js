function fetchAvatarUrl(userId) { 
  return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    .then(response => response.json())
    .then(data => console.log(data));
}

const result = fetchAvatarUrl(123)
result
