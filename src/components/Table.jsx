import React, { useState, useEffect } from 'react';
import Pagination from 'react-paginate';
import Footer from './Footer';

function Table() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(10);
  const pageClass = 'pagination-page';
  const activePageClass = 'pagination-page-active';

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      ).then((res) => res.json());
      setPosts(result);
      console.log(result);
    };

    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div>
      <div className="table-responsive">
        {posts.length > 0 && (
          <>
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Body</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((post, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{post.id}</td>
                    <td className="border px-4 py-2">{post.title}</td>
                    <td className="border px-4 py-2">{post.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel="..."
              breakClassName="break-me"
              pageCount={Math.round(posts.length / postsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName="pagination-container"
              subContainerClassName="pagination-sub-container"
              pageClassName={pageClass}
              activeClassName={activePageClass}
              previousClassName={pageClass}
              nextClassName={pageClass}
              disabledClassName="pagination-page-disabled"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Table;
