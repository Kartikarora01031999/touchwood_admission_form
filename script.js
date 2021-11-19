$(document).ready(function(){
$('#msform').on('submit', function(event){
      
    console.log("reached")
      $.ajax({
              data:{
              student_name: $('#student_name').val(),
              admission_class: $('#admission_class').val(),
              date_of_birth : $("#date_of_birth").val(),
              class_passed :$("#class_passed").val(),
              last_school : $("#last_school").val(),
              mother_name : $("#mother_name").val(),
              mother_email : $("#mother_email").val(),
              mother_contact : $("#mother_contact").val(),
              mother_occupation : $("#mother_occupation").val(),
              father_name : $("#father_name").val(),
              father_email : $("#father_email").val(),
              father_contact : $("#father_contact").val(),
              father_occupation : $("#father_occupation").val(),
              address : $("#address").val(),
              },
              type: 'POST',
              url: 'https://touchwood-school.herokuapp.com/html_to_pdf',
      
      
          })
        alert("Admission Query Sent Successfully")
         
      event.preventDefault();
  })
})