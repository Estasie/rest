const postData = async (url,data) => {
    let res = await fetch(url , {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};


const getResource = async (url) => { // ОЧЕНЬ ВАЖНАЯ ЧАСТЬ
    const res = await fetch(url);

    if (!res.ok){
        throw new Error(`Couldn't fetch ${url}, status: ${res.status}`); // throw -"выкидывает" ошибку
    }

    return await res.json();
};

export {postData};

export {getResource};