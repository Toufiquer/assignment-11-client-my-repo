import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ btnName, btnLink }) {
    let resolved = useResolvedPath(btnLink);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className="nav-link"
            style={{
                textDecoration: match ? "underline" : "none",
            }}
            to={btnLink}
        >
            {btnName}
        </Link>
    );
}

export default CustomLink;
