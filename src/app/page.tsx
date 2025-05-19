export default function Home() {
  return (
    <>
      <div>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contact-us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <h2 className="text-center text-bg-primary m-2 p-2">
          Bootstrap 5 with Next.js
        </h2>
        <div className="container-fluid m-2 border border-success text-center">
          <h4>Components</h4>{' '}
          <div className="row m-2 ">
            <div className="col-sm">First Component</div>
            <div className="col-sm">Second Component</div>
            <div className="col-sm">Third Component</div>
          </div>
        </div>
        <div className="container-fluid m-2 border text-center">
          <h4>Buttons</h4>
          <div className="row m-2 justify-content-between ">
            <div className="col-sm-auto">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
            </div>
            <div className="col-sm-auto">
              <button type="button" className="btn btn-secondary">
                Secondary
              </button>
            </div>
            <div className="col-sm-auto">
              <button type="button" className="btn btn-success">
                Success
              </button>
            </div>
            <div className="col-sm-auto">
              <button type="button" className="btn btn-danger">
                Danger
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid m-2 border text-center">
          <p className="muted">
            Placeholder text to demonstrate some{' '}
            <a
              href="#"
              data-bs-toggle="tooltip"
              data-bs-title="Default tooltip"
            >
              inline links
            </a>{' '}
            with tooltips. This is now just filler, no killer. Content placed
            here just to mimic the presence of{' '}
            <a
              href="#"
              data-bs-toggle="tooltip"
              data-bs-title="Another tooltip"
            >
              real text
            </a>
            . And all that just to give you an idea of how tooltips would look
            when used in real-world situations. So hopefully you've now seen how{' '}
            <a
              href="#"
              data-bs-toggle="tooltip"
              data-bs-title="Another one here too"
            >
              these tooltips on links
            </a>{' '}
            can work in practice, once you use them on{' '}
            <a href="#" data-bs-toggle="tooltip" data-bs-title="The last tip!">
              your own
            </a>{' '}
            site or project.
          </p>
        </div>
      </div>
    </>
  );
}
