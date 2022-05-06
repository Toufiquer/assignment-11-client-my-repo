import React from "react";

const Blogs = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="display-4 py-3">
                        Q1.Difference between Javascript and NodeJS
                    </div>
                    <table className="table table-striped table-dark table-bordered table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Javascript</th>
                                <th>NodeJS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    Javascript is a programming language that is
                                    used for writing scripts on the website.
                                </td>
                                <td>
                                    NodeJS is a Javascript runtime environment.
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    Javascript can only be run in the browsers.
                                </td>
                                <td>
                                    We can run Javascript outside the browser
                                    with the help of NodeJS.
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    It is basically used on the client-side.
                                </td>
                                <td>It is mostly used on the server-side.</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    Javascript is capable enough to add HTML and
                                    play with the DOM.
                                </td>
                                <td>
                                    Nodejs does not have capability to add HTML
                                    tags.
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    Javascript can run in any browser engine as
                                    like JS core in safari and Spidermonkey in
                                    Firefox.
                                </td>
                                <td>
                                    V8 is the Javascript engine inside of
                                    node.js that parses and runs Javascript.
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>
                                    Javascript is used in frontend development.
                                </td>
                                <td>
                                    Nodejs is used in server-side development.
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>
                                    Some of the javascript frameworks are
                                    RamdaJS, TypedJS, etc. Some of the Nodejs
                                    modules are Lodash, express etc.
                                </td>
                                <td>
                                    These modules are to be imported from npm.
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>
                                    It is the upgraded version of ECMA script
                                    that uses Chrome's V8 engine written in C++.
                                </td>
                                <td>
                                    Nodejs is written in C, C++ and Javascript.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-12">
                    <div className="display-4 py-4">
                        Q2.When should you use nodejs and when should you use
                        mongodb.
                    </div>

                    <table className="table table-striped table-dark table-bordered">
                        <thead>
                            <tr>
                                <th width="10">No</th>
                                <th>It depends on situation.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    MongoDB and NodeJS are two different
                                    technologies. MongoDB is a database system
                                    which gives you a chance to efficiently
                                    store documents in a database and to perform
                                    operations like data updates, or to search
                                    documents by some criteria.
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    MongoDB offers an API library that runs
                                    within a Nodejs application to give you
                                    programmatic access to MongoDB so you can
                                    create databases and then add, query, update
                                    or delete data from the MongoDB database.
                                    MongoDB also has API libraries for other
                                    programming environments such as Python,
                                    Java, etc...
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    MongoDB is a database engine. Code within
                                    some application or server uses MongoDB to
                                    save, query or update data in a database.
                                    There are many web servers built with nodejs
                                    that will then use MongoDB for storing data.
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    Nodejs is a Javascript engine that you can
                                    write any application you want with (by
                                    programming in the Javascript language). It
                                    runs your Javascript code. Most commonly, it
                                    is used to build servers that can respond to
                                    web requests, though it can be used for lots
                                    of other types of code too.
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    NodeJS's responsibility is especially to
                                    execute your application.
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>6</th>
                                <th>
                                    These two technologies are for different
                                    parts of a typical web server system. You
                                    don't substitute one for the other. Instead,
                                    you can use them together.
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="col-12">
                    <div className="display-4 py-4">
                        Q3.Differences between SQL and NoSQL databases.
                    </div>
                    <table className="table table-striped table-dark table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Relational</td>
                                <td>Non-Relational</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    Use structured query language and have a
                                    predefined schema.
                                </td>
                                <td>
                                    NoSQL databases have dynamic schemas for
                                    unstructured data.
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>SQL are vertically scalable</td>
                                <td>NoSQL are horizontally scalable.</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>SQL are table based </td>
                                <td>
                                    NoSQL are document, key-value,graph or
                                    wide-column stores.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-12">
                    <div className="display-4 py-4">
                        Q4.What is the purpose of jwt and how does it work
                    </div>
                    <table className="table table-striped table-dark table-bordered">
                        <thead>
                            <tr>
                                <td>No</td>
                                <th>Purpose of jwt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    JSON Web Tokens (JWT) is a JSON-encoded
                                    representation of a claim or claims that can
                                    be transferred between two parties.
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    Though it's a very popular technology, JWT
                                    authentication comes with its share of
                                    controversy. Some say you should never use
                                    it. Others say JWT authentication is
                                    amazing.
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    The truth lies somewhere in between: the
                                    value of using JWT depends on your use case
                                    an
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table table-striped table-dark table-bordered">
                        <thead>
                            <tr>
                                <th width="10">No</th>
                                <th>How does it work</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Register for API user.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Get API Token for user.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
