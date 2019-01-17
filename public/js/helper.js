
function saveBase64AsFile(base64, fileName) {
    var link = document.createElement("a");

    link.setAttribute("href", base64);
    link.setAttribute("download", fileName);
    link.click();
}

/*Upload App Logo*/
function uploadImage(inputElemId, previewElemId) {
    let reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        $("#" + previewElemId).attr("src", e.target.result);
    };

    let inputElement = $('#' + inputElemId);
    // read the image file as a data URL.
    reader.readAsDataURL(inputElement.files[0]);
};

function readURL(input,output) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            output.attr('src', e.target.result);
            output.hide();
            output.fadeIn(350);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function readURLAsBackground(input,output) {
    console.log(input,output);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            output.css('background-repeat','no-repeat');
            output.css('background-position','top center');
            output.css('background-image','url("' + e.target.result + '")');
            output.hide();
            output.fadeIn(350);
        }
        reader.readAsDataURL(input.files[0]);
    }
}



function download_mockup_active(scale){
    if (typeof scale === 'undefined' || !scale){
        scale = 2;
    }
            $("#pagebutton-downloadmockup").on('click', function() {
                $("html").addClass("hide-scrollbar");
            html2canvas(document.querySelector("#capture"),{"scale":scale}).then(canvas => {
                var a = document.createElement('a');
                a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                a.download = 'download.jpg';
                a.click();
            });
            $("html").removeClass("hide-scrollbar");
        });
}

function bindSettingAndDisplayTextField(settingElementId, displayElementSelector){
    
    var placeholder = $("#" + settingElementId).attr('placeholder');
    $("#" + settingElementId).on('keyup', function() {
        if($("#" + settingElementId).val().length == 0 &&  placeholder !== undefined){
            $(displayElementSelector).html(placeholder);
        }else{
            $(displayElementSelector).html($("#" + settingElementId).val());
        }
    });

    console.log('bindSettingAndDisplayTextField:' + settingElementId,displayElementSelector);
}

function bindSettingAndDisplayInputField(settingElementId, displayElementSelector){

    var placeholder = $("#" + settingElementId).attr('placeholder');
    $("#" + settingElementId).on('keyup', function() {
        if($("#" + settingElementId).val().length == 0 &&  placeholder !== undefined){
            $(displayElementSelector).val(placeholder);
        }else{
            $(displayElementSelector).val($("#" + settingElementId).val());
        }
    });
}




/*Valid File Type*/

var fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
]

function validFileType(file) {
    for (var i = 0; i < fileTypes.length; i++) {
        if (file.type === fileTypes[i]) {
            return true;
        }
    }
    return false;
}




