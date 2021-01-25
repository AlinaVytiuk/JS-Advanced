let imageBig = document.querySelector('.image-big');

function buttonView (button) {
    var image = button.closest('.image-wrapper').querySelector('img');

    imageBig.querySelector('img').src = image.src;
    imageBig.classList.add('active');
}

function buttonClose(button) {
    imageBig.classList.remove('active');
}

function buttonDelete (button) {
    var deleteConfirm = confirm('delete?');
    if (!deleteConfirm) {
        return;
    }

    var id = parseInt(button.closest('.image-wrapper').dataset.id);
    images.splice(id, 1);
    displayImages(images, imagesList);
    localStorage.setItem('images', JSON.stringify(images));
}

function buttonEdit(button) {
    var id = parseInt(button.closest('.image-data').dataset.id);
    var label = button.closest('.image-data').querySelector('.image-name');
    var editText = prompt('Edit:', label.innerText);
    if (editText === null) {
        return;
    }
    images[id].name = editText;
    displayImages(images, imagesList);
    localStorage.setItem('images', JSON.stringify(images));
}

function displayImages(images, imagesList) {
    imagesList.innerHTML = images.map(function (image, index) {
        return `
            <li>
                <figure>
                    <div class="image-wrapper" data-id="${index}">
                        <div class="image-hover flex">
                            <button class="button button-image button-view" onclick="buttonView(this)">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
                                <path d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035
                                \t\t\tc-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201
                                \t\t\tC513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418
                                \t\t\tc26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418
                                \t\t\tC447.361,287.923,358.746,385.406,255.997,385.406z"/>
                                <path d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275
                                \t\t\ts101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516
                                \t\t\ts30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z"/>
                           </svg>
                            </button>
                            <button class="button button-image button-delete" onclick="buttonDelete(this)">
                                <svg height="512pt" viewBox="-47 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                                   <path d="m416.875 114.441406-11.304688-33.886718c-4.304687-12.90625-16.339843-21.578126-29.941406-21.578126h-95.011718v-30.933593c0-15.460938-12.570313-28.042969-28.027344-28.042969h-87.007813c-15.453125 0-28.027343 12.582031-28.027343 28.042969v30.933593h-95.007813c-13.605469 0-25.640625 8.671876-29.945313 21.578126l-11.304687 33.886718c-2.574219 7.714844-1.2695312 16.257813 3.484375 22.855469 4.753906 6.597656 12.445312 10.539063 20.578125 10.539063h11.816406l26.007813 321.605468c1.933594 23.863282 22.183594 42.558594 46.109375 42.558594h204.863281c23.921875 0 44.175781-18.695312 46.105469-42.5625l26.007812-321.601562h6.542969c8.132812 0 15.824219-3.941407 20.578125-10.535157 4.753906-6.597656 6.058594-15.144531 3.484375-22.859375zm-249.320312-84.441406h83.0625v28.976562h-83.0625zm162.804687 437.019531c-.679687 8.402344-7.796875 14.980469-16.203125 14.980469h-204.863281c-8.40625 0-15.523438-6.578125-16.203125-14.980469l-25.816406-319.183593h288.898437zm-298.566406-349.183593 9.269531-27.789063c.210938-.640625.808594-1.070313 1.484375-1.070313h333.082031c.675782 0 1.269532.429688 1.484375 1.070313l9.269531 27.789063zm0 0"/>
                                   <path d="m282.515625 465.957031c.265625.015625.527344.019531.792969.019531 7.925781 0 14.550781-6.210937 14.964844-14.21875l14.085937-270.398437c.429687-8.273437-5.929687-15.332031-14.199219-15.761719-8.292968-.441406-15.328125 5.925782-15.761718 14.199219l-14.082032 270.398437c-.429687 8.273438 5.925782 15.332032 14.199219 15.761719zm0 0"/>
                                   <path d="m120.566406 451.792969c.4375 7.996093 7.054688 14.183593 14.964844 14.183593.273438 0 .554688-.007812.832031-.023437 8.269531-.449219 14.609375-7.519531 14.160157-15.792969l-14.753907-270.398437c-.449219-8.273438-7.519531-14.613281-15.792969-14.160157-8.269531.449219-14.609374 7.519532-14.160156 15.792969zm0 0"/>
                                   <path d="m209.253906 465.976562c8.285156 0 15-6.714843 15-15v-270.398437c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v270.398437c0 8.285157 6.714844 15 15 15zm0 0"/>
                               </svg>
                            </button>
                        </div>
                        <img src="${image.url}" alt="Image ${index + 1}">
                    </div>
                    <figcaption>
                        <div class="image-data flex" data-id="${index}">
                            <p class="image-name">${image.name}</p>
                            <button class="button button-edit" onclick="buttonEdit(this)">
                                <svg id="Icons" height="512" viewBox="0 0 74 74" width="512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m23.858 71.8a1 1 0 0 1 -1-.99l-.15-15.605a1 1 0 0 1 .111-.468l25.581-49.563a5.867 5.867 0 0 1 7.9-2.52l4.32 2.23a5.868 5.868 0 0 1 2.52 7.9l-25.584 49.56a1 1 0 0 1 -.317.362l-12.809 8.917a1 1 0 0 1 -.572.177zm.852-16.367.13 13.467 11.052-7.693 25.471-49.343a3.866 3.866 0 0 0 -1.66-5.2l-4.32-2.23a3.861 3.861 0 0 0 -5.2 1.66z"/>
                                    <path d="m35.727 62.227c-3.035-8.372-11.4-6.165-11.752-6.066l-.533-1.928c.105-.029 10.507-2.779 14.166 7.313z"/>
                                    <path d="m52.448 6.188h2v14.584h-2z" transform="matrix(.459 -.889 .889 .459 16.953 54.79)"/>
                                    <path d="m49.103 12.668h2v14.584h-2z" transform="matrix(.459 -.889 .889 .459 9.385 55.326)"/>
                                    <path d="m20.564 36.955h40.501v2h-40.501z" transform="matrix(.459 -.889 .889 .459 -11.629 56.823)"/>
                                    <path d="m8.232 70h57.768v2h-57.768z"/>
                                </svg>
                            </button>
                        </div>
                        <p class="image-size">${(image.size / 1000).toFixed(1)} kB</p>
                    </figcaption>
                </figure>
            </li>
        `
    }).join('');
}