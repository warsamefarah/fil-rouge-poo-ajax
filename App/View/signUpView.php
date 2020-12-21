<?php

include "head.php";
if($_POST){
    echo 'fd,zfz';
}
?>
<div class="container">
    <?php
    include "header.php";
    ?>
    <main class="bglogin">
        <div class="loginbox">
            <form action="signUp.php" method="POST" class="loginForm">
                <h1>Inscrivez-vous</h1>
                <div class="pseudo">
                    <i class="fas fa-user"></i>
                    <input type="text" id="text" name="pseudo" placeholder="Pseudo" autocomplete="none">
                </div>
                <div class="email">
                    <i class="fas fa-envelope"></i>
                    <input type="email" id="email" name="email" placeholder="Email" autocomplete="none">
                </div>
                <div class="pass">
                    <i class="fas fa-lock"></i>
                    <input type="password" id="mdp" name="password" placeholder="Mot de passe">
                </div>
                <div>
                    <input type="submit" value="Inscription">
                </div>
            </form>
        </div>
    </main>
<?php
include "footer.php";