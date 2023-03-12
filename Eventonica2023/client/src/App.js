// src/App.js
import calendar from "./images.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={calendar} alt="Calendar Star Logo" />
        <h1>Eventonica</h1>
      </header>

      <main>
        {/* User-management */}
        <section className="user-management">
          <h2>User Management</h2>

          <table id="users">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email Address</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>....</td>
                <td>....</td>
                <td>....</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            <h3>Add User</h3>
            <form id="add-user" action="#">
              <fieldset>
                <label>Name</label>
                <input type="text" id="add-user-name" />
              </fieldset>
              {/* Add more form fields here */}
              <input type="submit" value="Add" />
            </form>
          </div>
        </section>
        {/* Event-management */}
        <section className="event-management">
          <h2>Event Management</h2>
          <div>
            <h3>All Events</h3>
            <ul id="events-list">
              {/* Display all Events here */}
              <li>...</li>
            </ul>

            <h3>Add Event</h3>
            <form id="add-event" action="#">
              <fieldset>
                <label>Name</label>
                <input
                  type="text"
                  id="add-event-name"
                  placeholder="Virtual corgi meetup"
                />
              </fieldset>
              {/* Add more form fields here */}
              <input type="submit" />
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div>
          Star Calendar favicon made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>
          Find your own on
          <a href="https://www.flaticon.com/" title="Flaticon">
            FlatIcon.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
