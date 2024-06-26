import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import 'flowbite/dist/flowbite.css';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/all-books')
      .then((res) => res.json())
      .then((data) => setAllBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  // Delete book
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Book is deleted successfully!');
        setAllBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      })
      .catch((error) => console.error('Error deleting book:', error));
  };

  return (
    <div className="px-4 my-12 overflow-x-auto">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      
      <Table className="min-w-full table-auto">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className='px-18'>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allBooks.map((book, index) => (
            <Table.Row key={book._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$10.00</Table.Cell>
              <Table.Cell>
                <Link 
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" 
                  to={`/admin/dashboard/edit/${book._id}`}
                >
                  Edit
                </Link>
                <button 
                  onClick={() => handleDelete(book._id)} 
                  className='bg-red-600 mx-5 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageBooks;
