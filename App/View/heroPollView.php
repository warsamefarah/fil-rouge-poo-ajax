<?php
include "head.php";
?>

<div class="container">
<?php
include "header.php";
?>
<main class="bgpoll">
        <div>
            <form action="" class="zone">
                <!-- <h1>Parmi les choix présents, quel est votre super héros préféré ?</h1>
                <div class="pollform">
                    <div class="option">
                        <input type="radio" id="a" name="drone" value="superman" required>
                        <label for="a" class="choice"></label>
                    </div>

                    <div class="option">
                      <input type="radio" id="b" name="drone" value="batman" required>
                      <label for="b" class="choice"></label>
                    </div>

                    <div class="option">
                      <input type="radio" id="c" name="drone" value="spider-man" required>
                      <label for="c" class="choice"></label>
                    </div>
                </div> -->
            </form>
        </div>
        <section>
            <div>
                <p id="resultuser"></p>
                <p id="scoreuser"></p>
            </div>
        </section>
</main>
<script src="./assets/js/pollViewAjax.js"></script>

<?php
include "footer.php";