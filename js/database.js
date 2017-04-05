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
                "id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, " +
                "title VARCHAR(32) NOT NULL," +
                "category VARCHAR(32) NOT NULL," +
                "direction VARCHAR(255) NOT NULL ," +
                "name VARCHAR(32)," +
                "website VARCHAR(32));";

            tx.executeSql(sql, options, successHandler, errorHandler);

            sql =
                "CREATE TABLE IF NOT EXISTS ingredient(" +
                "id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL," +
                "description VARCHAR(32) NOT NULL);";

            tx.executeSql(sql, options, successHandler, errorHandler);

            sql =
                "CREATE TABLE IF NOT EXISTS shopping_list(" +
                "recipe_id INTEGER AUTO_INCREMENT PRIMARY KEY  NOT NULL," +
                "ingredient_id INTEGER NOT NULL);";

            tx.executeSql(sql, options, successHandler, errorHandler);
        }

        db.transaction(txFunction, error, success);
    }
};