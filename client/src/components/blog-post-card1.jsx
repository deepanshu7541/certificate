import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card1.css'

const BlogPostCard1 = (props) => {
  return (
    <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="blog-post-card1-image"
      />
      <div className="blog-post-card1-container">
        <span className="blog-post-card1-text">{props.label}</span>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  profileAlt: 'profile',
  label: 'CPD UK',
  title: '',
  rootClassName: '',
  imageAlt: 'image',
  description: '',
  profileSrc:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  imageSrc:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  author: 'Jon Doe',
  time: '5 min read',
}

BlogPostCard1.propTypes = {
  profileAlt: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  description: PropTypes.string,
  profileSrc: PropTypes.string,
  imageSrc: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
}

export default BlogPostCard1
