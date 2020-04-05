$(document).ready(function() {
    function show_create_room_details() {
        var create = $("#create_room_button");
        create.show();
        hide_join_room_details()
    }

    function show_join_room_details() {
        var join = $("#join_existing_room");
        join.show();
        hide_create_room_details()
    }

    function hide_create_room_details() {
        var create = $("#create_room_button");
        create.hide();
    }

    function hide_join_room_details() {
        var join = $("#join_existing_room");
        join.hide();
    }


    $("#create").click(function() {
      show_create_room_details();
    });
    $("#join").click(function() {
      show_join_room_details();
    });
});