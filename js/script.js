const url = 'http://127.0.0.1:5500/js/news.json';

const appendIt = (theID) => {
    fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            if (data.length > 0) {
                var temp = "";

                data.forEach((u) => {
                    temp += `
                    <div class="col-4 py-3">
                        <div class="card" style="width: 18rem;">
                            <img src="${u.image}" class="card-img-top" alt="${u.title}">
                            <div class="card-body">
                                <h2 class="card-title"  style="width: 250px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;">${u.title}</h2>
                                <h5 class="card-title text-success">${u.type}</h5>
                                <p class="card-text" style="width: 250px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;">${u.description}</p>
                                <button onclick="showNews(${u.id},'demo')" class="btn btn-warning">Read More...</button>
                            </div>
                        </div>
                    </div>`;
                });
            }
            document.getElementById(theID).innerHTML = temp;
        })
        .catch(err => console.log(err))
}


const showNews = (id, theID) => {
    fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            _data = data[id]
            document.getElementById(theID).innerHTML = `
            <div class="col-12  py-3">
                <div class="jumbotron">
                    <img src="${_data.image}" class="card-img-top" alt="${_data.title}">
                    <hr class="my-4">
                        <h2 class="display-4">${_data.title}</h2>
                        <h5 class="card-title text-success">${_data.type}</h5>
                        <p class="lead">${_data.description}</p>
                        <button onclick="appendIt('demo')" class="btn btn-danger">go back to news</button>
                </div>
            </div>`;
        })
        .catch(err => console.log(err))
}