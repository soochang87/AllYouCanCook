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

function txtQuantity_keyup() {
    var group = $(this).parent().parent();
    var parent = group.parent();
    var sibling = group.children(":first-child").next();

    if (group.get(0) === parent.children(":last-child").get(0)) {
        if($(this).val() != ""){
            parent.append("<div>" +
                "<label for='txtIngredients'>Ingredient</label>" +
                "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input type='text' " +
                "name='txtIngredients[]' id='txtIngredients'/></div>" +
                "<label for='txtQuantity'>Quantity</label>" +
                "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input " +
                "type='text' name='txtQuantity[]' id='txtQuantity'/></div></div>");
            parent.children(":last-child#txtQuantity").on("change", txtQuantity_keyup);
        }
    }
    else if($(this).val() == ""){
        group.remove();
    }
}

function init() {
    $("#pgShoppingList").on("pageshow", pgShoppingList_show);
    $("#btnaddItem").on("click", btnaddItem_click);
    $("#btnclearItems").on("click", btnclearItems_click);
    $("#btnRecipePost").on("click", btnRecipePost_click);
    $("#btnSubmit").on("click", btnSubmit_click);
    $("#btnCancel").on("click", btnCancel_click);
    $("#pgShowRecipes").on("pagebeforeshow", pgShowRecipes_pagebeforeshow);
    $("#txtQuantity").on("keyup", txtQuantity_keyup);
}

$(document).ready(function () {
    initDB();
    init();
});