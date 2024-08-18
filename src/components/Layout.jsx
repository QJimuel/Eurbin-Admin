import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
    <header className="header">
        <h1 className="header-title">EURBin</h1>
    </header>

    <div className="container">
        <aside style={styles.sidebar}>
          <ul style={styles.sidebarList}>

              <li style={styles.sidebarItem}>
                <Link to="/Dashboard" style={styles.sidebarLink}>
                  <span role="img" aria-label="dashboard">✏️</span> Dashboard
                </Link>
              </li>
              <li style={styles.sidebarItem}>
                <Link to="/Analytics" style={styles.sidebarLink}>
                  <span role="img" aria-label="analytics">✏️</span> Analytics
                </Link>
              </li>
              <li style={styles.sidebarItem}>
                <Link to="/" style={styles.sidebarLink}>
                  <span role="img" aria-label="instructions">✏️</span> Instructions
                </Link>
              </li>
              <li style={styles.sidebarItem}>
                <Link to="/Manage" style={styles.sidebarLink}>
                  <span role="img" aria-label="management">✏️</span> Management 
                </Link>
              </li>
              <li style={styles.sidebarItem}>
                <Link to="/" style={styles.sidebarLink}>
                  <span role="img" aria-label="change-password">✏️</span> Edit Profile
                </Link>
              </li>
              <li style={styles.sidebarItem}>
                <Link to="/" style={styles.sidebarLink}>
                  <span role="img" aria-label="change-password">✏️</span> Change Password
                </Link>
              </li>
              <li style={styles.sidebarItem}>
                <Link to="/" style={styles.sidebarLink}>
                  <span role="img" aria-label="logout">✏️</span> Logout
                </Link>
              </li>

          </ul>
        </aside>

        <main className="main-content">
          <h2 className="main-title"></h2>
          {/*<header style={styles.header}>
          <Link to="/home" style={styles.link}>
            <button style={styles.button}>
              <span role="img" aria-label="record">🏠</span>Home
            </button>
          </Link>
          <nav style={styles.nav}>
            <ul style={styles.navList}>
            <li style={styles.navItem}>
                <Link to="/Record" style={styles.link}>
                  <button style={styles.button}>
                    <span role="img" aria-label="record">📋</span> Record
                  </button>
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/Manage" style={styles.link}>
                  <button style={styles.button}>
                    <span role="img" aria-label="edit">✏️</span> Edit Reward
                  </button>
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/Add" style={styles.link}>
                  <button style={styles.button}>
                    <span role="img" aria-label="add">➕</span> Add Reward
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
          </header>*/ }
          

          <main style={styles.main}>
            <Outlet />
          </main>
        </main>
    
    </div>
    </>
  );
}

const styles = {
  header: {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    marginTop: '15%', // Adjust this value to move the header lower
  },
  sidebar: {
    width: '300px',
    height: '100vh',
    backgroundColor: '#800000',
    opacity: 0.94,
    color: 'white',
    padding: '20px',
  },
  sidebarList: {
    listStyle: 'none',
    padding: 0,
  },
  sidebarItem: {
    marginBottom: '20px',
  },
  sidebarLink: {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',             // space between icon and text
    marginLeft: '20px',
  },
  logo: {
    fontSize: '24px',
    color: 'black',
  },
  nav: {
    display: 'flex',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '10px',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: 'black',
  },
  main: {
    padding: '20px',
  },
  title: {
    color: 'darkred',
  },
};

export default Layout;
