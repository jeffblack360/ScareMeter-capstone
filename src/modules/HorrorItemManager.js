const remoteURL = "http://localhost:8088"

export const getHorrorItemById = (id) => {
    return fetch (`${remoteURL}/horrorItem/${id}?_expand=user`)
    .then(response => response.json())
}

export const getAllHorrorItems = () => {
    return fetch (`${remoteURL}/horrorItem`)
    .then(response => response.json())
}

