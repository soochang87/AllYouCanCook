/**
 * Created by skim7663 on 4/2/2017.
 */

// Global classes


function btnRecipePost_click() {
    addRecipe();
}


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
    $("#lblRecipe").text(getRecipeWhichIngredientIsSelected());
    $("#btnRecipePost").on("click", btnRecipePost_click);
}
///asdfas
function init() {
    $("#pgShoppingList").on("pageshow", pgShoppingList_show);

}

$(document).ready(function () {
    initDB();
    init();
});