import React from 'react';
import CompA from './Component/CompA';

const App = () => {

  const arrObj = [
    {
      plan : "Free",
      
      payment : "$0/month",
      user :"singleuser",
      storage : "50GB storage",
      publicproject : "unlimited publlic project",
      Access : "Acommunity Access",
      privateproject : "unlimited private project",
      phonesupport : "Dedicated phone support",
      
      subdomain : "free subdomain",
      statusreports : "Monthly Status Reports",
    },
    {
      plan : "Plus",
      payment : "$9/month",
      user :"5 users",
      storage : "50GB storage",
      publicproject : "unlimited publlic project",
      Access : "Acommunity Access",
      privateproject : "unlimited private project",
      phonesupport : "Dedicated phone support",
      subdomain : "Free subdomain",
      statusreports : "Monthly Status Reports", 
    },
    {
      plan : "Pro",
      payment : "$49/month",
      user :"Unlimited users",
      storage : "50GB storage",
      publicproject : "unlimited publlic project",
      Access : "Acommunity Access",
      privateproject : "unlimited private project",
      phonesupport : "Dedicated phone support",
      subdomain : "Free subdomain",
      statusreports : "Monthly Status Reports", 
    },
    
  ]
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>React Price Card Task</h1>
      <p style={{ textAlign: 'center' }}>Reproduce this user interface using a React.js application with JSX. Write the code in a dynamic manner.</p>

      
      <CompA arrObj ={arrObj}/>
    </div>
  );
};

export default App;