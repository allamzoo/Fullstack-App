import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,  faTrash , faEdit } from '@fortawesome/free-solid-svg-icons';
import logo from './label.jpeg';
import './dashboard.css';
import ThemeContext from './ThemeContext'; // Import ThemeContext

function OrganizationDonationPosts() {
    const initialPosts = [
        { id: 1, title: 'Post 1', description: 'Description for post 1' },
        { id: 2, title: 'Post 2', description: 'Description for post 2' },
    ];
    const [posts, setPosts] = useState(initialPosts);
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Access theme context

    const handleDeletePost = (postId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this post?');
        if (confirmDelete) {
            const deletedPost = posts.find(post => post.id === postId);
            setPosts(posts.filter((post) => post.id !== postId));
            alert(`Post "${deletedPost.title}" deleted successfully!`);
        }
    };

    const handleEditPost = (postId) => {
        const updatedTitle = prompt('Enter updated title:');
        if (updatedTitle !== null) {
            const updatedDescription = prompt('Enter updated description:');
            if (updatedDescription !== null) {
                setPosts(posts.map((post) => {
                    if (post.id === postId) {
                        return {
                            ...post,
                            title: updatedTitle,
                            description: updatedDescription
                        };
                    }
                    return post;
                }));
                alert('Post updated successfully!');
            }
        }
    };
    const home = () => {
        
        window.location.href = '/';
    };

    return (
        <div className={isDarkTheme ? 'full-screen dark-theme' : 'full-screen light-theme'}>
            <div className="logo-bar" style={{ padding: '20px' }}>
                <img src={logo} className="logo" alt="logo" style={{ width: '600px', height: '120px' }} />
            </div>
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
            <div className="content-wrapper">
                <h2>Organization Donation Posts</h2>
                <div style={{ marginTop: '20px' }}>
                    {posts.map((post) => (
                        <div key={post.id} className={isDarkTheme ? 'donation-post dark-theme' : 'donation-post light-theme'}>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <button className="delete-button" onClick={() => handleDeletePost(post.id)}> <FontAwesomeIcon icon={faTrash} />Delete</button>
                            <button className="edit-button" onClick={() => handleEditPost(post.id)}><FontAwesomeIcon icon={faEdit} />Edit</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OrganizationDonationPosts;
