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


function pgShowRecipes_pagebeforeshow(){
    showAllRecipes();
}

function btnCancel_click(){
    navigateNewPage("pgShowRecipes");
}

function btnSubmit_click(){
    postRecipe();
}

function btnRecipePost_click(){
    navigateNewPage("pgPostRecipe");
}
function init() {
    $("#pgShoppingList").on("pageshow", pgShoppingList_show);
    $("#btnaddItem").on("click", btnaddItem_click);
    $("#btnclearItems").on("click", btnclearItems_click);
    $("#btnRecipePost").on("click", btnRecipePost_click);
    $("#btnSubmit").on("click", btnSubmit_click);
    $("#btnCancel").on("click", btnCancel_click);
    $("#pgShowRecipes").on("pagebeforeshow", pgShowRecipes_pagebeforeshow);
}

$(document).ready(function () {
    initDB();
    init();
});