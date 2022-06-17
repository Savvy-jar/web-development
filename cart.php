<?php 
include('header.php');
?>

<!--close  header-->
<!--start main site-->
<!---->



<?php include('_cart.php');
?>

<!--SHopping cART section-->

<?php 
include('./Templates/_top-sale.php');
?>

<!--top sale-->
<?php 
include('./Templates/_card-anime.php');
?>


<?php 
include('footer.php');
?>


<!--Custom javascript-->
<script>
      var productbox=document.getElementById("productbox");
      var frontImg =document.getElementById("frontImg");
      var backImg =document.getElementById("backImg");
      function flipRight(){
        productbox.style.transform="rotateY(180deg)"
        frontImg.style.left="650px"
        backImg.style.left="20px"
        frontImg.style.transform="rotate(-30deg)"
      backImg.style.transform="rotate(0deg)"
      
      }
      function flipLeft(){
        productbox.style.transform="rotateY(0deg)"
        frontImg.style.left="20px"
        backImg.style.left="-650px"
        frontImg.style.transform="rotate(0deg)"
      backImg.style.transform="rotate(-30deg)"
      }
      
      
      
      </script>
<script src="./index.js"></script>

  </body>
</html>

