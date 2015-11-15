$(function() {
    $('#myTable').find('td').contextMenu({
        menuSelector: $('#contextMenu'),
        menuSelected: function(invokedOn, selectedMenu) {
            var msg = "You selected the menu item '"
                + selectedMenu.text() + "'"
                + " on the value '" + invokedOn.text() + "'";
            alert(msg);
        }
    });
});
