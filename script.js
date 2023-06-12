function newItem() {

    //javascript
    //1. Adding a new item to the list of items: 
    let list = $('#list');
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    if (inputValue.length < 1) {
        alert('Please type something in the text box')
    } else {
        list.append(li);
        li.append(inputValue);
    }
    $('#input').val('');
    //2. Crossing out an item from the list of items:
    li.on('dblclick', function () {
        li.toggleClass('strike');
    });

    //3(i). Adding the delete button "X": 
    let crossOutButton = $('<button>X</button>');
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
        li.addClass('delete')
    }
    // 4. Reordering the items: 
    $('#list').sortable();

}
