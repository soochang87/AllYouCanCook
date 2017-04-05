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

function init() {

}

$(document).ready(function () {
    initDB();
    init();
});