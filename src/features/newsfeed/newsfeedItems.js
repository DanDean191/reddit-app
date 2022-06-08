import React from 'react'

const NewsFeedItems = ({article}) => {
    console.log(article)
    const { url } = article

  return (
    <div>
        <h2>NewsFeedItems</h2>
        {url && <img src={url}></img>}
    </div>
  )
}

export default NewsFeedItems