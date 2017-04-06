/**
 * Created by skim7663 on 4/2/2017.
 */

// Global classes





function initDB() {
    try {
        DB.createDatabase();
        if (db != null) {
            DB.createTables();
        }
    }
    catch (e) {
        cosole.error("Fail: " + e.message);
    }
}
function pgShoppingList_show() {
    $("#lblRecipe").text("Spring roll");
    getShoppingList();

}
function btnaddItem_click() {
    addNewItemInShoppingList();
}
function btnclearItems_click() {
    clearShoppingList();
}

function init() {
    $("#pgShoppingList").on("pageshow", pgShoppingList_show);
    $("#btnaddItem").on("click", btnaddItem_click);
    $("#btnclearItems").on("click", btnclearItems_click);


}

$(document).ready(function () {
    initDB();
    init();
});