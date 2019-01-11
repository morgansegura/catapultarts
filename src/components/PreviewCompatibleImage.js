import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {

  const { alt = '', childImageSharp, img } = imageInfo

  if (!!img && !!img.childImageSharp) {
    return (
      <Img style={{ width: imageInfo.imageWidth + 'px' }} fluid={img.childImageSharp.fluid} alt={imageInfo.imageLabel} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={{ width: imageInfo.imageWidth + 'px' }} fluid={childImageSharp.fluid} alt={imageInfo.imageLabel} />
  }

  if (!!img && typeof image === 'string')
    return <img style={{ width: imageInfo.imageWidth + 'px' }} src={img} alt={imageInfo.imageLabel} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
