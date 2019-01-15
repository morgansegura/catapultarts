import React from 'react'
import PropTypes from 'prop-types'
import { DocumentationTemplate } from '../../templates/docs-post'

const DocumentationPreview = ({ entry, widgetFor }) => (
  <DocumentationTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}    
    title={entry.getIn(['data', 'title'])}
  />
)

DocumentationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DocumentationPreview