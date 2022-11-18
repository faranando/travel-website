import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Button(props) {
    const className = [props.className]
    if(props.isPrimary) className.push("btn-primary")
    if(props.isLarge) className.push("btn-lg")
    if(props.isSmall) className.push("btn-sm")
    if(props.isBlock) className.push("btn-block")
    if(props.hasShadow) className.push("btn-shadow")
    
    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    if(props.isDisabled || props.isLoading){
        if(props.isDisabled) className.push("disabled");
        return( 
        <span className={className.join(" ")} style={props.style}>
            
            {props.isLoading ? (
             <>
                <span className="spinner-border spinner-border-sm mx-5"></span>
                <span className="sr-only">Loading...</span>
             </>
            ) : (
                props.children
            )}
        </span>
        )
    }

    if(props.type === "link"){
        if(props.isExternal){
            return(
                <a 
                href={props.herf} 
                className={className.join(" ")} 
                style={props.style} 
                target={props.target === "_blank" ?"_blank":undefined} 
                rel={props.target==="_blank" ? "noopener noreferrer": undefined} 
                >
                    {props.children}
                </a>
            );
        } else {
            return (
                <Link to={props.href}
                className={className.join(" ")}
                style={props.style} 
                onClick={props.onClick}
                >
                {props.children}
                </Link>
              )
        }
    }
  return (
    <button
    className={className.join(" ")}
    style={props.style} 
    onClick={props.onClick}
    >
    {props.children}
    </button>
  )
}

Button.propTypes={
    type: PropTypes.oneOf(["button", "link"]),
    onClick: PropTypes.func,
    href: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    isExternal: PropTypes.bool,
    isSmall: PropTypes.bool,
    isLarge: PropTypes.bool,
    isBlock: PropTypes.bool,
    hasShadow: PropTypes.bool,
}