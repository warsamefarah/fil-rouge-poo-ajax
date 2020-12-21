<?php

include "head.php";

?>

<div class="container">
    <?php
    include "header.php";
    ?>
    <main class="bglogin">
        <div class="loginbox">
            <form action="" class="loginForm">
                <h1>Inscrivez-vous</h1>
                <div class="email">
                    <i class="fas fa-user"></i>
                    <input type="email" id="email" placeholder="Email" autocomplete="none">
                </div>
                <div class="pass">
                    <i class="fas fa-lock"></i>
                    <input type="password" id="mdp" placeholder="Mot de passe">
                </div>
                <div>
                    <input type="submit" value="Inscription">
                </div>
            </form>
        </div>
    </main>

<?php

include "footer.php";