<div id="settingCSS">
    <h2><%>pProfilSettings<%></h2>

    <h3><%>pBasics<%></h3>
    <form class="basics">
        <label><%>firstName<%></label><br>
        <input id="pFirstname" type="text" name="firstname" required><br>

        <label><%>lastName<%></label><br>
        <input id="pLastname" type="text" name="lastname" required><br>

        <label><%>email<%></label><br>
        <input id="pEmail" type="email" name="email" required><br>

        <label><%>pPhoneNumber<%></label><br>
        <input id="pPhoneNumber" type="text" name="phoneNumber"><br>

        <label><%>pGender<%></label><br>
        <select id="pGender">
            <option value="f"><%>pf<%></option>
            <option value="m"><%>pm<%></option>
        </select><br>

        <label><%>pBirthdate<%></label><br>
        <input id="pBirthday" type="date" name="birthdate" required><br>

        <input type="submit" id="pSaveChanges" value="<%>pSaveChanges<%>"></input>
    </form>

    <h3><%>password<%></h3>
    <form class="password">
        <label><%>pCurrentPassword<%></label><br>
        <input id="pCurrentPassword" type="text" name="currentPassword" required><br>

        <label><%>pNewPassword<%></label><br>
        <input id="pNewPassword" type="password" name="newPassword" required><br>

        <label><%>pReEnterNewPassword<%></label><br>
        <input id="pNewPassword2" type="password" name="re-enterNewPassword" required><br>

        <input type="submit" id="pChangePassword" value="<%>pChangePassword<%>"></input>
    </form>

    <h3><%>pRole<%></h3>
    <div class="role">
        <p id="pRole"><%>pKnecht<%><p>
    </div>

    <h3><%>pDeleteAccount<%></h3>
    <div class="deleteAccount">
        <button id="pDeleteAccount"><%>pDeleteYyourAccount<%></button>
    </div>
</div>