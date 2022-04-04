import { useAuth0 } from "@auth0/auth0-react";
const Dashboardbtn = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return <div>Loading ...</div>;
    }
  
    return (
      isAuthenticated && (
       
    <a href="/dashboard">Dashboard</a>
     
     )
     );
   };
export default Dashboardbtn   