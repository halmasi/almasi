import Titles from "./components/Titles";

function notFound() {
  return (
    <>
      <Titles>The page you were looking for was not found</Titles>
      <p className="text-center">error - 404</p>
    </>
  );
}

export default notFound;
