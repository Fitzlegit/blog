import React from 'react'

const BlogContext = React.createContext();

const BlogProvider = () => {
  return <BlogContext.Provider>
    {children}
  </BlogContext.Provider>;
}
