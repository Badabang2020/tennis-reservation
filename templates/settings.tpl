<h2>Profil Settings</h2>

<h3>Basics</h3>
<form action="" method="POST">
    <label>Firstname</label><br>
    <input id="pFirstname" type="text" name="firstname"><br>

    <label>Lastname</label><br>
    <input id="pLastname" type="text" name="lastname"><br>

    <label>E-Mail</label><br>
    <input id="pEmail" type="email" name="phoneNumber"><br>

    <label>Phone number</label><br>
    <input id="pPhoneNumber" type="text" name="phoneNumber"><br>

    <label>Gender</label><br>
    <select id="pGender">
        <option value="notSpecified">Not specified</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
    </select><br>

    <label>Birthdate</label><br>
    <input id="pBirthday" type="date" name="birthdate"><br>

    <input type="submit" name="submit" value="Save changes">
</form>

<h3>Password</h3>
<form action="" method="POST">
    <label>Current password</label><br>
    <input type="text" name="currentPassword"><br>

    <label>New password</label><br>
    <input type="text" name="newPassword"><br>

    <label>Re-enter new password</label><br>
    <input type="text" name="re-enterNewPassword"><br>

    <input type="submit" name="submit" value="Change password">
</form>

<h3>Role</h3>
<p id="pRole">Knecht<p>

<link rel="stylesheet" href="./css/settings.css">