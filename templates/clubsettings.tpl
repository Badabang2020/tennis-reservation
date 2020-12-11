<div id="clubsettings">
  <h1><%>cAdministration<%></h1>

  <h2><%>cYourSettings<%></h2>
  <form action="">
    <label for="clubadmin__adress"><%>clubAddress<%></label>
    <input type="text" name = "club-adress" id="clubadmin__adress">
    <label for="clubadmin__postalcode"><%>postalCode<%></label>
    <input type="text" name = "club-postalcode" id="clubadmin__postalcode">
    <label for="clubadmin__openinghoursfrom"><%>openingHours<%></label>
    <input type="time" name = "club-openinghoursfrom" id="clubadmin__openinghoursfrom"  min="09:00" max="18:00" required>
    <input type="time" name = "club-openinghoursto" id="clubadmin__openinghoursto" min="09:00" max="18:00" required>
    <label for="clubadmin__hoursperweek"><%>hoursPerWeek<%></label>
    <input type="text" name = "club-hours-per-week" id="clubadmin__hoursperweek">
    <label for="clubadmin__maxreservations"><%>maxReservations<%></label>
    <input type="text" name = "club-max-reservations" id="clubadmin__maxreservations">

  </form>

  
    <h2><%>cYourMembers<%></h2>
    <table class="blueTable">
      <thead>
        <tr>
          <th><%>cName<%></th>
          <th><%>cEmail<%></th>
          <th><%>cAdress<%></th>
          <th><%>cActions<%></th>
        </tr>
      </thead>
      <tbody id="club-settings-members-table-body">
        
        
      </tbody>
    </table>
    <button type="button" id="clubadmin__addmember"><%>cAddMember<%></button>
    

    <h2><%>cYourCourts<%></h2>
    <table class="blueTable">
      <thead>
        <tr>
          <th><%>cName<%></th>
          <th><%>cSurface<%></th>
          <th><%>cActions<%></th>
        </tr>
      </thead>
      <tbody id="club-settings-clourts-table-body">
        
      </tbody>
    </table>
    <button id="clubadmin__addcourt"><%>cAddCourt<%></button>
  </br>
    <button id="clubadmin__close"><%>cClose<%></button>
    
   <div id="editor_member_overlay">
      <form>
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
        
        <label><%>pRole<%></label><br>
        <select id="pRole">
            <option value="admin"><%>pAdmin<%></option>
            <option value="member"><%>pMember<%></option>
        </select><br>
        
        <button type="submit" id="pSaveChanges" value=""><%>pSaveChanges<%></button>
        <button type="button "id="pCancel" value=""><%>cancel<%></button>
      </form>
   </div>

    <div id="editor_court_overlay">
      <form>
          <label><%>court<%></label><br>
          <input id="court" type="text" name="court" required><br>

          <label><%>surface<%></label><br>
          <input id="surface" type="text" name="surface" required><br>

          <button type="submit" id="pSaveChanges" value=""><%>pSaveChanges<%></button>
          <button type="button "id="pCancel" value=""><%>cancel<%></button>
      </form>
    </div>

</div>