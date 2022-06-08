import React, {useEffect, useState}  from 'react'
import NewsFeedItems from './newsfeedItems'

const NewsFeed = () => {
    const [data, setData] = useState(null)
    const fetchData = async () => {
      return await 
        fetch('https://www.reddit.com/.json')
        .then(response => response.json())
        .then(({data}) => setData(data['children']))
    }
  
    useEffect(() => {
      fetchData()
    },[])

    return (
        <div>
            <h1>NewsFeed</h1>
            <div>{data?.map(({data}, index) => <NewsFeedItems key={index} article={data}/>)}</div>
        </div>
    )
}

export default NewsFeed