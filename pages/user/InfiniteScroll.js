import React, { useEffect, useState } from "react";
import Layout from "../../component/Layout";

const InfiniteScroll = () => {
  const [user, setUser] = useState([]);
  const ITEM_PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    console.log(user.length);
    if (!hasMore) return;
    const searchUserURL = `https://api.github.com/search/users?q=dcoder&page=${page}&per_page=${ITEM_PER_PAGE}`;

    fetch(searchUserURL)
      .then((res) => res.json())
      .then((data) => {
        if (data.total_count === user.length + data.items) {
          setHasMore(!hasMore);
        }
        setUser([...user, ...data.items]);
        setPage((page) => page + 1);
      });
  };

  const loadMoreData = () => {
    if (page > 1) {
      getData();
    }
  };

  return (
    <Layout>
      <div className="row">
        <div className="col text-center">
          <h2>Infinite Scrolling Loader!!!</h2>

          <div className="col-sm-6 offset-sm-3">
            <div className="card">
              <div className="card-header bg-dark text-white text-left">
                <h4 className="d-inline">Users List</h4>
              </div>
              <ul className="list-group list-group-flush">
                {user &&
                  user.map((user, idx) => (
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">this the </h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  ))}
              </ul>
            </div>
          </div>
          {hasMore && <button onClick={() => loadMoreData()}>Load More</button>}
        </div>
      </div>
    </Layout>
  );
};

export default InfiniteScroll;
