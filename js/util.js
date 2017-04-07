/**
 * Created by skim7663 on 4/2/2017.
 */

// Helper utilities

function successSqlExecution(tx,success){
    console.info("Success: SQL");
}

function errorSqlExecution(tx, error){
    console.info("Fatal Error: " + error.message);
}

function successTransaction(){
    console.info("Transaction succeed");
}

function errorTransaction(error){
    console.error(error.message);
}

function navigateNewPage(pageId){
    $(location).attr("href", "#"+pageId);
}

function updateIngredients(group, sibling, it){
    var parent = group.parent();
    if (group.get(0) === parent.children(":last-child").get(0)) {
        if($(it).val() != ""){
            parent.append("<div>" +
                "<label for='txtIngredients'>Ingredient</label>" +
                "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input type='text' " +
                "name='txtIngredients[]' id='txtIngredients'/></div>" +
                "<label for='txtQuantity'>Quantity</label>" +
                "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input " +
                "type='text' name='txtQuantity[]' id='txtQuantity'/></div></div>");
            var temp = parent.children(":last-child").children("div").children("input");
            $(temp[0]).on("keyup",txtQuantity_keyup );
            $(temp[1]).on("keyup", txtQuantity_keyup);
        }
    }
    else if($(it).val() == "" && $(sibling).val() == ""){
        group.remove();
    }
}

function isStringEmtpy(str){
    var result = false;
    if(str === null || str === "")
        result = true;
    return result;
}