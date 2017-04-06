/**
 * Created by skim7663 on 4/2/2017.
 */

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

            var options = [];
            var sql = "CREATE TABLE IF NOT EXISTS recipe(" +
                "id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, " +
                "title VARCHAR(32) NOT NULL," +
                "category VARCHAR(32) NOT NULL," +
                "direction VARCHAR(255) NOT NULL ," +
                "name VARCHAR(32)," +
                "website VARCHAR(255));";

            tx.executeSql(sql, options, successSqlExecution, errorSqlExecution);

            sql =
                "CREATE TABLE IF NOT EXISTS ingredient(" +
                "id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL," +
                "description VARCHAR(32) NOT NULL);";

            tx.executeSql(sql, options, successSqlExecution, errorSqlExecution);

            sql =
                "CREATE TABLE IF NOT EXISTS shopping_list(" +
                "recipe_id INTEGER NOT NULL," +
                "ingredient_id INTEGER NOT NULL," +
                "FOREIGN KEY(recipe_id) REFERENCES recipe(id)," +
                "FOREIGN KEY(ingredient_id) REFERENCES ingredient(id));";

            tx.executeSql(sql, options, successSqlExecution, errorSqlExecution);
        }

        db.transaction(txFunction, errorTransaction, successTransaction);
    }
};