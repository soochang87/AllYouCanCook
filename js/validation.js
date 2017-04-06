/**
 * Created by skim7663 on 4/2/2017.
 */

// Validation Rules

function validate_frmRecipePost(){
    var form = $("#frmRecipePost");

    form.validate({
        rules:{
            txtTitle: {
                required: true
            },
            txtCategory: {
                required: true
            },
            txtDirection: {
                required: true
            },
            txtWebsite: {
                rangelength: [4,255],
                url: true
            },
            txtName: {
                rangelength: [4,32]
            }
        },
        messages:{
            txtTitle: {
                required: "Title is required"
            },
            txtCategory: {
                required: "Category is required"
            },
            txtDirection: {
                required: "Direction is required"
            },
            txtWebsite: {
                rangelength: "Address is too long",
                url: "Please enter valid url address"
            },
            txtName: {
                rangelength: "Your name is too long or too short"
            }
        }
    });
    return form.valid();
}
