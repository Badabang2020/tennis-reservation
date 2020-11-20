<div id="clubsettings">
    <div class="header">
        <h1><%>clubSettingHeader<%></h1>
    </div>
<h1>Administration</h1>

  <h2>Your settings</h2>
  <form action="">
    <label for="clubadmin__adress">Club Adress</label>
    <input type="text" name = "club-adress" id="clubadmin__adress">
    <label for="clubadmin__postalcode">Postal code</label>
    <input type="text" name = "club-postalcode" id="clubadmin__postalcode">
    <label for="clubadmin__openinghoursfrom">Opening hours</label>
    <input type="time" name = "club-openinghoursfrom" id="clubadmin__openinghoursfrom"  min="09:00" max="18:00" required>
    <input type="time" name = "club-openinghoursto" id="clubadmin__openinghoursto" min="09:00" max="18:00" required>
    <label for="clubadmin__hoursperweek">Hours per week</label>
    <input type="text" name = "club-hours-per-week" id="clubadmin__hoursperweek">
    <label for="clubadmin__maxreservations">Max reservations</label>
    <input type="text" name = "club-max-reservations" id="clubadmin__maxreservations">


    <h2>Your members</h2>
    <table class="blueTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Adress</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>cell1_1</td>
        <td>cell2_1</td>
        <td>cell3_1</td>
        <td>
          <button id="clubadmin__editmember">Edit</button>
          <button id="clubadmin__deletemember">Delete</button>
        </td>
        </tr>
      </tbody>
    </table>
    <button id="clubadmin__addmember">Add member</button>
    

    <h2>Your courts</h2>
    <table class="blueTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surface</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>cell1_1</td>
        <td>cell2_1</td>
        <td>cell3_1</td>
        <td>
          <button id="clubadmin__addcourt">Edit</button>
          <button id="clubadmin__deletecourt">Delete</button>
        </td>
        </tr>
      </tbody>
    </table>
    <button id="clubadmin__addcourt">Add court</button>
  </br>
    <button id="clubadmin__close">Close</button>
    
   
  </form>
</div>