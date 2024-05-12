import React, { useState,  useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTrash } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import './HomeScreen.css';
import ThemeContext from './ThemeContext'; // Import ThemeContext

function OrganizationDonationPosts() {
    const initialPosts = [
        { id: 1, title: 'Post 1', description: 'Description for post 1', fulfilled: false },
        { id: 2, title: 'Post 2', description: 'Description for post 2', fulfilled: true },
    ];
    const [posts, setPosts] = useState(initialPosts);
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Access theme context

    const handleDeletePost = (postId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this post?');
        if (confirmDelete) {
            setPosts(posts.filter((post) => post.id !== postId));
            alert('Post deleted successfully!');
        }
    };
    const home = () => {
        
        window.location.href = '/dashboard';
    };

    return (
        <div className={isDarkTheme ? 'full-screen dark-theme' : 'full-screen light-theme'}>
            <div className="logo-bar">
                <img src={logo} className="logo" alt="logo" style={{ width: '600px', height: '120px' }} />
                <div className="button-container">    
            <label className="theme-switch" htmlFor="theme-switch">
          <input
            type="checkbox"
            id="theme-switch"
            checked={isDarkTheme}
            onChange={toggleTheme}
          />
          <div className="slider"></div>
        </label>
         
          <button className="home-button" onClick={home}>
          <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />
           Home
          </button>
          </div>
          
            </div>
           
            <div className="content-wrapper">
                <h2>Organization Donation Posts</h2>
                <div style={{ marginTop: '20px' }}>
                    {posts.map((post) => (
                        <div key={post.id} className={isDarkTheme ? 'donation-post dark-theme' : 'donation-post light-theme'}>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            {post.fulfilled && (
                                <button className="delete-button" onClick={() => handleDeletePost(post.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                    Delete
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OrganizationDonationPosts;