import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="my-5 text-center text-4xl font-medium">My Blog</h2>
      <div className="grid lg:grid-cols-2 gap-5 md:grid-cols-2 my-20 grid-cols-1 w-9/12 mx-auto">
        <div className=" bg-slate-200 py-4 px-5 shadow-md">
          <h3 className="py-5 text-lg">Difference between SQL and NoSQL?</h3>
          <p>
            Answer:- A SQL Database follows a table like structure which can
            have an unlimited number of rows and every data present inside the
            database is properly structured with Predefined Schemas, it is
            basically used to manipulate Relational Databases Management
            Systems. A NoSQL Database is a Distributed Database where the data
            is very unstructured with Dynamic Schema. Unlike SQL it cannot have
            unlimited rows but it follows a Standard Schema Definition and can
            store all sorts of data models with large distributed data in the
            form of key-value pairs, graph databases, documents or wide-column
            stores.
          </p>
        </div>
        <div className="bg-slate-200 py-4 px-5 shadow-md">
          <h3 className="py-5 text-lg">What is JWT, and how does it work?</h3>
          <p>
            Answer:- JSON Web Token (JWT) is an open standard (RFC 7519) for
            securely transmitting information between parties as JSON object. It
            is compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP). So the integrity and
            authenticity of the token can be verified by other parties involved.
            The purpose of using JWT is not to hide data but to ensure the
            authenticity of the data. JWT is signed and encoded, not encrypted.
            JWT is a token based stateless authentication mechanism. Since it is
            a client-side based stateless session, server doesn't have to
            completely rely on a datastore(database) to save session
            information.
          </p>
        </div>
        <div className="bg-slate-200 py-4 px-5 shadow-md">
          <h3 className="py-5 text-lg">What is the difference between javascript and NodeJS?</h3>
          <p>
            Answer:- JavaScript is a client-side scripting language that is
            lightweight, cross-platform, and interpreted. Both Java and HTML
            include it. Node.js, on the other hand, is a V8-based server-side
            programming language. As a result, it is used to create
            network-centric applications. It's a networked system made for
            data-intensive real-time applications. If we compare node js vs.
            python, it is clear that node js will always be the preferred
            option.
          </p>
        </div>
        <div className="bg-slate-200 py-4 px-5 shadow-md">
          <h3 className="py-5 text-lg">How does NodeJS handle multiple requests at the same time?</h3>
          <p className="">
          Answer:- Node’s main JavaScript thread uses an event loop. When multiple
            requests are made, the first is processed while the rest are blocked
            (until the first is complete). Each request is processed one loop at
            a time until they’re all processed. The loop executes very quickly
            and you kind of have to go out of your way to create apps that
            block. There’s an important caveat to this: user requests (like web
            requests) are not the same as function requests. Multiple users can
            submit requests and they’ll be processed within nanoseconds of each
            other (not noticeable without tooling). This differs from a process
            calling the same function/memory space at the same time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
