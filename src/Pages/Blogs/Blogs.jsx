

const Blogs = () => {
    return (
        <div className="container lg:w-2/4 mx-auto my-10">
            <div className="mb-8">
                <h2 className="font-bold text-2xl mb-3">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="p-4"><strong>Access Token:</strong> An access token is a credential that is used to access protected resources on behalf of an authenticated user.</p>
                <p className="p-4"><strong>Refresh Token:</strong> A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires. Unlike the access token, the refresh token is not sent with every API request.</p>
                <p className="p-4"> It is typically stored in memory or a short-lived storage mechanism, such as browser memory (e.g., JavaScript variable) or a local storage. Storing it in an HTTP-only cookie can also provide some protection against cross-site scripting (XSS) attacks.</p>
            </div>
            <div className="mb-8">
                <h2 className="font-bold text-2xl mb-3">2. Compare SQL and NoSQL databases?</h2>
                <p className="p-4">SQL: SQL databases follow a relational data model, where data is organized into tables with rows and columns. Relationships between tables are defined using foreign keys.NoSQL: NoSQL databases use various data models, such as key-value pairs, document-based, columnar, or graph-based. They offer more flexibility in structuring data and can handle unstructured or semi-structured data effectively.</p>
                <p className="p-4">SQL: SQL databases are well-suited for applications that require complex relationships, structured data, and ACID compliance. They are commonly used in traditional enterprise systems, financial applications, and data analysis scenarios.NoSQL: NoSQL databases excel in handling unstructured or semi-structured data, rapid development, and scalability. They are often chosen for use cases such as content management systems, real-time analytics, IoT applications, and handling high-velocity data.</p>
                <p className="p-4"> SQL: SQL databases use SQL as the standardized query language, providing a rich set of operations for data retrieval, manipulation, and analysis. SQL offers powerful querying capabilities, including joins, aggregations, and complex queries. NoSQL: NoSQL databases use various query languages specific to their data model. For example, document databases often use query languages similar to JSON or JavaScript object notation.</p>
            </div>
            <div className="mb-8">
                <h2 className="font-bold text-2xl mb-3">3. What is express js? What is Nest JS?</h2>
                <p className="p-4">Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible set of features for building web applications and APIs. Express.js is known for its simplicity and unopinionated nature, allowing developers to have more control over the application structure and components.</p>
                <p className="p-4">On the other hand, Nest.js is a framework for building scalable and efficient server-side applications using TypeScript. It is built on top of Express.js and provides a higher-level abstraction with a modular and opinionated architecture. Nest.js follows the principles of Dependency Injection, Decorators, and Modules, inspired by Angular and other frameworks.</p>
            </div>
            <div className="mb-8">
                <h2 className="font-bold text-2xl mb-3">4. What is MongoDB aggregate and how does it work?</h2>
                <p className="p-4">In MongoDB, the aggregate method is a powerful feature that allows you to perform advanced data aggregation operations on your collections. It provides a flexible and expressive way to manipulate, transform, and analyze data within the database.The aggregate method in MongoDB works by processing data through a pipeline of multiple stages. Each stage performs a specific operation on the data and passes the transformed data to the next stage. The result of the aggregation pipeline is the output of the last stage.</p>
            </div>
        </div>
    );
};

export default Blogs;