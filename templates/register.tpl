 <div class="register">
    
    <div class="registerForm">
        <div class="row">       
        <h2>Club</h2>
        </div>
        <div class="row">
            <label for="clubname">Clubname:</label>
            <input type="text" id="clubname" name="clubname" placeholder="Clubname" required>
        </div>
        

--------------------------------------------------------------------------------------------------------------------------------- 
        <div class="row">       
        <h2>Anschrift</h2>
        </div>
        <div class="row">
            <label for="streetName"><%>street<%>:</label>
            <input type="text" id="streetName" name="streetName" placeholder="Musterstraße 5" required>
        </div>
        <div class="row">
            <label for="city"><%>city<%>:</label>
            <input type="text" id="city" name="city" placeholder="Linz" required>
        </div>
        <div class="row">
            <label for="postcode"><%>postcode<%>:</label>
            <input type="text" id="postcode" name="postcode" placeholder="4020" required>
        </div>

---------------------------------------------------------------------------------------------------------------------------------
        <div class="row">
        <h2>Kontaktperson:</h2>
        </div>
        <div class="row">
            <label for="firstName"><%>firstName<%>:</label>
            <input type="text" id="firstName" name="firstName" placeholder="Franz/Sissi" required>
        </div>

        <div class="row">
            <label for="lastName"><%>lastName<%>:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Mustermann" required>
        </div>
        
        <div class="row">
            <label for="email"><%>email<%>:</label>
            <input type="email" id="email" name="email" placeholder="franz@gmail.com" required>
        </div>

        <div class="row">
            <label for="password"><%>password<%>:</label>
            <input type="password" id="password" name="username" placeholder="******" required>
        </div>

        <div class="row">
            <label for="passwordCheck"><%>password2<%>:</label>
            <input type="password" id="passwordCheck" name="passwordCheck" placeholder="******" required>
        </div>
---------------------------------------------------------------------------------------------------------------------------------

        <div class="row row-right">
            <button  id="registerBtn" name="register"><%>register<%></button>
            <button  id="registerBtnCancel" name="cancel"><%>cancel<%></button>
        </div>

    </div>
</div>