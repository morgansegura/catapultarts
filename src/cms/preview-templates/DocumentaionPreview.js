import React from 'react'
import PropTypes from 'prop-types'
import { DocumentationTemplate } from '../../templates/docs'

const DocumentationPreview = ({ entry, widgetFor }) => (
  <DocumentationTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
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