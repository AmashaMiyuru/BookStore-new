import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";


const UploadBook = () => {
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
  const handleBookSubmit = async (event) => {
     event.preventDefault();
     const form = event.target;

     const bookTitle =  form.bookTitle.value;
     const authorName = form.authorName.value;
     const imageURL = form.imageURL.value;
     const category = form.categoryName.value;
     const bookDescription = form.bookDescription.value;
     const bookPDFURL = form.bookPDFURL.value;
     
     const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
     }

     console.log(bookObj);

     try {
      const response = await fetch("http://localhost:5000/upload-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookObj), // Ensure the book object is sent in the request body
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      alert("Book uploaded successfully!");
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert("Failed to upload the book. Please try again later.");
    }
  };
  
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
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
          type="text"/>

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
          type="text"/>

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
          type="text"/>

        </div>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label
            htmlFor="inputState"
            value="Book Category"/>

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
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Write your book description..." required 
        className='w-full'
       rows={5}/>
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
          type="text"/>

        </div>
        <Button type="submit" className='mt-5 bg-green-900 items-center'>Upload Book</Button>
       
        
      
    </form>
    </div>
  )
}

export default UploadBook