/**
 * Created by skim7663 on 4/2/2017.
 */

// Helper utilities

function successSqlExecution(){
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