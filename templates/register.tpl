 <div id="registerCSS">
    <h2><%>register<%></h2>

    <h3><%>club<%></h3>   
    <div class="club">
            <label for="clubname">Clubname:</label><br>
            <input type="text" id="clubname" name="clubname" placeholder="Clubname" required><br>

            <label for="streetName"><%>street<%>:</label><br>
            <input type="text" id="streetName" name="streetName" placeholder="Musterstraße 5" required><br>

            <label for="city"><%>city<%>:</label><br>
            <input type="text" id="city" name="city" placeholder="Linz" required><br>

            <label for="postcode"><%>postcode<%>:</label><br>
            <input type="text" id="postcode" name="postcode" placeholder="4020" required><br>
  
        <h3><%>contact<%>:</h2>
        <div class="contact">
                <label for="firstName"><%>firstName<%>:</label><br>
                <input type="text" id="firstName" name="firstName" placeholder="Franz/Sissi" required><br>
            
                <label for="lastName"><%>lastName<%>:</label><br>
                <input type="text" id="lastName" name="lastName" placeholder="Mustermann" required><br>
        
                <label for="email"><%>email<%>:</label><br>
                <input type="email" id="email" name="email" placeholder="franz@gmail.com" required><br>
    
            <div class="password">
                <label for="password"><%>password<%>:</label><br>
                <input type="password" id="password" name="username" placeholder="******" required><br>
            
                <label for="passwordCheck"><%>passwordCheck<%>:</label><br>
                <input type="password" id="passwordCheck" name="passwordCheck" placeholder="******" required><br>
            </div>
        </div>

        <div class="registerAccount">
            <button  id="register" name="register"><%>register<%></button>
            <button  id="registerCancel" name="cancel"><%>cancel<%></button>
        </div>
    </div>
</div>