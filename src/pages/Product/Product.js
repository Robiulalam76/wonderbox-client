import React, { useEffect, useState } from "react";
import ProductCard from "../../components/cards/ProductCard";
import {
  Button,
  Card,
  Input,
  List,
  ListItem,
  Spinner,
} from "@material-tailwind/react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchTitles, setSearchTitles] = useState([]);
  const [openTitle, setOpenTitle] = useState(false);
  const [page, setPage] = useState(1);

  const getProducts = () => {
    setIsLoading(true);
    const searchData = search && `&search=${search}`;
    fetch(
      `http://localhost:5000/api/product/pagination/show?page=${page}${
        searchData ? searchData : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, []);

  const handleTites = (data) => {
    setSearch(data);
    fetch(`http://localhost:5000/api/product/search/title?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchTitles(data.data);
      });
  };

  const handleSetSearch = (data) => {
    setSearch(data);
    getProducts();
    setOpenTitle(false);
  };

  return (
    <div className="mt-6 max-w-primary mx-auto px-4">
      <div className="mb-6 relative mx-auto mr-0 max-w-[500px]">
        <div className="flex items-center justify-end">
          <Input
            onChange={(e) => handleTites(e.target.value)}
            onClick={() => setOpenTitle(!openTitle)}
            className="rounded-none focus:rounded-none"
            type="search"
            value={search}
            placeholder="Search"
          />
          <Button
            onClick={() => getProducts()}
            className="rounded-none shadow-none hover:shadow-none"
          >
            Search
          </Button>
        </div>
        {openTitle && (
          <Card className="absolute z-50 w-full overflow-hidden rounded-md">
            <List className="p-0 my-2">
              {searchTitles?.length > 0 ? (
                <>
                  {searchTitles?.map((data, i) => (
                    <ListItem
                      key={i}
                      onClick={() => handleSetSearch(data?.title)}
                      className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white cursor-pointer"
                    >
                      {data?.title}
                    </ListItem>
                  ))}
                </>
              ) : (
                <div>
                  <Spinner className="h-10 w-10 mx-auto" />
                </div>
              )}
            </List>
          </Card>
        )}
      </div>

      {isLoading ? (
        <div className="min-h-screen flex justify-center mt-32">
          <Spinner className="h-16 w-16" />
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products?.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
