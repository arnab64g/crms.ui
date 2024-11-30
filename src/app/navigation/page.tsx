'use client'
import { AppBar, Button, Toolbar } from "@mui/material";
import Link from "next/link";
import { get_role } from "../service/user";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const role : string | null =  get_role();
  const router = useRouter();
  
  const isLoggedIn : boolean  = role == null ? false : true;


  if (isLoggedIn) {
    switch (role) {
      case "Admin":
        return(
          <AppBar color="primary">
          <Toolbar>
            {
              <div>
              <Link className="nav-btn" href='/petitioner'>Petitioner</Link>
              <Link className="nav-btn" href='/fir'>FIR</Link>
              <Link className="nav-btn" href='/investigate'>Officer</Link>
              <Link className="nav-btn" href='/case_list'>Case</Link>
              <Link className="nav-btn" href='/accused'>Accused</Link>
              
            </div> 
            }
          </Toolbar>
        </AppBar>
        )
        break;
    case "Officer":
      return(
        <AppBar color="primary">
        <Toolbar>
        {
            <div>
            <Link className="nav-btn" href='/fir'>FIR</Link>
            <Link className="nav-btn" href='/accused'>Accused</Link>
          </div> 
          }
        </Toolbar>
      </AppBar>
      )
      break;
      default:
        return(
          <AppBar className="nav" color="primary">
          <Toolbar className="nav">
            {
              <div >
              <Link color="secondary" className="nav-btn" href='/my_fir'>My FIR</Link>
              <Button className="gap" disabled></Button>
              <Button color="secondary"  className="nav-log-btn" variant="contained" onClick={() => {localStorage.removeItem('user'); router.refresh()}}>Logout</Button>
            </div> 
            }
          </Toolbar>
          
        </AppBar>
        )
        break;
    }
    
  }
  else {
    return(
      <AppBar color="primary">
  <Toolbar>
            {
              <div className="user">
                <Link className="nav-btn"  href="/user/login">Login</Link>
                <Link className="nav-btn" href='/user/register'>Register</Link>  
              </div>
            }
          </Toolbar>
        </AppBar>
    )
    
  }
}