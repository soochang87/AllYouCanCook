/**
 * Created by skim7663 on 4/2/2017.
 */

function error(e) {
    console.error("Fail to transaction:\n" + e.message);
}
function success() {
    console.info("Success transaction");
}

var db;
var DB = {
    createDatabase: function () {
        var name = "AllYouCanCookDB";
        var version = "1.0";
        var displayName = "Database for Recipe App";
        var size = 2 * 2 * 1024;

        function success() {
            console.log("DB created");
        }

        db = openDatabase(name, version, displayName, size, success);
    },
    createTables: function () {
        function txFunction(tx) {
            function successHandler() {
                console.log("Success transaction");
            }

            function errorHandler(tx, e) {
                console.error("Error transaction");
                console.error(e.message);
            }

            var options = [];
            var sql = "CREATE TABLE IF NOT EXISTS recipe(" +
                "id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, " +
                "title VARCHAR(32) NOT NULL," +
                "category VARCHAR(32) NOT NULL," +
                "direction VARCHAR(1024) NOT NULL ," +
                "name VARCHAR(32)," +
                "website VARCHAR(255));";

            tx.executeSql(sql, options, successHandler, errorHandler);

            sql =
                "CREATE TABLE IF NOT EXISTS ingredient(" +
                "id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, " +
                "name VARCHAR(32) NOT NULL," +
                "quantity VARCHAR(32) NOT NULL," +
                "recipe_id INTEGER," +
                "FOREIGN KEY(recipe_id) REFERENCES recipe(id));";

            tx.executeSql(sql, options, successHandler, errorHandler);

            sql =
                "CREATE TABLE IF NOT EXISTS shopping_list(" +
                "recipe_id INTEGER NOT NULL," +
                "ingredient_id INTEGER NOT NULL);";
                    //Commented  by Almas to check shopping page
                /*"FOREIGN KEY(recipe_id) REFERENCES recipe(id)," +
                "FOREIGN KEY(ingredient_id) REFERENCES ingredient(id));";*/

            tx.executeSql(sql, options, successHandler, errorHandler);
        }

        db.transaction(txFunction, error, success);
    }
};