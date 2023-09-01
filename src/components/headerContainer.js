import React from "react";



/// feito pra testar o children
const HeaderContainer = ({children}) => {
  return (
    <div className='headerContainer'>
      {children}
    </div>
  )
}

export default HeaderContainer