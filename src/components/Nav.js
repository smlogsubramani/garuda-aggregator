import "./Nav.css"

const Nav = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">DASHBOARD</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link"  href="/dashboard">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Merchants</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Dealers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Acess</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/db-merchant-user-payments">Payments</a>
      </li>
      
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link"  href="/db-merchant-profile"><i class="bi bi-person"></i> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="bi bi-bell"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/db-merchant-user-help"><i class="bi bi-question-circle"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="bi bi-three-dots-vertical"></i></a>
      </li>
     
      
    </ul>
  </div>
</nav> 
        </div>
    )
}

export default Nav
