const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize chaptersArray with data from localStorage OR empty if none
let chaptersArray = getChapterList() || [];

// Populate the list when the page loads
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Event listener for Add Chapter button
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

// Function to display a chapter in the list
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');

    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');

    li.append(deletebutton);
    list.append(li);

    // Delete button functionality
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// Save chaptersArray to localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Retrieve chaptersArray from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Delete a chapter from array + localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
