import React from "react";


function Header () {
    return (
        <div style={styles.header} className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Search for employees</p>
            </div>
        </div>
    );
};

const styles = {
    header: {
        backgroundColor: "#FF4500", 
        text: "white",
        display: "flex", 
        textAlign: "center",
    },
};

export default Header;