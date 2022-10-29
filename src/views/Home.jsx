import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from 'react';

export const Home = () => {
    
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) 
            throw new Error("HTTP error " + response.status);
        else
            return await response.json();
    };

    useEffect(() => {
        getPosts()
            .then(posts => setPosts(posts))
            .catch(error => console.log(error)); 

    }, []);


    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                    {posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </Grid>
            </Grid>
        </Container>
    )
};