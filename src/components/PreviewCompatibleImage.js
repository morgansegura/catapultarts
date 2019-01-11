import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {

  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={{ width: imageInfo.imageWidth + 'px' }} fluid={image.childImageSharp.fluid} alt={imageInfo.imageLabel} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={{ width: imageInfo.imageWidth + 'px' }} fluid={childImageSharp.fluid} alt={imageInfo.imageLabel} />
  }

  if (!!image && typeof image === 'string')
    return <img style={{ width: imageInfo.imageWidth + 'px' }} src={image} alt={imageInfo.imageLabel} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
