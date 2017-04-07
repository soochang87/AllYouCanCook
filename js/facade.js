/**
 * Created by skim7663 on 4/2/2017.
 */

// Temporary examples
function  clearShoppingList() {
    ShoppingList.delete();
    $(location).prop('href', "#pgMain");

}
function addNewItemInShoppingList() {


}
function getShoppingList() {
    function successHandler(tx, results){
        var htmlCode = "";
        var recipeId="";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            console.info(row);

            htmlCode += "<h4>"+row['recipe_id']+"</h4><li id='shoppingItem' data-icon='minus'><a data-row-id="+ row['ingredient_id'] +">" + row["ingredient_id"]+ "</a></li>";


        }
        var lv = $("#shoppingList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");
        lv.children("li").children("a").on("click", function(){
            localStorage.setItem("ingredient_id", $(this).attr("data-row-id"));
            var style = $("#shoppingItem").css('text-decoration');
            if(style == 'none solid rgb(51, 51, 51)')
            {
                console.info("inside if");
                $("#shoppingItem").removeClass();
                $("#shoppingItem").addClass("selectedItem");
            }
            else{
                $("#shoppingItem").removeClass();
                $("#shoppingItem").addClass("notselectedItem");
                console.info("inside else");
            }
        });
    }
    ShoppingList.selectAll(successHandler);
}
function postRecipe(){
    if(validate_frmRecipePost()){
        Recipe.insert([
            $("#txtTitle").val(),
            $("#txtCategory").val(),
            $("#txtDirection").val(),
            $("#txtName").val(),
            $("#txtWebsite").val()
        ]);
        navigateNewPage("pgShowRecipes");
    }
}

function showAllRecipes(){
    function successHandler(tx, results){
        if(results.rows.length != 0){
            var list = $("#lstRecipe");
            var html = "";
            $.each(results.rows, function(idx, row){
                html += "<li>"+"<a data-row-id="+ row['id'] +">" + row["title"]+ "</a></li>"
            });
            list.html(html).listview("refresh");
            list.children("li").children("a").on("click", function(){
                localStorage.setItem("recipe_id", this.getAttribute("data-row-id"));
                navigateNewPage("pgRecipeDetail");
            });
        }
    }
    Recipe.selectAll(successHandler);
}

function showRecipeDetails(){

}
