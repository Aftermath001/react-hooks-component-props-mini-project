import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import data from '../data/blog';
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Underated" />
      <main>
      <About image={data.image} aboutText={data.about} />
        <ArticleList articles={data.posts} />
      </main>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
