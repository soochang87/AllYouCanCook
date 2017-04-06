/**
 * Created by skim7663 on 4/2/2017.
 */

// Temporary examples
function addRecipe() {


        var title = "Spring Rolls";
        var category =  "Snacks";
        var direction = "1.	Combine the bean thread noodles, mushrooms, onion, carrots, and green onions in a mixing bowl. Set aside."+
    "2.	Beat the eggs in a large bowl. Mix in the fish sauce, garlic, salt, sugar, and black pepper. Add the chicken and pork and using a fork, break up the meat, so it is thoroughly mixed with the seasonings. Add the noodle mixture and mix well. Set aside."+
    "3.	Combine the cornstarch and water in a small saucepan. Bring to a boil over low heat and stir often to prevent sticking. If mixture seems too thick, add more water. This will be the glue to seal the edges of the wrapper."+
    "4.	Cut the wrappers in half diagonally. You will have two equal triangles. Starting with the longest side toward you, place about 2 tablespoons of filling on the bottom area of the triangle."+
    "5.	To fry, preheat a large wok or fry pan. When hot, pour enough oil in to completely cover the spring rolls. Heat to about 325 degrees. Carefully place the rolls into the oil.";
        var name = "Almas Khan";
        var website = "akhan@conestogac.on.ca";


        //insert a record to the DB
        var options = [title, category, direction, name, website];
        Recipe.insert(options);


}

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
