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
    
   

</div>