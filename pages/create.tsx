// pages/create.tsx

import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { toast } from "react-toastify";

const handleSuccess = () => {
  // Display a success message
  toast.success("Post created successfully", {
    position: "top-right", // You can specify the position
    autoClose: 3000, // Automatically close after 3 seconds
    hideProgressBar: false, // Show a progress bar
    closeOnClick: true, // Close on click
    pauseOnHover: true, // Pause on hover
  });
};

const handleError = () => {
  // Display an error message
  toast.error("Error creating post", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      const response = await fetch("/api/post/CreatePost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Display a success message
      toast.success("Post created successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });

      await Router.push("/drafts");
    } catch (error) {
      // Display an error message
      toast.error("Error creating post", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      // Handle the error gracefully, e.g., show an error message to the user
    }
  };

  // const submitData = async (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   try {
  //     const body = { title, content };
  //     await fetch("/api/post", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     });
  //     await Router.push("/drafts");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const submitData = async (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   try {
  //     const body = { title, content };
  //     const response = await fetch("/api/post/CreatePost", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     });

  //     if (!response.ok) {
  //       // Handle HTTP errors
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     await Router.push("/drafts");
  //   } catch (error) {
  //     console.error("Error creating post:", error);
  //     // Handle the error gracefully, e.g., show an error message to the user
  //   }
  // };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Draft</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          <input disabled={!content || !title} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: var(--geist-background);
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;
