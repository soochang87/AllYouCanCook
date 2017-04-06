/**
 * Created by skim7663 on 4/2/2017.
 */

// Temporary examples


function postRecipe(){
    if(validate_frmRecipePost()){
        var result = Recipe.insert([
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
