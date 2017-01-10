function sendMail(){
	var name = $("#fName").val();
	var mail = $("#fMail").val();
	var mensaje = $("#fMsj").val();

    $('#contact-empty').hide();
  if(name == "" || mail == "" || mensaje == ""){
    $('#contact-empty').show();
  }else{

  	var parametros = {"nombre" : name, "email" : mail, "mensaje" : mensaje};

    $direccion= "php/sendMail.php";

  	$.ajax({
            data:  parametros,
            url: $direccion,
            type:  'post',
            dataType:'text',
          
          beforeSend: function () 
          {

          },
       
          success:  function (response) 
          {      
            if(response == "OK"){
                $('#formulario').hide();
                $('#contact-response').show();
                $('#msjForm').html('Gracias, le responderemos lo antes posible.');
            }else{
                $('#contact-response').show();
                $('#msjForm').html('No ha sido posible contactar, intentelo en info@freevan.es');
            }
          }
    });
  }
}