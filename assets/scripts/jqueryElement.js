




// toggle | hiding ans showing --- meme bouton 
$(document).ready(function(){
        $("button").click(function(){
          $("p").toggle();
        });
      });


// toggle | hiding  --- clic sur element 
$(document).ready(function(){ //tout en haut du fichier//une seule fois = $(document).ready(function(){........... });
        $("p").click(function(){
          $(this).hide();
        });
      });
      
//