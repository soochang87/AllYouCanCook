/**
 * Created by skim7663 on 4/2/2017.
 */

var Recipe = {
    insert: function(options){
        function txFunction(tx){
            var sql =
                "INSERT INTO recipe(title, category, direction, name, website)" +
                "VALUES(?,?,?,?,?);";

            tx.executeSql(sql, options, successSqlExecution, errorSqlExecution);
        }
        db.transaction(txFunction, errorTransaction, successTransaction);
    },
    update: function(options){
        function txFunction(tx){
            var sql =
                "UPDATE recipe " +
                "SET title=?, category=?, direction=?, name=?, website=?" +
                "WHERE id=?";
            tx.executeSql(sql, options, successSqlExecution, errorSqlExecution);
        }
        db.transaction(txFunction, errorTransaction, successTransaction);
    },
    delete: function(options){
        function txFunction(tx){
            var sql = "DELETE FROM recipe WHERE id=?;";
            tx.executeSql(sql, options, successSqlExecution, errorSqlExecution);
        }
        db.transaction(txFunction, errorTransaction, successTransaction);
    },
    select: function(successHandler){
        function txFunction(tx){
            var sql = "SELECT * FROM recipe;";
            tx.executeSql(sql, [], successHandler, errorSqlExecution);
        }
        db.transaction(txFunction, errorTransaction, successTransaction);
    },
    selectAll: function(options, successHandler){
        function txFunction(tx){
            var sql = "SELECT * FROM recipe WHERE id=?";
            tx.executeSql(sql, options, successHandler, errorSqlExecution);
        }
        db.transaction(txFunction, errorTransaction, successTransaction);
    }
};

var ShoppingList = {
    insert: function(options){
        function txFunction(tx){
            var sql =
                "INSERT INTO shopping_list(recipe_id, ingredient_id) VALUES(?,?);";
            tx.executeSql(sql, options, successSqlExecution, errorSqlExecution);
        }
        db.transaction(txFunction, errorTransaction, successTransaction);
    },
    delete: function(){
        function txFunction(tx){
            var sql = "DELETE FROM shopping_list;";
            tx.executeSql(sql, [], successSqlExecution, errorSqlExecution);
        }
        db.transaction(txFunction, errorTransaction, successTransaction);
    },
    selectAll: function(successHandler){
        function txFunction(tx){
            var sql = "SELECT * FROM shopping_list;";
            tx.executeSql(sql, options, successHandler, errorSqlExecution);
        }
        db.transaction(txFunction, errorTransaction, successTransaction);
    }
};

var Grocery = {
    insert: function(){},
    delete: function(){},
    findItems: function(){},
    select: function(){},
    selectAll: function(){}
};
