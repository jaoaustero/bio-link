var state = {
    workspace : {
        length : 0,
        last : 0
    }
};

function init() {
    populatePartnersList();
    populateWorkspaceList();
    populateCoffeeNookList();
};

/**
 * Partship script
 */
function populatePartnersList() {
    var $el = document.getElementById('partners-list');

    fetch('./data/partners.json')
        .then((response) => {
           return response.json();
        })
        .then((data) => {
            data.forEach((data) => {
                if (data.enabled) {
                    var item = buildItems(data);

                    $el.innerHTML += item;
                }
            });
        });
}


/**
 * Workspace script
 */
 function populateWorkspaceList() {
    var limiter = 0;
    var $el = document.getElementById('workspace-list');

    fetch('./data/workspace.json')
        .then((response) => {
           return response.json();
        })
        .then((data) => {
            data.forEach((data) => {
                if (data.enabled) {
                    var item = buildItems(data);

                    $el.innerHTML += item;
                }
            });
        });
}


/**
 * Workspace script
 */
 function populateCoffeeNookList() {
    var $el = document.getElementById('coffee-nook-list');

    fetch('./data/coffee-nook.json')
        .then((response) => {
           return response.json();
        })
        .then((data) => {
            data.forEach((data) => {
                if (data.enabled) {
                    var item = buildItems(data);

                    $el.innerHTML += item;
                }
            });
        });
}


/**
 * Item temp[late]
 */
function buildItems(data) {
    if (data.link) {
        var item = `
            <li>
                <a class="link"
                    href="${data.link}"
                    target="_blank">
                    <div class="card card-horizontal">
                        <div class="card-media card-media-left">
                            <img src="${data.thumbnail}"
                                alt="${data.name} partnership">
                        </div>

                        <div class="card-body">
                            <p class="card-title
                                margin-bottom-xsmall">
                                ${data.name}
                            </p>

                            <p class="card-meta">
                                ${data.description}
                            </p>
                        </div>
                    </div>
                </a>
            </li>
        `;
    } else {
        var item = `
            <li>
                <div class="card card-horizontal">
                    <div class="card-media card-media-left">
                        <img src="${data.thumbnail}"
                            alt="${data.name} partnership">
                    </div>

                    <div class="card-body">
                        <p class="card-title
                            margin-bottom-xsmall">
                            ${data.name}
                        </p>

                        <p class="card-meta">
                            ${data.description}
                        </p>
                    </div>
                </div>
            </li>
        `;
    }

    return item;
}
init();