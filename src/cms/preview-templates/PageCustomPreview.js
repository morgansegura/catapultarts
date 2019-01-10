import React from 'react'
import PropTypes from 'prop-types'
import { PageCustomTemplate } from '../../templates/page-custom'

const PageCustomPreview = ({ entry, widgetFor }) => (
  <PageCustomTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

PageCustomPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PageCustomPreview