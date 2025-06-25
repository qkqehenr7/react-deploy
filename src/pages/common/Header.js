export default function Header(){

  return (
      <header className="header">
        <nav className="navbar white">
          <div className="nav-wrapper ">
            <a href="/" className="brand-logo grey-text">Grepp</a>
            <ul id="nav-mobile"
                className="right hide-on-med-and-down grey-text">
              <li><a href="/login" className="grey-text">signin</a>
              </li>
              <li><a href="/member/signup" className="grey-text">signup</a>
              </li>
              <li>
                <a href="mobile.html">
                  <i className="material-icons grey-text sidenav-trigger"
                     data-target="slide-out">more_vert</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  )
}