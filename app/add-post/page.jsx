'use client'
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';


export default function AddPost(){
        const [content, setContent] = useState('');
        const router = useRouter()
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          // Assuming you want to handle form submission here, you can make a POST request to your API endpoint
          try {
            const response = await fetch('/api/add-post', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ content }),
            });
      
            if (response.ok) {
              console.log('Form submitted successfully!');
              router.refresh()
              // Optionally, you can do something after successful submission like redirecting to a success page
            } else {
              console.error('Failed to submit form');
            }
          } catch (error) {
            console.error('Error submitting form:', error);
          }
        };
      
        const handleChange = (e) => {
          setContent(e.target.value);
        };
    
    return (
        <main>
        <h1>Add Post</h1>
        <form onSubmit={handleSubmit} >
      <label>
        Content:
        <input type="text" value={content} onChange={handleChange} className='text-black'/>
      </label>
      <button type="submit">Submit</button>

    </form>
    <Link href='/'>view feed</Link>
        </main>
    )
}