import { Link, Outlet } from "react-router-dom";

function Products() {
    return (
      <div>
        <h1>Products Page</h1>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/products/car">Cars</Link> |{" "}
          <Link to="/products/bike">Bikes</Link>
        </nav> 
        <Outlet /> 
      </div>
    );
  }

  export default Products;