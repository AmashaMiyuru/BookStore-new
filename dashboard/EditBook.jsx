import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBook = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} =  useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art & Design"
  ]
  const [selectedBookCategory, setselectedBookCategory]= useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setselectedBookCategory(event.target.value);
  }
  const handleUpdate = async (event) => {
     event.preventDefault();
     const form = event.target;

     const bookTitle =  form.bookTitle.value;
     const authorName = form.authorName.value;
     const imageURL = form.imageURL.value;
     const category = form.categoryName.value;
     const bookDescription = form.bookDescription.value;
     const bookPDFURL = form.bookPDFURL.value;
     
     const UpdateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
     }

    // console.log(bookObj);
    //updateBook
    fetch(`http://localhost:5000/book/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateBookObj), // Ensure the book object is sent in the request body
    }).then(res => res.json()).then(data => {
      alert("book is updated successfully!");
     
    })

     
  };
  
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label
            htmlFor="bookTitle"
            value="Book Title"/>

          </div>
          <TextInput
          id="bookTitle"
          name='bookTitle'
          placeholder="Book Name"
          required
          type="text"
          defaultValue={bookTitle}/>

        </div>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label
            htmlFor="authorName"
            value="Author Name"/>

          </div>
          <TextInput
          id="authorName"
          name='authorName'
          placeholder="Author Name"
          required
          type="text"
          defaultValue={authorName}/>

        </div>
        </div>
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label
            htmlFor="imageURL"
            value="Book Image URL"/>

          </div>
          <TextInput
          id="imageURL"
          name='imageURL'
          placeholder="Book Image URL"
          required
          type="text"
          defaultValue={imageURL}/>

        </div>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label
            htmlFor="inputState"
            value="Book Category"
            defaultValue={bookCategories}/>

          </div>
          <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
            {
              bookCategories.map((option) => <option key={option}>{option}</option>)
            }
          </Select>
          

        </div>
        </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description"
          />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Write your book description..." required 
        className='w-full'
       rows={5}
       defaultValue={bookDescription}/>
      </div>
      
        <div >
          <div className="mb-2 block">
            <Label
            htmlFor="bookPDFURL"
            value="Book PDF URL"/>

          </div>
          <TextInput
          id="bookPDFURL"
          name='bookPDFURL'
          placeholder="Book PDF URL"
          required
          type="text"
          defaultValue={bookPDFURL}/>

        </div>
        <Button type="submit" className='mt-5 bg-green-900 items-center'>Update  Book</Button>
       
        
      
    </form>
    </div>
  )
}

export default EditBook