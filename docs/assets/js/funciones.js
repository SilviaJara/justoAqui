$(document).ready(function(){
    $('#btnForm').on("click",function(){
        $('#miModal1').modal("show");
    });

    $('#btnInicio').on("click",function(){
        $('#miModal2').modal("show");
    });
//Programar el botón
    $("#btnGuardar").on("click", function(){
        alert("Se ha registrado correctamente!!!");
        setTimeout(function(){
            location.reload();
        },1000);
    });
    $("#btnIngresar").on("click", function(){
        alert("Bienvenido!!!");
        setTimeout(function(){
            location.reload();
        },1000);

    });
});



