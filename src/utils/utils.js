export const sortByCity = (city, list) => {
    return list.filter(item => {
        return item.city === city;
    })
}

export const sortByGuest = (maxGuests, list) => {
    return list.filter(item => {
        return item.maxGuests === maxGuests;
    })
}

export const sortStayList = (searchObject, list) => {
    let returnedList = list;
    const {city, maxGuests} = searchObject;

    if (city) {
        returnedList = sortByCity(city, returnedList)
    }

    if (maxGuests) {
        returnedList = sortByGuest(maxGuests, returnedList)
    }

    return returnedList;
}

export const setBodyActions = () => {
    const body = document.querySelector("body");
    body.classList.toggle("blurred");
}