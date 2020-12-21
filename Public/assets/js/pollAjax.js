$(document).ready(function () {
    renderTheme();
});

function renderTheme()
{
    $(".pollarea").html("")
    $.ajax({
        url:"routeur.php?function=getTheme",
        contentType: 'application/json',
        dataType:"json",
        success:function(response){
            response.forEach(themes => {
                $(".pollarea").append(`<a href="?page=heroPollView.php&id=${themes.ID}"><div class="polls"><h3>${themes.theme}</h3><br><h4>${themes.description}</h4></div></a>`)
            });
        },
        error: function(err){
            console.log(err);
        }
    })

}