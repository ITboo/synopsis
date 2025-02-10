import { Link } from "react-router-dom";
import { trpc } from "./lib/trpc";
import { getViewItemRoute } from "./lib/routes";

const List = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getItems.useQuery();
  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <h1>All Items</h1>
      {data.items.map((item) => (
        <div key={item.id}>
          <Link to={getViewItemRoute({ itemId: item.id })}>{item.id}</Link>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
