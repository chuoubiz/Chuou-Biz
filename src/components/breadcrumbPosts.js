import React from 'react'

const breadcrumbPosts = (props) => {
  return (
    <>
      <div className='breadcrumb'>
        <ul id="page_navi">
            <li><a href="/">ホーム</a></li>
            <li><a href={props.url}>{props.cat}</a></li>
            <li>{props.title}</li>
        </ul>
    </div>
    </>
  )
}

export default breadcrumbPosts
