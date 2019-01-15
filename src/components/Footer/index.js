import React from "react"
import CustomLink from "../CustomLink"

const Footer = ({ menuItems }) => {
    console.log(menuItems)
    return (
        <footer id="footer">
            <h3>This is the footersers</h3>
            <nav>
            {!!menuItems ?
                <div>
                {menuItems.map(menuItem => (
                    <CustomLink
                        key={menuItem.linkURL}
                        activeClassName="active"
                        linkType={menuItem.linkType}
                        linkURL={menuItem.linkURL}
                        className="nav__item"
                    >
                        {menuItem.label}
                    </CustomLink>
                ))}
                </div>
            : null }
            </nav>    
        </footer>
    )
}

export default Footer 
