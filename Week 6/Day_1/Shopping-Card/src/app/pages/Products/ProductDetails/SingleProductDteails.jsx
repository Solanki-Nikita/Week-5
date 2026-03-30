import React, { Fragment, useMemo, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import TopNavbar from "../../../Components/Header/TopNavbar";
import "./ProductDetails.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../Components/Footer/Footer";
import { addToCarts } from "../../../Features/Cart/CartSlice";

function SingleProductDetails() {
  const { productId } = useParams();
  const parsedId = Number(productId);

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { products = [], isLoading = false } =
    useSelector((state) => state.products || {});

  // ✅ derive product instead of storing it
  const product = useMemo(() => {
    if (!parsedId || products.length === 0) return null;
    return products.find((p) => p.id === parsedId) || null;
  }, [parsedId, products]);

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Add to cart
  const handleAddToCart = () => {
    if (!product) return;

    dispatch(
      addToCarts({
        id: parsedId,
        quantity,
        price: product.price,
        title: product.title,
        image: product.image,
      })
    );
  };

  // Loading state
  if (isLoading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  // Product not found
  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  return (
    <Fragment>
      <TopNavbar />

      <Container>
        <Row className="my-5">
          <Col md={6} sm={12}>
            <div className="img-container p-3">
              <Image src={product.image} alt={product.title} />
            </div>
          </Col>

          <Col md={6} sm={12}>
            <div className="px-4">
              <h2>{product.title}</h2>

              <h4 className="py-2 fs-5">
                Category:{" "}
                <Link to={`/category/${product.category}`}>
                  {product.category}
                </Link>
              </h4>

              <h4 className="py-2">Price: ${product.price}</h4>

              <p>{product.description}</p>

              <div className="d-flex mb-3">
                <button
                  className="btn btn-dark me-3"
                  onClick={decreaseQuantity}
                >
                  <FaMinus />
                </button>

                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="form-control text-center w-auto"
                />

                <button
                  className="btn btn-dark ms-3"
                  onClick={increaseQuantity}
                >
                  <FaPlus />
                </button>
              </div>

              <Button variant="secondary" onClick={handleAddToCart}>
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </Fragment>
  );
}

export default SingleProductDetails;